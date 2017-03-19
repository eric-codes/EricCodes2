app.directive('workIcons', function(){

	function link_return(scope,elem,attr) {

		scope.Tags = returnTags(maindata);

	}

	return {
		scope: {
			maindata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-gallery'),
		 link: link_return
	};
});