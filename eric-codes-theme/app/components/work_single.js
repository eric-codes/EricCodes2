app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', '$stateParams', function($scope, $rootScope, breadcrumbs, $stateParams) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    var ThisSlug = $stateParams.workSlug;




    $scope.AllProjects;
    $scope.WorkData;
    $scope.Sections;

    function UpdateScope() {
        $scope.AllProjects = $rootScope.WorkItems;
        $scope.WorkData = $rootScope.AllData[ThisSlug].workData;
        $scope.Sections = $rootScope.AllData[ThisSlug].sections;

        breadcrumbs.updateSecondChild({
            text: '.'+$scope.WorkData.title,
            link: "/" + $scope.WorkData.slug
        }, {
            text: ".work",
            link: "/work"
        })

    }

    if ($rootScope.AllData) {
        UpdateScope();
    }

    $rootScope.$watch('WorkData', function(nv, ov) {
        UpdateScope();
    }, true)


}]);
