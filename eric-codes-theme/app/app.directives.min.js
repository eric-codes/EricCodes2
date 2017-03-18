

app.directive('workGallery', function(){

	function link_return(scope,elem,attr){
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