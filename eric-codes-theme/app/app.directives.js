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
            icon: GetShared("social_linkedin"),
            link: "https://www.linkedin.com/in/ericcodes/"
        }, {
            icon: GetShared("social_behance"),
            link: "https://www.behance.net/ericcodes"
        }, {
            icon: GetShared("social_twitter"),
            link: "https://twitter.com/eric_codes"
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

app.directive('workGallery', ['modalService', function(modalService) {

	function link_return(scope, elem, attr) {

		scope.maindata;
		scope.workdata;
		scope.DescriptionOpen = "";
		scope.DescriptionCurrent = true;

		var DescriptionBox = {
			Open: function() {
				scope.DescriptionOpen = "";
				scope.DescriptionCurrent = true;
			},
			Close: function() {
				scope.DescriptionOpen = "closed";
				scope.DescriptionCurrent = false;
			},
			Toggle: function() {
				if (scope.DescriptionCurrent === false) {
					DescriptionBox.Open();
				} else {
					DescriptionBox.Close();
				}
			},
		}

		var Loading = {
			Start: function() {
				elem.find('.loading-box').addClass('open');
			},
			End: function() {
				elem.find('.loading-box').removeClass('open');
			}
		}

		scope.ToggleBox = function() {
			DescriptionBox.Toggle();
		}

		scope.Mockup = {
			Left: themeURL + "assets/img/tab_left.jpg",
			Right: themeURL + "assets/img/tab_right.jpg",
		}

		scope.currentSlide = scope.maindata[0];

		scope.ChangeSlide = function($event, i) {
			Log.Msg('Gallery item clicked!');

			Loading.Start();

			elem.find('.image-thumb').removeClass('open');
			$($event.currentTarget).addClass('open');

			var LoadImg = new Image(),
			CurrentSlide = scope.maindata[i];
			scope.currentSlide = scope.maindata[i];

			if (CurrentSlide.scrollURL) {
				LoadImg.src = scope.GetImage(CurrentSlide.scrollURL);
			} else {
				LoadImg.src = scope.GetImage(CurrentSlide.URL);
			}

			Log.Set('Loading Image',LoadImg);

			LoadImg.onload = function(){
				Log.Warning('Loading was good!');
				if (scope.currentSlide.scrollURL) {
					ScrollCue.Fire();
				}
				Loading.End();
			}


		}

		scope.GetImage = function(filename) {
			return themeURL + "assets/img/" + scope.workdata.slug + "/" + filename;
		}

		scope.OpenModal = function() {
			modalService.Open(scope.currentSlide);
		}

		var ScrollCue = {
			Selector: elem.find('.scroll-cue'),
			Fire: function() {
				ScrollCue.Selector.addClass('open');
				setTimeout(function() {
					ScrollCue.Selector.removeClass('open');
				}, 3000);
			}
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

		setTimeout(function(){
			$('[data-toggle="tooltip"]').tooltip()
		},500)

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