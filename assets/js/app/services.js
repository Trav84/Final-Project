angular.module('app.services', []) 
.factory('student', function() {
	return {};
})
.factory('completeTest', function() {
	return { 
		testOne : {
			id: null,
			complete: false
		},
		testTwo: {
			id: null,
			complete: false
		}
	};
})
.factory('studentScore', function() {
	return {};
});

