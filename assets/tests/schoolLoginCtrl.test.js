describe('schoolLoginCtrl', function() {
	var $scope;
	var schoolLoginCtrl;

	beforeEach(module('app.controllers'));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		schoolLoginCtrl = $controller('schoolLogInCtrl', {$scope: $scope});
	}));

	it('Should default email to empty', function() {
		expect($scope.email).to.equal('');
	});

	it('Should default password to empty', function() {
		expect($scope.password).to.equal('');
	});

	it('Should not allow to log in without an email', function() {
		$scope.schoolLogin('', '');
		expect($scope.emailErrorMsg).to.equal('Please enter an email');
	});

	it('Should not allow to log in without a password', function() {
		$scope.schoolLogin('','');
		expect($scope.passErrorMsg).to.equal("Password is incorrect");
	});
})