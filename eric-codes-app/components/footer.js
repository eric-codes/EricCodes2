

app.controller('footer', ['$scope', function($scope){
	
	$scope.ScrollToTop = function(){
		$('body').animate({
			scrollTop:0
		},1000);
	}

}])