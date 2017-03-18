

app.directive('workGallery', function(){

	function link_return(scope,elem,attr){

		scope.maindata;

		scope.currentSlide = scope.maindata[1];

		scope.ChangeSlide = function(i){
			scope.currentSlide = scope.maindata[i];
		}

	}

	// Runs during compile
	return {
		scope: {
			maindata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-gallery'),
		 link: link_return
	};
});