

app.directive('workGallery', function(){

	function link_return(scope,elem,attr){

		scope.Click = function(){
			alert('click is good');
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