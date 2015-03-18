describe('schoolRegisterCtrl', function() {
	var $scope;
	var schoolRegisterCtrl;

	beforeEach(module('app.controllers'));

	beforeEach(inject(function($rootScope, $controller) {
		$scope = $rootScope.$new();
		schoolRegisterCtrl = $controller('schoolRegisterCtrl', {$scope: $scope});
	}));

	it('Should default name error msg to empty', function() {
		expect($scope.nameErrorMsg).to.equal('');
	});
	
	it('Should default email erorr msg to empty', function() {
		expect($scope.emailErrorMsg).to.equal('');
	});

	it('Should default password error msg to empty', function() {
		expect($scope.passErrorMsg).to.equal('');
	});

	it('Should default register error msg to empty', function() {
		expect($scope.registerErrorMsg).to.equal('');
	});

	it('Should not throw an error when user name is empty', function() {
		$scope.schoolRegister('','','');
		expect($scope.nameErrorMsg).to.equal('Please enter a name');

		$scope.schoolRegister('Tom','','');
		expect($scope.nameErrorMsg).to.equal('');
	});	

	it('Should not throw an error when email is empty', function() {
		$scope.schoolRegister('','','');
		expect($scope.emailErrorMsg).to.equal('Enter a valid email');
	});	

	it('Should not allow an in-valid email', function() {
		$scope.schoolRegister('','cat.com','');
		expect($scope.emailErrorMsg).to.equal('Enter a valid email');

		$scope.schoolRegister('','ImanEmail@','');
		expect($scope.emailErrorMsg).to.equal('Enter a valid email');

		$scope.schoolRegister('','test@test.com','');
		expect($scope.emailErrorMsg).to.equal('');
	});	

	it('Should not throw error when password is empty', function() {
		$scope.schoolRegister('','','');
		expect($scope.passErrorMsg).to.equal('Enter a password');
	});	

	it('Should not allow passwords of length less than 8', function() {
		$scope.schoolRegister('','','1234567');
		expect($scope.passErrorMsg).to.equal('Your password must be at least 8 characters long');

		$scope.schoolRegister('','','cats');
		expect($scope.passErrorMsg).to.equal('Your password must be at least 8 characters long');

		$scope.schoolRegister('','','te4p#as');
		expect($scope.passErrorMsg).to.equal('Your password must be at least 8 characters long');

		$scope.schoolRegister('','','ImARealPassword');
		expect($scope.passErrorMsg).to.equal('');
	});


})