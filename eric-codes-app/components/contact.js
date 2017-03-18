app.controller('contact', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(2);

    $rootScope.BodyClass = "contact";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".contact()",
        link: "/contact"
    })

    $scope.SocialIcons = [{
        icon: iconFolder + "social_linkedin.svg"
    }, {
        icon: iconFolder + "social_behance.svg"
    }, {
        icon: iconFolder + "social_twitter.svg"
    }, ];

}])
