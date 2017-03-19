
app.controller('CoreController', ['$scope', '$rootScope', 'loadData', function($scope,$rootScope,loadData){
	
	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	});
	
	$rootScope.Footer = true;

	Log.Value('LoadData Test',LoadData.GetData());

}])