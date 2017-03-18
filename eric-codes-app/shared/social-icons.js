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
