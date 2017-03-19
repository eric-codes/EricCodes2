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



app.directive('workGallery', function(){

	function link_return(scope,elem,attr){

		scope.maindata;

		scope.currentSlide = scope.maindata[1];

		scope.ChangeSlide = function(i){
			Log.Msg('Gallery item clicked!');
			scope.currentSlide = scope.maindata[i];
		}

	}

	// Runs during compile
	return {
		scope: {
			maindata: "="
		}, 
		 restrict: 'E',
		 templateUrl: GetShared('work-gallery'),
		 link: link_return
	};
});