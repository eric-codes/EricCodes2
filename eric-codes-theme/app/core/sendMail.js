app.factory('sendMail', ['$http', function($http){

	var scope = {};

	scope.send = function(args) {
		$http({
			method: 'POST',
			URL: '/wp-json/ericcodes/v1/send'
		}).then(function(data){
			Log.Warning(data);
		},function(data){
			Log.Warning(data);
		})
	}

	return scope;
}])