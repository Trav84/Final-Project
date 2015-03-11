angular.module('app', ['app.controllers','ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
	.state('landing', {
		url: '/landing',
		templateUrl: 'templates/landing.html',
		controller: 'landingCtrl'
	})
	.state('studentLogIn', {
		url: '/studentLogIn',
		templateUrl: 'templates/studentLogIn.html',
		controller: 'studentLogInCtrl'
	})
	.state('schoolLogIn', {
		url: '/schoolLogIn',
		templateUrl: 'templates/schoolLogIn.html',
		controller: 'schoolLogInCtrl'
	})
	.state('studentDashboard', {
		url: '/studentDashboard',
		templateUrl: 'templates/studentDashboard.html',
		controller: 'studentDashboardCtrl'
	})
	.state('schoolDashboard', {
		url: '/schoolDashboard',
		templateUrl: 'templates/schoolDashboard.html',
		controller: 'schoolDashboardCtrl'
	})
	.state('schoolRegister', {
		url: '/schoolRegister',
		templateUrl: 'templates/schoolRegister.html',
		controller: 'schoolRegisterCtrl'
	})
	.state('test', {
		url: '/test/:id',
		templateUrl: 'templates/test.html',
		controller: 'testCtrl'
	})
	.state('testEnd', {
		url: '/testEnd',
		templateUrl: 'templates/testEnd.html',
		controller: 'testEndCtrl'
	})
	.state('codeSchools', {
		url: '/codeSchools',
		templateUrl: 'templates/codeSchools.html',
		controller: 'codeSchoolsCtrl'
	})
	.state('about', {
		url: '/about',
		templateUrl: 'templates/about.html',
		controller: 'aboutCtrl'
	})
	.state('manageTests', {
		url: '/manageTests',
		templateUrl: 'templates/manageTests.html',
		controller: 'manageTestsCtrl'
	})
	.state('manageStudents', {
		url: '/manageStudents',
		templateUrl: 'templates/manageStudents.html',
		controller: 'manageStudentsCtrl'
	})
	.state('managePrograms', {
		url: '/managePrograms',
		templateUrl: 'templates/managePrograms.html',
		controller: 'manageProgramsCtrl'
	});

	$urlRouterProvider.otherwise('/landing');
});