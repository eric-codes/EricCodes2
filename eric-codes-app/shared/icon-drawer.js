app.directive('iconDrawer', ['$rootScope', function($rootScope){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Links;

		scope.chevron = "left";

		scope.$watch('maindata',function(){
			scope.Links = scope.maindata;
		},true);

	}

    // Runs during compile
    return {
        scope: {
            maindata: "="
        },
        restrict: 'E',
        templateUrl: GetShared('icon-drawer'),
        link: link_return
    };
}]);