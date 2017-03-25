app.directive('codeViewer', function(){


	function link_return(scope,elem,attr) {

		scope.maindata;
		scope.Active;
		scope.ActiveFileLocation;

		Log.Set('scope.maindata',scope.maindata)

		scope.setActive = function(index){

			Log.Function('Setting active');

			scope.Active = scope.maindata[index];

			scope.ActiveFileLocation = themeURL + "app/content/projects/" + scope.Active.location + "/" + scope.Active.file + ".html";

			Log.Set('Active value',scope.Active);
			Log.Set('Active File Location',scope.ActiveFileLocation);

		}

		scope.$watch('maindata',function(newv,oldv){
			if (newv.length > 0) {
				scope.setActive(0);
			}
		},true)

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
});