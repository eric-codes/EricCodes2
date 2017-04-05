app.controller('work', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".work",
        link: "/work"
    })

    $scope.WorkItems = [];

    if ($rootScope.WorkItems) {
        $scope.WorkItems = $rootScope.WorkItems;
    }

    $rootScope.$watch('WorkItems',function(nv,ov){
        $scope.WorkItems = $rootScope.WorkItems;
    },true)

    setTimeout(function() {
        $('[data-toggle="tooltip"]').tooltip();
    

    $('.work-item').click(function(event) {
        Log.Msg('Clicked!');
        Log.Value('Window width',$(window).width())
        if ($(window).width() < 768) {
            Log.Value('Firing scroll top',$(this).position().top);
            $("body, html").animate({
                scrollTop: $(this).position().top + 50
            },400);
        }
    });

    }, 500);

    $scope.GetBackground = function(slug) {
        return themeURL + "assets/img/" + slug + "/background.jpg"
    }

}])
