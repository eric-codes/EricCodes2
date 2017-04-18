app.factory('sendMail', ['$http', function($http){

	var scope = {};

	scope.send = function(args,callback) {
		Log.Warning('Sending mail...');
		Log.Set('Arguments..',args);
		$http({
			method: 'POST',
			url: '/wp-json/ericcodes/v1/send',
			data: args
		}).then(function(data){
			Log.Set('RETURN DATA',data);
			if (callback) {
				callback(data);
			} else {
				return data;
			}
		},function(data){
			Log.Set('ERROR DATA',data);
			if (callback) {
				callback(data);
			} else {
				return data;
			}
		})
	}

	return scope;
}])