
app.controller('CoreController', ['$scope', '$rootScope', 'loadData', function($scope,$rootScope,loadData){
	
	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	});
	
	$rootScope.Footer = true;

	loadData.GetData().then(function(data){
		Log.Set('LoadData test',data);

		var FileList = [];

		$.each(data.files,function(i,val){
			Log.Set('test',val);

			if (val.includes('json')) {

				FileList.push(val);
			}
		})

		Log.Set('FileList',FileList);

	}, function(data){
		Log.Set('LoadData test error',data);
	})

}])