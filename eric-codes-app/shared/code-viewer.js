app.directive('codeViewer', ['$rootScope', function($rootScope){


	function link_return(scope,elem,attr) {

		var scope = {};

		scope.maindata;

		scope.OutputData = scope.maindata;

		scope.$watch('maindata',function(newv,oldv){
			scope.OutputData = newv;
		})


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