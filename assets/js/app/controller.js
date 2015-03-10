angular.module('app.controllers', ['app.services'])
.controller('landingCtrl', function($scope, $http, $state) {

})
.controller('studentLogInCtrl', function($scope, $state) {

	$scope.studentLoginSubmit = function(key) {

		if(validator.isNull(key)) {
			console.log('Key is null');
			$scope.errorMsg = 'Please enter a valid key';
		}
		else if (key.length === 0) {
			console.log('Key has length of zero');
			$scope.errorMsg = 'Please enter a valid key';
		}
		else {
			$state.go('studentDashboard');
		}
	};
})
.controller('schoolLogInCtrl', function($scope, $state) {

	$scope.schoolRegisterClick = function() {
		$state.go('schoolRegister');
	};
})
.controller('schoolRegisterCtrl', function($scope, $http, $state) {

	$scope.programs = [];

	$scope.programNumber = function(num) {
		if(num.length === 0) {
			$scope.programs = [];
		} 
		else {
			for(var i=0; i<num;i++) {
				$scope.programs.push(i);
			}
			console.log($scope.programs);
		}
	};

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
			console.log('Password is too short')
		}
		else {
			errorObject.passPass = true;
			loginObject.password = password;
		}
		console.log(loginObject);

		if(errorObject.userPass && errorObject.emailPass && errorObject.passPass) {
			console.log('All pass, can post');
			$http.post('/auth/local/register', loginObject)
			.success(function(res) {
				console.log(res);
				if(res.errors.length > 0) {
					$scope.loginErrorArray = errorMessageSort(res.errors[0]);
				}
				if(res.success) {
					$state.go('scchoolDashboard');
				}
			})
			.error(function(err) {
				console.log('Error!');
				console.log(err);
			});
		}
	}
})
.controller('studentDashboardCtrl', function($scope, $http, $state, testNumberShare) {

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

});