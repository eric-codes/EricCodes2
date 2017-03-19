app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', '$stateParams', function($scope, $rootScope, breadcrumbs, $stateParams) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    var ThisSlug = $stateParams.workSlug;


    breadcrumbs.updateSecondChild({
        text: ".chisel.cartel",
        link: "/chisel-cartel"
    }, {
        text: ".work",
        link: "/work"
    })

    $scope.AllProjects;
    $scope.WorkData;
    $scope.Sections;

    function UpdateScope() {
        $scope.AllProjects = $rootScope.WorkItems;
        $scope.WorkData = $rootScope.AllData[ThisSlug].workData;
        $scope.Sections = $rootScope.AllData[ThisSlug].sections;
    }

    if ($rootScope.AllData) {
        UpdateScope();
    }

    $rootScope.$watch('WorkData', function(nv, ov) {
        UpdateScope();
    }, true)


}]);
