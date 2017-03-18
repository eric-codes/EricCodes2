app.controller('contact', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(2);

    $rootScope.BodyClass = "contact";

    $rootScope.NavHidden = false;

    breadcrumbs.updateFirstChild({
        text: ".contact()",
        link: "/contact"
    })

}])
