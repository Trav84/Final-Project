angular.module('app.controllers', ['app.services', 'ui.router'])
.controller('landingCtrl', function($scope, $http, $state) {

	$scope.logoutClick = function() {
		$http.get('/logout')
		.success(function(recieved) {
			$state.go('landing');
		})
		.error(function(err) {
			console.log(err);
		});
	};
})
.controller('studentLogInCtrl', function($scope, $state, $http, student) {

	$scope.studentLoginSubmit = function(key) {

		$http.get('/Student?loginKey='+key)
		.success(function(recieved) {
			if(recieved.length > 0) {
				student.info = recieved[0];
				$state.go('studentDashboard');
			}
			else {
				$scope.errorMsg = 'Key is not valid.';
				$scope.uniqueKey = '';
			}
		})
		.error(function(err) {
			console.log(err);
		});		
	};
})
.controller('schoolLogInCtrl', function($scope, $state, $http) {

	$scope.email = '';
	$scope.password = '';

	$scope.schoolLogin = function(email, pass) {

		var loginObject = {
			identifier: '',
			password: ''
		};

		if(validator.isNull(email)) {
			$scope.emailErrorMsg = "Please enter an email";
		}
		else if(!validator.isEmail(email)) {
			$scope.emailErrorMsg = "Email is not valid";
		}
		else {
			$scope.emailErrorMsg = '';
			loginObject.identifier = email;
		}

		if(validator.isNull(pass)) {
			$scope.passErrorMsg = "Password is incorrect";
		}
		else {
			$scope.passErrorMsg = '';
			loginObject.password = pass;
		}

		$http.post('/auth/local', loginObject)
			.success(function(res) {
				$http.get('/auth/user')
				.success(function(response) {
					console.log(response);
					$scope.currentUser = response.username;
					$state.go('schoolDashboard');
				})
				.error(function(err) {
					console.log(err);
				});					
			})
			.error(function(err) {
				console.log(err);
				$scope.loginErrorMsg = err.summary;
			});
	};

	$scope.schoolRegisterClick = function() {
		$state.go('schoolRegister');
	};
})
.controller('schoolRegisterCtrl', function($scope, $http, $state) {

	$scope.programs = [];
	$scope.userID = null;
	$scope.nameErrorMsg = '';
	$scope.emailErrorMsg = '';
	$scope.passErrorMsg = '';
	$scope.registerErrorMsg = '';

	$scope.schoolRegister = function(username, email, password) {
		var errorObject = {
			userPass: false,
			emailPass: false,
			passPass: false
		};
		var loginObject = {
			username: '',
			email: '',
			password: ''
		};

		if(validator.isNull(username)) {
			$scope.nameErrorMsg = 'Please enter a name';
		}
		else if(username.length === 0) {
			$scope.nameErrorMsg = 'Please enter a name';
		}
		else {
			errorObject.userPass = true;
			loginObject.username = username;
			$scope.nameErrorMsg = '';
		}

		if(!validator.isEmail(email)) {
			$scope.emailErrorMsg = 'Enter a valid email';
		}
		else if(email.length === 0) {
			$scope.emailErrorMsg = 'Enter a valid email';
		}
		else {
			errorObject.emailPass = true;
			loginObject.email = email;
			$scope.emailErrorMsg = '';
		}

		if(validator.isNull(password)) {
			$scope.passErrorMsg = 'Enter a password';
		}
		else if(password.length === 0) {
			$scope.passErrorMsg = 'Enter a password';
		}
		else if(password.length < 8) {
			$scope.passErrorMsg = 'Your password must be at least 8 characters long';
		}
		else {
			errorObject.passPass = true;
			loginObject.password = password;
			$scope.passErrorMsg = '';
		}

		if(errorObject.userPass && errorObject.emailPass && errorObject.passPass) {
			$http.post('/auth/local/register', loginObject)
			.success(function(res) {
				$state.go('schoolDashboard');
			})
			.error(function(err) {
				$scope.registerErrorMsg = err.summary;
			});
		}
	};
})
.controller('studentDashboardCtrl', function($scope, $http, $state, student, completeTest) {

	$scope.studentName = student.info.name;
	$scope.studentProgram = student.info.studentID.name;
	$scope.tests = [];

	$http.get('/Suite')
	.success(function(testData) {
		if(!completeTest.noTestFinished) {
			for(var key in testData) {
				if(completeTest.id !== testData[key].id) {
					$scope.tests.push(testData[key]);
				}
			}
		}
		else {
			$scope.tests = testData;			
		}
	})
	.error(function(err){
		console.log(err);
	});

	$scope.testClick = function(testID) {
		$state.go('test',{id:testID});
	};
})
.controller('testCtrl', function($scope, $http, $state, $stateParams, completeTest, student) {

	var correctAnswer = null;
	var position = 0;
	var test = $stateParams.id;
	var question = 0;
	var numberCorrect = 0;
	var numberOfQuestions = 5;
	var answerObject = {
		questionID: '',
		studentID: '',
		answer: '',
		correct: false,
		suiteID: test
	};
	$scope.questionNum = 1;
	console.log(completeTest);
	
	function getTestData(question) {
		answerObject = {
			questionID: '',
			studentID: '',
			answer: '',
			correct: false,
			suiteID: test
		};
		if(question < numberOfQuestions) {
			$http.get('/Suite?id='+test)
			.success(function(testAndQuestions) {
				$scope.title = testAndQuestions.name;
				console.log(testAndQuestions);
				$scope.question = testAndQuestions.questions[question].title;
				numberOfQuestions = testAndQuestions.questions.length;
				completeTest.id = testAndQuestions.id;
				answerObject.questionID = completeTest.id;

				$http.get('/SuiteAnswers?SuiteQuestionID='+testAndQuestions.questions[question].id)
					.success(function(answers) {
						$scope.choices = answers;
						correctAnswer = testAndQuestions.questions[question].answer;
					})
					.error(function(err) {
						console.log(err);
					});
				})
			.error(function(err) {
				console.log(err);
			});
		}
		else {
			console.log('No more questions. End of test');
			console.log('Student got '+numberCorrect+' answers correct');
			completeTest.noTestFinished = false;
			$state.go('testEnd');
		}
	}

	getTestData(question);

	$scope.choiceClick = function(choice) {

		answerObject.studentID = student.info.id;
		answerObject.answer = choice;
		console.log(answerObject);

		$scope.questionNum++;
		if(choice === correctAnswer) {
			console.log('Correct answer was selected');
			question++;
			numberCorrect++;	
			answerObject.correct = true;
			console.log(answerObject);

			$http.post('/StudentAnswer', answerObject)
			.success(function(res) {
				console.log('Answer posted');
			})
			.error(function(err) {
				console.log(err);
			});

			getTestData(question);		
		} 
		else {
			console.log('Wrong answer was selected');
			answerObject.correct = false;
			$http.post('/StudentAnswer', answerObject)
			.success(function(res) {
				console.log('Answer posted');
			})
			.error(function(err) {
				console.log(err);
			});

			question++;
			getTestData(question);
		}
	};
})
.controller('testEndCtrl', function($state, $scope) {
	$scope.buttonClick = function() {
		$state.go('studentDashboard');
	};
})
.controller('codeSchoolsCtrl', function() {

})
.controller('aboutCtrl', function() {

})
.controller('schoolDashboardCtrl', function($scope, $http) {
	
	$http.get('/auth/user')
		.success(function(response) {
			$scope.currentUser = response.username;
		})
		.error(function(err) {
			console.log(err);
		});

})
.controller('manageTestsCtrl', function($scope, $http) {

	$scope.testName = "Test Suite Management";
	$scope.retrievedPrograms = [];
	$scope.test = "test";
	$scope.noTestMsg = '';
	$scope.errorMsg = false;

	$http.get('/auth/user')
		.success(function(response) {
			$scope.userID = response.id;
			getPrograms();
		})
		.error(function(err) {
			console.log(err);
		});

	function getPrograms() {	

		$http.get('/Program?programID='+$scope.userID)
		.success(function(response) {
			console.log(response);
			$scope.retrievedPrograms = response;
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function removeTest(testName) {

		for(var key in $scope.retrievedPrograms) {
			if($scope.retrievedPrograms[key].name === testName) {
				$scope.programTests = $scope.retrievedPrograms[key].suites;
				$scope.programID = $scope.retrievedPrograms[key].id;
				$scope.noTestMsg = '';
			}
		}

		if($scope.programTests.length === 0) {
			console.log(' No tests');
			$scope.noTestMsg = 'No Tests Associated';
		}

		getPrograms();
	}

	$scope.addTest = function(testId) {
		console.log(testId);
		//POST /:model/:record/:association/:record_to_add?
		$http.post('/Program/'+$scope.programID+'/suites/'+testId)
		.success(function(res) {
			console.log(response);
		})
		.error(function(err) {
			console.log(err);
		});	
	};

	$http.get('/Suite')
	.success(function(response) {
			$scope.retrievedTests = response;
		})
		.error(function(err) {
			console.log(err);
		});

	$scope.testChanged = function(testSelected) {
		console.log(testSelected);
		$scope.testName = testSelected;
		removeTest(testSelected);
	};

	$scope.buttonClick = function(button) {
		if(button === 'Add') {
			$scope.Add = !$scope.Add;
		}
		else if (button === "Remove") {
			$scope.Remove = !$scope.Remove;
		} 
		else if(button === "Create") {
			$scope.Create = !$scope.Create;
		}
	};
})
.controller('manageStudentsCtrl', function($scope, $state, $http) {

	$scope.programName = "Select A Program";
	$scope.studentArray = [];
	$scope.answerArray = [];
	$scope.schoolPrograms = [];
	$scope.suitesInProgram = [];
	$scope.studentsInProgram = [];
	$scope.testResults = [];
	$scope.message = '';
	$scope.allTableShow = false;
	var loggedInSchool = '';

	function getUser() {
		$http.get('/auth/user')
		.success(function(response) {
			loggedInSchool = response.username;
			getPrograms();
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function getStudents() {
		$http.get('/Student')
		.success(function(response) {
			$scope.studentArray = response;
			console.log($scope.studentArray);
			getStudentResults();
		})
		.error(function(err) {
			console.log(err);
		});
	}

	getUser();
	getStudents();

	function getStudentResults() {
		var test1 = 0;
		var test2 = 0;
		for(var key in $scope.studentArray) {
			for(var result in $scope.studentArray[key].studentAnswers) {
				//console.log($scope.studentArray[key].studentAnswers[result].correct);
				if($scope.studentArray[key].studentAnswers[result].correct) {
					total++;
				}
			}
			console.log(total);
		}
	}

	function getPrograms() {
		$http.get('/Program')
		.success(function(response) {
			$scope.programArray = response;
			for(var key in $scope.programArray) {
				if(loggedInSchool === $scope.programArray[key].programID.username) {
					$scope.schoolPrograms.push($scope.programArray[key].name);
				}
			}
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function getSuitesInProgram(programSelected) {
		for(var key in $scope.programArray) {
			if(programSelected === $scope.programArray[key].name) {
				$scope.suitesInProgram = $scope.programArray[key].suites;
			}
		}
	}

	$scope.changeName = function(programSelected) {
		getSuitesInProgram(programSelected);
		$scope.programName = programSelected;
		$scope.studentsInProgram = [];

		for(var key in $scope.studentArray) {
			if($scope.studentArray[key].studentID.name === programSelected) {
				console.log('Student '+$scope.studentArray[key].name+" is in this program");
				$scope.studentsInProgram.push($scope.studentArray[key].name);
			}
		}

		if($scope.studentsInProgram.length === 0) {
			$scope.message = "No Students In Program";
		}
		else {
			$scope.message = "";
			$scope.allTableShow = true;
		}
	};

	$scope.studentResults = function(studentName) {
		console.log('Student '+studentName+' was chosen');
		$state.go('studentResults',{id:studentName});
	};

})
.controller('manageProgramsCtrl', function($scope, $http) {

	$scope.programs = [];
	$scope.confirmMsg = '';

	$http.get('/auth/user')
	.success(function(response) {
		$scope.userID = response.id;
	})
	.error(function(err) {
		console.log(err);
	});

	$scope.addProgram = function(programAdded) {
		$scope.programs.push(programAdded);
		$scope.programAdded = '';
		console.log($scope.programs);
		$scope.confirmMsg = '';
	};

	$scope.saveClick = function() {
		for(var key in $scope.programs) {
			$http.post('/Program', { name: $scope.programs[key], programID: $scope.userID})
			.success(function(res) {
				console.log(res);
				console.log('Posted program model');
				$scope.programs = [];
				$scope.confirmMsg = 'Programs Updated';
			})
			.error(function(err) {
				console.log(err);
			});	
		}
	};
})
.controller('studentResultsCtrl', function($stateParams, $scope, $http) {
	$scope.name = $stateParams.id;
	console.log($stateParams);
	$scope.numberCorrect = 0;	

	var bar = $('.progress-bar');
	$(function(){
		$(bar).each(function(){
			bar_width = $(this).attr('aria-valuenow');
			$(this).width(bar_width + '%');
		});
	});

	$http.get('/Student?name='+$scope.name)
	.success(function(response) {
		console.log(response);
	})
	.error(function(err) {
		console.log(err);
	});
})
.controller('addStudentCtrl', function($scope) {
	$scope.programClick = function() {
		console.log('click');
	};
});