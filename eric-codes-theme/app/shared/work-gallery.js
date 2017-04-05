

app.directive('workGallery', function(){

	function link_return(scope,elem,attr){

		scope.maindata;
		scope.workdata;

		scope.currentSlide = scope.maindata[1];

		scope.ChangeSlide = function(i){
			Log.Msg('Gallery item clicked!');
			scope.currentSlide = scope.maindata[i];
		}

		scope.GetImage = function(filename) {
			return themeURL + "assets/img/" + scope.workdata.slug + "/" + filename;
		}

	}

	// Runs during compile
	return {
		scope: {
			maindata: "=",
			workdata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-gallery'),
		 link: link_return
	};
});