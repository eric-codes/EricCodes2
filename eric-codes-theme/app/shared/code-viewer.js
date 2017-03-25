app.directive('codeViewer', ['$rootScope', function($rootScope){


	function link_return(scope,elem,attr) {

		var scope = {};

		scope.maindata;
		scope.Active;

		scope.OutputData = scope.maindata;

		scope.Active = scope.OutputData[0];


	}


    // Runs during compile
    return {
        scope: {
            maindata: "="
        },
        restrict: 'E',
        templateUrl: GetShared('code-viewer'),
        link: link_return
    };
}]);