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

		scope.Loading = {
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

		scope.ChangeSlide = function(i) {
			Log.Msg('Gallery item clicked!');

			var LoadImg = new Image(),
			CurrentSlide = scope.maindata[i];

			if (CurrentSlide.scrollURL) {
				LoadImg.src = scope.GetImage(CurrentSlide.scrollURL);
			} else {
				LoadImg.src = scope.GetImage(CurrentSlide.URL);
			}

			Log.Set('Loading Image',LoadImg);

			LoadImg.onload = function(){
				Log.Warning('Loading was good!');
				scope.currentSlide = scope.maindata[i];
				if (scope.currentSlide.scrollURL) {
					ScrollCue.Fire();
				}
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
