angular.module('app.controllers', ['app.services'])
.controller('landingCtrl', function($scope, $http, $state) {
	$scope.logoutClick = function() {
		$http.get('/logout')
		.success(function(recieved) {
			console.log('Logged out');
			$state.go('landing');
		})
		.error(function(err) {
			console.log(err);
		});
	}
})
.controller('studentLogInCtrl', function($scope, $state, $http, student) {

	$scope.studentLoginSubmit = function(key) {

		$http.get('/Student?loginKey='+key)
		.success(function(recieved) {
			console.log('Grabbing student data...');
			if(recieved.length > 0) {
				student.info = recieved[0];
				$state.go('studentDashboard');
			}
			else {
				$scope.errorMsg = 'Key is not valid.';
			}
		})
		.error(function(err) {
			console.log(err);
		});

		// if(validator.isNull(key)) {
		// 	$scope.errorMsg = 'Please enter a valid key';
		// }
		// else if (key.length === 0) {
		// 	$scope.errorMsg = 'Please enter a valid key';
		// }
		// else if(correctKey) {
			
		// }
		
	};
})
.controller('schoolLogInCtrl', function($scope, $state, $http) {

	$scope.schoolLogin = function(user) {
		loginObject = {
			identifier: user.email,
			password: user.password
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
				console.log('Error!');
				console.log(err);
			});
	}

	$scope.schoolRegisterClick = function() {
		$state.go('schoolRegister');
	};
})
.controller('schoolRegisterCtrl', function($scope, $http, $state) {

	$scope.programs = [];
	$scope.userID = null;

	// $http.get('/auth/user')
	// 	.success(function(response) {
	// 		$scope.userID = response.id;
	// 	})
	// 	.error(function(err) {
	// 		console.log(err);
	// 	});		

	$scope.addProgram = function(programAdded) {
		$scope.programs.push(programAdded);
		$scope.programAdded = '';
	}

	$scope.schoolRegister = function(username, email, password) {
		var errorObject = {
			userPass: false,
			emailPass: false,
			passPass: false
		}
		var loginObject = {
			username: '',
			email: '',
			password: ''
		}

		if(validator.isNull(username)) {
			console.log('Username is null');
		}
		else if(username.length === 0) {
			console.log('Username is an empty string');
		}
		else {
			errorObject.userPass = true;
			loginObject.username = username;
		}

		if(!validator.isEmail(email)) {
			console.log('Email is not a valid email');
		}
		else if(email.length === 0) {
			console.log('Email is an empty string');
		}
		else {
			errorObject.emailPass = true;
			loginObject.email = email;
		}

		if(validator.isNull(password)) {
			console.log('Password is null');
		}
		else if(password.length === 0) {
			console.log('Password is an empty string');
		}
		else if(password.length < 8) {
			console.log('Password is too short');
		}
		else {
			errorObject.passPass = true;
			loginObject.password = password;
		}
		console.log(loginObject);

		// for(var key in $scope.programs) {
		// 	console.log(key+' Added');
		// 	$http.post('Program', { name: key, programID: $scope.userID });
		// }

		if(errorObject.userPass && errorObject.emailPass && errorObject.passPass) {
			console.log('All pass, can post');
			$http.post('/auth/local/register', loginObject)
			.success(function(res) {
				console.log(res);
				if(res.success) {
					$state.go('schoolDashboard');
				}
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	}
})
.controller('studentDashboardCtrl', function($scope, $http, $state, student) {
	console.log(student);
	$scope.studentName = student.info.name;
	$scope.studentProgram = student.info.studentID.name;

	console.log($scope.studentName);
	console.log($scope.studentProgram);

	$http.get('/Suite')
	.success(function(testData) {
		$scope.tests = testData;
	})
	.error(function(err){
		console.log(err);
	})

	$scope.testClick = function(testID) {
		console.log('Test '+testID+' was chosen');
		$state.go('test',{id:testID});
	};
})
.controller('testCtrl', function($scope, $http, $state, $stateParams) {

	var correctAnswer = null;
	var position = 0;
	var test = $stateParams.id;
	var question = 0;
	var numberCorrect = 0;
	
	function getTestData(question) {
		if(question < 2) {
			$http.get('/Suite?id='+test)
			.success(function(testAndQuestions) {
				$scope.title = testAndQuestions.name;
				$scope.question = testAndQuestions.questions[question].title;

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
			$state.go('testEnd');
		}
	}

	getTestData(question);

	$scope.choiceClick = function(choice) {

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
	}
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
	}

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
	}

	$scope.testClick = function(test) {
		
	}

})
.controller('manageStudentsCtrl', function($scope) {

	$scope.programName = "No Program Selected";

	$scope.changeName = function(programSelected) {
		$scope.programName = programSelected;
	}
})
.controller('manageProgramsCtrl', function($scope, $http) {

	$scope.programs = [];

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
	}

	$scope.saveClick = function() {
		for(var key in $scope.programs) {
			$http.post('/Program', { name: $scope.programs[key], programID: $scope.userID})
			.success(function(res) {
				console.log(res);
				console.log('Posted program model');
			})
			.error(function(err) {
				console.log(err);
			});	
		}
	}
})
.controller('studentResultsCtrl', function() {

});