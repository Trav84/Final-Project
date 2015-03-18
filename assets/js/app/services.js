angular.module('app.services', []) 
.factory('getUserInfo', function($http) {

	return function(cb) {

		$http.get('/auth/user')
		.success(function(response) {
			cb(null, response.username);
		})
		.error(function(err) {
			cb(err);
		});
	};
})
.factory('student', function() {
	return {};
})
.factory('completeTest', function() {
	return { 
		id: null,
		noTestFinished: true
	};
});
