angular.module('app.services', []) 
.factory('getTestDetails', function($http) {

	return function() {
		var title = '';

		$http.get('/Suite')
		.success(function(testAndQuestions) {
			title = testAndQuestions[0].name;
		})
		.error(function(err) {
			console.log(err);
		});
		return title;
	};

})
.factory('testNumberShare', function () {
    return function(test) {
    	{testnumner: test};
    }
});