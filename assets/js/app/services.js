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
.factory('testNumberShare', function () {
    return function(test) {
    	{testnumner: test};
    }
});