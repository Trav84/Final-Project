angular.module('app.services', []) 
.factory('student', function() {
	return {};
})
.factory('completeTest', function() {
	return { 
		id: null,
		noTestFinished: true
	};
});

