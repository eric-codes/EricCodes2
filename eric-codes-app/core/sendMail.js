app.factory('sendMail', ['$http', function($http){

	var scope = {};

	scope.send = function(args) {
		Log.Warning('Sending mail...');
		Log.Set('Arguments..',args);
		$http({
			method: 'POST',
			url: '/wp-json/ericcodes/v1/send'
		}).then(function(data){
			Log.Set('RETURN DATA',data);
		},function(data){
			Log.Set('ERROR DATA',data);
		})
	}

	return scope;
}])