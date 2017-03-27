app.directive('iconDrawer', ['$rootScope', function($rootScope){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Links;

		scope.$watch('maindata',function(){
			scope.Links = scope.maindata;
		},true);

		scope.ToggleOpen = function(){

			Log.Msg('Test is good!');

		}

		function MobileCheck(){
			if ($(window).width() <= 768) {

				$('.icon-drawer').on('click','.icon-link',scope.ToggleOpen);

			} else {

				$('.icon-drawer').off('click','.icon-link');
			}
		}


		$(window).resize(function(){
			MobileCheck();
		})

		MobileCheck();

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