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
.controller('schoolRegisterCtrl', function($scope) {

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
})
.controller('studentDashboardCtrl', function($scope, $http, $state, testNumberShare) {

	$http.get('/Suite')
	.success(function(testData) {
		$scope.tests = testData;
	})
	.error(function(err){
		console.log(err);
	})

	$scope.testClick = function(test) {
		testNumberShare(test);
		console.log('Test '+test+' was chosen');
		$state.go('test');
	};
})
.controller('testCtrl', function($scope, $http, $state, testNumberShare) {

	var correctAnswer = null;
	var position = 0;
	var test = 0;
	var question = 0;
	var numberCorrect = 0;
	$scope.testNumber = testNumberShare.test;
	
	function getTestData(test, question) {
		if(question < 2) {
			$http.get('/Suite')
			.success(function(testAndQuestions) {
				$scope.title = testAndQuestions[test].name;
				$scope.question = testAndQuestions[test].questions[question].title;

				$http.get('/SuiteAnswers?SuiteQuestionID='+testAndQuestions[test].questions[question].id)
					.success(function(answers) {
						$scope.choices = answers;
						correctAnswer = testAndQuestions[test].questions[question].answer;
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

	getTestData(test,question);

	$scope.choiceClick = function(choice) {

		if(choice === correctAnswer) {
			console.log('Correct answer was selected');
			question++;
			numberCorrect++;
			getTestData(test, question);
		} 
		else {
			console.log('Wrong answer was selected');
			question++;
			getTestData(test, question);
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