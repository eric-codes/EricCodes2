app.directive('socialIcons', function() {

    function link_return(scope, elem, attr) {

        scope.SocialIcons = [{
            icon: iconFolder + "social_linkedin.svg"
        }, {
            icon: iconFolder + "social_behance.svg"
        }, {
            icon: iconFolder + "social_twitter.svg"
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
