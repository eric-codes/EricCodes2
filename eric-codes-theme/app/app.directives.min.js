app.directive('codeViewer', function() {


    function link_return(scope, elem, attr) {

        scope.maindata;
        scope.Active;
        scope.ActiveFileLocation;

        Log.Set('scope.maindata', scope.maindata)

        scope.setActive = function(index) {

            Log.Function('Setting active');

            scope.Active = scope.maindata[index];

            scope.ActiveFileLocation = themeURL + "app/content/projects/" + scope.Active.location + "/" + scope.Active.file + ".html";

            Log.Set('Active value', scope.Active);
            Log.Set('Active File Location', scope.ActiveFileLocation);

            elem.find('.nav li').removeClass('active');
            elem.find('.nav li').eq(index).addClass('active');



            setTimeout(function() {

                    Prism.highlightAll();

            }, 200);

        }

        scope.$watch('maindata', function(newv, oldv) {
            if (newv.length > 0) {
                scope.setActive(0);
            }
        }, true)

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

		scope.Toggle = function(){

			if (scope.IconDrawer.hasClass('open')) {
				scope.ToggleClose();
			} else {
				scope.ToggleOpen();
			}

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
app.directive('socialIcons', function() {

    function link_return(scope, elem, attr) {

        scope.SocialIcons = [{
            icon: GetShared("social_linkedin")
        }, {
            icon: GetShared("social_behance")
        }, {
            icon: GetShared("social_twitter")
        }];

    }

    // Runs during compile
    return {
        scope: {
            maindata: "="
        },
        restrict: 'E',
        templateUrl: GetShared('social-icons'),
        link: link_return
    };
});



app.directive('workGallery', ['modalService', function(modalService){

	function link_return(scope,elem,attr){

		scope.maindata;
		scope.workdata;
		scope.DescriptionOpen = "";
		scope.DescriptionCurrent = true;

		var DescriptionBox = {
			Open: function(){
				scope.DescriptionOpen = "";
				scope.DescriptionCurrent = true;
			},
			Close: function(){
				scope.DescriptionOpen = "closed";
				scope.DescriptionCurrent = false;
			},
			Toggle: function(){
				if (scope.DescriptionCurrent === false) {
					DescriptionBox.Open();
				} else {
					DescriptionBox.Close();
				}
			},
		}

		scope.ToggleBox = function(){
			DescriptionBox.Toggle();
		}

		scope.currentSlide = scope.maindata[0];

		scope.ChangeSlide = function(i){
			Log.Msg('Gallery item clicked!');
			scope.currentSlide = scope.maindata[i];
		}

		scope.GetImage = function(filename) {
			return themeURL + "assets/img/" + scope.workdata.slug + "/" + filename;
		}

		scope.OpenModal = function(){
			modalService.Open(scope.currentSlide);
		}

	}

	// Runs during compile
	return {
		scope: {
			maindata: "=",
			workdata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-gallery'),
		 link: link_return
	};
}]);
app.directive('workIcons', function(){

	function link_return(scope,elem,attr) {

		scope.maindata;

		scope.Tags = returnTags(scope.maindata);

		elem.find('[data-toggle="tooltip"]').tooltip();

	}

	return {
		scope: {
			maindata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-icons'),
		 link: link_return
	};
});