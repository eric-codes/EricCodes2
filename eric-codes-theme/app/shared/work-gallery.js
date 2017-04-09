

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

		scope.currentSlide = scope.maindata[1];

		scope.ChangeSlide = function(i){
			Log.Msg('Gallery item clicked!');
			scope.currentSlide = scope.maindata[i];
		}

		scope.GetImage = function(filename) {
			return themeURL + "assets/img/" + scope.workdata.slug + "/" + filename;
		}

		scope.OpenModal = function(){
			modalService.Open();
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