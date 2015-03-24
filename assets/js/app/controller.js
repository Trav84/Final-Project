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
.controller('studentLogInCtrl', function($scope, $state, $http, student, completeTest) {

	$scope.studentLoginSubmit = function(key) {

		completeTest.testOne.complete = false;
		completeTest.testTwo.complete = false;

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
	$scope.allTestsDone = false;
	$scope.noTestsAssoc = false;
	var numOfSuites = null;

	$http.get('/Program?id='+student.info.studentID.id)
	.success(function(response) {
		numOfSuites = response.suites.length;

		for(var i=0;i < response.suites.length; i++) {
			if(completeTest.testOne.complete) {
				if(response.suites[i].id == completeTest.testOne.id) {
					response.suites.splice(i, 1);
				}
			}
			if(completeTest.testTwo.complete) {
				if(response.suites[i].id == completeTest.testTwo.id) {
					response.suites.splice(i,1);
				}
			}
		}
		$scope.tests = response.suites;
		if($scope.tests.length === 0) {
			if(numOfSuites === 1) {
				if(completeTest.testOne.complete || completeTest.testTwo.complete) {
					$scope.allTestsDone = true;
				}
			}
			else if (numOfSuites === 2) {
				if(completeTest.testOne.complete && completeTest.testTwo.complete) {
					$scope.allTestsDone = true;
				}
			}
			else {
				$scope.noTestsAssoc = true;
			}
		}
	})
	.error(function(err) {
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
	var isTestOne = false;
	var answerObject = {
		questionID: '',
		studentID: '',
		answer: '',
		correct: false,
		suiteID: test
	};
	$scope.questionNum = 1;
	
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
				$scope.question = testAndQuestions.questions[question].title;
				numberOfQuestions = testAndQuestions.questions.length;
				if(test == 1) {
					completeTest.testOne.id = testAndQuestions.id;
					answerObject.questionID = testAndQuestions.id;
					isTestOne = true;
				}
				else if (test == 2) {
					completeTest.testTwo.id = testAndQuestions.id;
					answerObject.questionID = testAndQuestions.id;
					isTestOne = false;
				}

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
			if(isTestOne) {
				completeTest.testOne.complete = true;
			}
			else if(!isTestOne) {
				completeTest.testTwo.complete = true;
			}
			
			$state.go('testEnd');
		}
	}

	getTestData(question);

	$scope.choiceClick = function(choice) {

		answerObject.studentID = student.info.id;
		answerObject.answer = choice;

		$scope.questionNum++;
		if(choice === correctAnswer) {
			question++;
			numberCorrect++;	
			answerObject.correct = true;

			$http.post('/StudentAnswer', answerObject)
			.success(function(res) {
				
			})
			.error(function(err) {
				console.log(err);
			});

			getTestData(question);		
		} 
		else {
			answerObject.correct = false;
			$http.post('/StudentAnswer', answerObject)
			.success(function(res) {
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
			$scope.noTestMsg = 'No Tests Associated';
		}

		getPrograms();
	}

	$scope.addTest = function(testId) {
		//POST /:model/:record/:association/:record_to_add?
		$http.post('/Program/'+$scope.programID+'/suites/'+testId)
		.success(function(res) {
			getPrograms();
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
.controller('manageStudentsCtrl', function($scope, $state, $http, studentScore) {

	$scope.programName = "Select A Program";
	$scope.suitesArray = [];
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
			getStudentResults();
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function getSuites() {
		$http.get('/Suite')
		.success(function(response) {
			$scope.suitesArray = response;
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function getStudentResults() {
		var test1 = 0;
		var test2 = 0;
		for(var x=0; x < $scope.studentArray.length; x++) {

			var answerCount = _.countBy($scope.studentArray[x].studentAnswers, function(answer) {
				return answer.suiteID;
			});

			$scope.studentArray[x].answerCount = answerCount;
		}
	}

	getSuites();
	getUser();
	getStudents();

	function isTestComplete(suiteID) {
		suiteID = 2;
		for(var i=0; i < $scope.studentsInProgram.length; i++) {
			for(var x=1; x <= suiteID; x++) {
				if($scope.studentsInProgram[i].answerCount[x] >= 5) {
					$scope.studentsInProgram[i][x] = true;
				}
				else {
					$scope.studentsInProgram[i][x] = false;
				}
			}
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
		$scope.suitesInProgram = _.filter($scope.suitesArray, function(suite) {
			for(var i=0; i < suite.programs.length; i++) {
				if(suite.programs[i].name === programSelected) {
					return true;
				}
			} 
			return false;
		});
	}

	$scope.changeName = function(programSelected) {
		getSuitesInProgram(programSelected);
		$scope.programName = programSelected;
		$scope.studentsInProgram = [];

		for(var key in $scope.studentArray) {
			if($scope.studentArray[key].studentID.name === programSelected) {
				$scope.studentsInProgram.push($scope.studentArray[key]);
			}
		}

		isTestComplete($scope.suitesInProgram.length);

		if($scope.studentsInProgram.length === 0) {
			$scope.message = "No Students In Program";
		}
		else {
			$scope.message = "";
			$scope.allTableShow = true;
		}
	};

	$scope.studentResults = function(name) {
		studentScore.name = name;
		$state.go('studentResults');
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
		$scope.confirmMsg = '';
	};

	$scope.saveClick = function() {
		for(var key in $scope.programs) {
			$http.post('/Program', { name: $scope.programs[key], programID: $scope.userID})
			.success(function(res) {
				$scope.programs = [];
				$scope.confirmMsg = 'Programs Updated';
			})
			.error(function(err) {
				console.log(err);
			});	
		}
	};
})
.controller('studentResultsCtrl', function($scope, $http, studentScore) {
	$scope.numberCorrect = 0;	
	$scope.studentName = studentScore.name;
	var answerArray = [];
	var resultArray = [];
	$scope.test1Total = null;
	$scope.test2Total = null;
	var test = 0;
	var test2 = 0;

	function calcScores() {
		for(var i=0; i < answerArray.length; i++) {
			if(answerArray[i].suiteID === 1) {
				if(answerArray[i].correct) {
					test++;
				}
			}
			if(answerArray[i].suiteID === 2) {
				if(answerArray[i].correct) {
					test2++;
				}
			}
		}
		if(answerArray.length >= 5) {
			$scope.test1Total = (test/5)*100;

			if($scope.test1Total > 100) {
				$scope.test1Total = 100;
			}
			resultArray.push($scope.test1Total);
			$scope.test2Total = (test2/5)*100;
			if($scope.test2Total > 100) {
				$scope.test2Total = 100;
			}

			resultArray.push($scope.test2Total);

			runAnimation();
		}
		
	}

	function runAnimation() {
		var i = 0;
		var bar = $('.progress-bar');
		$(function(){
			$(bar).each(function(){
				//bar_width = $(this).attr('aria-valuenow');
				//$(this).width(bar_width + '%');
				$(this).width(resultArray[i] + '%');
				i++;
			});
		});
	}

	$http.get('/Student?name='+$scope.studentName)
	.success(function(response) {
		answerArray = response[0].studentAnswers;
		calcScores();
	})
	.error(function(err) {
		console.log(err);
	});
})
.controller('addStudentCtrl', function($scope, $http) {
	var studentObj = {
		name: '',
		email: '',
		studentID: '',
		loginKey: ''
	};
	var emailPass = false;
	var namePass = false;
	var programPass = false;
	var programID = null;

	function getUser() {
		$http.get('/auth/user')
		.success(function(response) {
			getSuitesInProgram(response.id);
		})
		.error(function(err) {
			console.log(err);
		});
	}

	function getSuitesInProgram(schoolID) {

		$http.get('Program?programID='+schoolID)
		.success(function(response) {
			$scope.suitesInProgram = response;
		})
		.error(function(err) {
			console.log(err);
		});
	}

	$scope.getProgramID = function(program) {	
		for(var i = 0; i < $scope.suitesInProgram.length; i++) {
			if(program === $scope.suitesInProgram[i].name) {
				programID = $scope.suitesInProgram[i].id;
				programPass = true;
			}
		}
	};

	getUser();

	$scope.programClick = function() {

	};

	$scope.addStudent = function(name, email, program) {
		$scope.successMsg = '';

		if(validator.isNull(name)) {
			$scope.nameErrorMsg = 'Please enter the student\'s name';
		}
		else if(name.length === 0) {
			$scope.nameErrorMsg = 'Please enter the student\'s name';
		} 
		else {
			studentObj.name = name;
			namePass = true;
			$scope.nameErrorMsg = '';
		}

		if(validator.isNull(email)) {
			$scope.emailErrorMsg = 'Please enter the student\s email';
		}
		else if(!validator.isEmail(email)) {
			$scope.emailErrorMsg = 'Please enter a valid email';
		}
		else {
			studentObj.email = email;
			emailPass = true;
			$scope.emailErrorMsg = '';
		}

		if(validator.isNull(program)) {
			$scope.programErrorMsg = 'Please select which program this student is enrolled in';
		}
		else {
			studentObj.studentID = programID;
			$scope.programErrorMsg = '';
		}

		if(emailPass && namePass && programPass) {
			studentObj.loginKey = studentObj.name+'key';

			$http.post('/Student', studentObj)
			.success(function(response) {
				$scope.successMsg = 'Student Succesfully Added';
				$scope.studentName = '';
				$scope.studentEmail = '';
			})
			.error(function(err) {
				console.log(err);
			});
		}
	};
});