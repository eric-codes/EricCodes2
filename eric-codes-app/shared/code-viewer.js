app.directive('codeViewer', ['$rootScope', function($rootScope){


	function link_return(scope,elem,attr) {

		var scope = {};

		scope.maindata;
		scope.Active;
		scope.ActiveFileLocation;

		scope.setActive = function(index){

			Log.Function('Setting active');

			scope.Active = scope.maindata[index];

			scope.ActiveFileLocation = themeURL + "app/content/projects/" + scope.Active.location + "/" + scope.Active.file + ".html";

			Log.Set('Active value',scope.Active);
			Log.Set('Active File Location',scope.ActiveFileLocation);

		}

		if ($rootScope.WorkItems) {
			scope.setActive(0);
		}

		$rootScope.$watch('WorkItems',function(){
			scope.setActive(0);
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