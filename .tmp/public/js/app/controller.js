angular.module('app.controllers', ['app.services'])
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

	$scope.addProgram = function(programAdded) {
		$scope.programs.push(programAdded);
		$scope.programAdded = '';
	};

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
.controller('testCtrl', function($scope, $http, $state, $stateParams, completeTest) {

	var correctAnswer = null;
	var position = 0;
	var test = $stateParams.id;
	var question = 0;
	var numberCorrect = 0;
	var numberOfQuestions = 5;
	$scope.questionNum = 1;
	console.log(completeTest);
	
	function getTestData(question) {
		if(question < numberOfQuestions) {
			$http.get('/Suite?id='+test)
			.success(function(testAndQuestions) {
				$scope.title = testAndQuestions.name;
				console.log(testAndQuestions);
				$scope.question = testAndQuestions.questions[question].title;
				numberOfQuestions = testAndQuestions.questions.length;
				console.log(testAndQuestions.id);
				completeTest.id = testAndQuestions.id;

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

		$scope.questionNum++;
		if(choice === correctAnswer) {
			console.log('Correct answer was selected');
			question++;
			numberCorrect++;
			getTestData(question);

		} 
		else {
			console.log('Wrong answer was selected');
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

	$http.get('/auth/user')
		.success(function(response) {
			$scope.userID = response.id;
			console.log(response);
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

	$http.get('/Suite')
		.success(function(response) {
			console.log(response);
			$scope.retrievedTests = response;
		})
		.error(function(err) {
			console.log(err);
		});

	//POST /:model/:record/:association/:record_to_add?
	// $http.post('/Program/22/Suite/1')
	// .success(function(res) {
	// 	console.log(response);
	// })
	// .error(function(err) {
	// 	console.log(err);
	// });	

	$scope.testChanged = function(testSelected) {
		$scope.testName = testSelected;
	};

	$scope.buttonClick = function(button) {
		if(button === 'Add') {
			$scope.Add = !$scope.Add;
			console.log('Add test button clicked');
		}
		else if (button === "Remove") {
			$scope.Remove = !$scope.Remove;
			console.log('Remove test button clicked');
		} 
		else if(button === "Create") {
			$scope.Create = !$scope.Create;
			console.log('Create test button clicked');
		}
	};

	$scope.testClick = function(test) {
		
	};

})
.controller('manageStudentsCtrl', function($scope, $state) {

	$scope.programName = "No Program Selected";
	$scope.message = '';
	$scope.showTable = false;
	$scope.showTable1 = false;

	$scope.changeName = function(programSelected) {
		$scope.programName = programSelected;

		if(programSelected === 'Front End Development') {
			$scope.message = '';
			$scope.showTable = true;
			$scope.showTable1 = false;
		} 
		else if(programSelected === 'Ruby on Rails') {
			$scope.message = '';
			$scope.showTable = false;
			$scope.showTable1 = true;
		}
		else {
			$scope.showTable = false;
			$scope.showTable1 = false;
			$scope.message = 'No students in program';
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
.controller('studentResultsCtrl', function($stateParams, $scope) {
	$scope.name = $stateParams.id;
	console.log($stateParams);
	console.log($scope.name);	
})
.controller('addStudentCtrl', function() {

});