angular.module('app.controllers', [])
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
.controller('schoolRegisterCtrl', function() {

})
.controller('studentDashboardCtrl', function($scope, $state) {

	$scope.testClick = function() {
		$state.go('test');
	};
})
.controller('testCtrl', function($scope, $http) {

	var correctAnswer = null;
	var position = 0;
	var questionArray = [];

	$http.get('/Suite')
	.success(function(allQuestions) {
		questionArray = allQuestions;
		$scope.title = questionArray[0].name;
		$scope.question = questionArray[0].questions[0].title;

			$http.get('/SuiteAnswers?SuiteQuestionID='+questionArray[0].questions[0].id)
			.success(function(answers) {
				$scope.choices = answers;
				correctAnswer = questionArray[0].questions[position].answer;
			})
			.error(function(err) {
				console.log(err);
			});
	})
	.error(function(err) {
		console.log(err);
	});

	function getQuestion(position) {
		$scope.question = questionArray[0].questions[position].title;

		$http.get('/SuiteAnswers?SuiteQuestionID='+questionArray[0].questions[position].id)
			.success(function(answers) {
				$scope.choices = answers;
				correctAnswer = questionArray[0].questions[position].answer;
			})
			.error(function(err) {
				console.log(err);
			});
	}


	$scope.choiceClick = function(choice) {
		if(choice === correctAnswer) {
			console.log('Correct answer was selected');
			position++;
			getQuestion(position);
		} 
		else {
			console.log('Wrong answer was selected');
		}
	};
});