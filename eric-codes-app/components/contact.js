app.controller('contact', ['$scope', '$rootScope', 'breadcrumbs', 'sendMail', function($scope, $rootScope, breadcrumbs, sendMail) {

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

    $scope.contact = {};

    $scope.SendMail = function(){
        sendMail.send()
    }

}])
