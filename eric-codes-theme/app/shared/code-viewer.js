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

		$rootScope.$watch('WorkData',function(){
			setTimeout(function(){
				scope.setActive(0);
			},200);
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