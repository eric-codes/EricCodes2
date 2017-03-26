app.directive('iconDrawer', ['$rootScope', function($rootScope){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Links;

		scope.$watch('maindata',function(){
			scope.Links = scope.maindata;
		},true);

		elem.find('.icon-link').click(function(e){
			if ($(window).width() <= 768) {

				e.preventDefault();
				Log.Set('Current click',$(this));

			}
		})

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