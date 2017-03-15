app.controller('about', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    $rootScope.BodyClass = "about";

    $rootScope.NavHidden = false;

    breadcrumbs.updateFirstChild({
        text: ".about()",
        link: "/about"
    })

    $scope.SocialIcons = [{
        icon: iconFolder + "social_linkedin.svg"
    }, {
        icon: iconFolder + "social_behance.svg"
    }, {
        icon: iconFolder + "social_twitter.svg"
    }, ];


    $scope.skillIcons = [{
        icon: iconFolder + "code_jquery.svg",
        title: "jQuery"
    }, {
        icon: iconFolder + "code_angular.svg",
        title: "Angular 1.x"
    }, {
        icon: iconFolder + "code_sass.svg",
        title: "SASS / LESS"
    }, {
        icon: iconFolder + "code_backend.svg",
        title: "PHP / MySQL"
    }, {
        icon: iconFolder + "code_css3.svg",
        title: "CSS3"
    }, {
        icon: iconFolder + "code_graphicdesign.svg",
        title: "Graphic Design"
    }, {
        icon: iconFolder + "code_gulp.svg",
        title: "Gulp"
    }, {
        icon: iconFolder + "code_html5.svg",
        title: "HTML5"
    }, {
        icon: iconFolder + "code_typography.svg",
        title: "Typography"
    }, {
        icon: iconFolder + "code_uidesign.svg",
        title: "UI Design"
    }, ];


}])
