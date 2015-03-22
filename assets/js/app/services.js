angular.module('app.services', []) 
.factory('student', function() {
	return {};
})
.factory('completeTest', function() {
	return { 
		testOne : {
			id: null,
			noTestFinished: true
		},
		testTwo: {
			id: null,
			noTestFinished: true
		}
	};
})
.factory('studentScore', function() {
	return {};
});

