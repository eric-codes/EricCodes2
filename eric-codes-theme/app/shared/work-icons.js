app.directive('workIcons', function(){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Tags = returnTags(scope.maindata);

	}

	return {
		scope: {
			maindata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-icons'),
		 link: link_return
	};
});