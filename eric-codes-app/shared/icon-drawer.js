app.directive('iconDrawer', ['$rootScope', function($rootScope){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Links;

		scope.$watch('maindata',function(){
			scope.Links = scope.maindata;
		},true);

		scope.IconDrawer = $('.icon-drawer');

		var Toggle = {
			Add: function(funct){
				scope.IconDrawer.on('click','.icon-link',funct);
			},
			Remove: function(){
				scope.IconDrawer.off('click','.icon-link');
			}
		}

		scope.ToggleOpen = function(){

			scope.IconDrawer.addClass('open');
			Toggle.Remove();
			Toggle.Add(scope.ToggleClose);


		}

		scope.ToggleClose = function(){

			scope.IconDrawer.removeClass('open');
			Toggle.Remove();
			Toggle.Add(scope.ToggleOpen);

		}

		function MobileCheck(){
			if ($(window).width() <= 768) {

				Toggle.Add(scope.ToggleOpen);

			} else {

				Toggle.Remove();
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