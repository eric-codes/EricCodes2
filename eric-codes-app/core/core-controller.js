
app.controller('CoreController', ['$scope', '$rootScope', function($scope,$rootScope){
	
	$rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
		$('html, body').animate({
			scrollTop: 0
		}, 0);
	});
	
	$rootScope.Footer = true;

}])