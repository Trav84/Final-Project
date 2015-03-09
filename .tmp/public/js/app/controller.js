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
.controller('testCtrl', function() {

});
