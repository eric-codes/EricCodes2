app.directive('codeViewer', ['$rootScope', function($rootScope){


	function link_return(scope,elem,attr) {

		var scope = {};

		scope.maindata;
		scope.Active;
		scope.ActiveFileLocation;

		scope.setActive = function(index){

			scope.Active = scope.maindata[index];

			scope.ActiveFileLocation = themeURL + "app/content/projects/" + scope.Active.location + "/" + scope.Active.file + ".html";

		}

		scope.setActive(0);

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