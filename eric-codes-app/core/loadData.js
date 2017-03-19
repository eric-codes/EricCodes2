app.service('loadData', ['$rootScope', function($rootScope){
	
	var scope = {};

	scope.GetData = function(){

		$.$.ajax({
			url: themeURL + "",
			type: 'default GET (Other values: POST)',
			dataType: 'default: Intelligent Guess (Other values: xml, json, script, or html)',
			data: {param1: 'value1'},
		})
		.done(function() {
			console.log("success");
		})
		.fail(function() {
			console.log("error");
		})
		.always(function() {
			console.log("complete");
		});
		

	}

	return scope;

}])