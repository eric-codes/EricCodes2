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
