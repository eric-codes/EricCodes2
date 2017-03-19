app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', '$stateParams', function($scope, $rootScope, breadcrumbs, $stateParams) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    var ThisSlug = $stateParams.workSlug;




    $scope.AllProjects;

    $scope.ThisData;

    $scope.WorkData;
    $scope.Tags;
    $scope.Sections;

    function UpdateScope() {
        $scope.AllProjects = $rootScope.WorkItems;

        $scope.ThisData = $rootScope.AllData[ThisSlug];

        $scope.WorkData = $scope.ThisData.workData;
        $scope.Tags = returnTags($scope.ThisData.workData.tags);
        $scope.Sections = $scope.ThisData.sections;

        Log.Set('Tags',$scope.Tags);

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
