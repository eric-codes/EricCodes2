app.directive('socialIcons', function() {

    function link_return(scope, elem, attr) {

        scope.SocialIcons = [{
            icon: GetShared("social_linkedin.html")
        }, {
            icon: GetShared("social_behance.html")
        }, {
            icon: GetShared("social_twitter.html")
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
