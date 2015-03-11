angular.module('app.services', []) 
.factory('getTestDetails', function($http) {

	return function(cb) {
		var title = '';

		$http.get('/Suite')
		.success(function(testAndQuestions) {
			cb(null, testAndQuestions[0].name);
		})
		.error(function(err) {
			cb(err);
		});
		return title;
	};

})
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
});
