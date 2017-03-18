app.controller('work', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".work",
        link: "/work"
    })

    $scope.WorkItems = [{
        name: "Chisel Cartel",
        codeName: "chisel.cartel",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",
        tags: returnTags([
            'jquery',
            'angular',
            'uidesign',
            'typography'
        ]),
    }, {
        name: "Chisel Cartel",
        codeName: "chisel.cartel",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",
        tags: returnTags([
            'jquery',
            'angular',
            'uidesign',
            'typography'
        ]),
    }, {
        name: "Chisel Cartel",
        codeName: "chisel.cartel",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",
        tags: returnTags([
            'jquery',
            'angular',
            'uidesign',
            'typography'
        ]),
    }, {
        name: "Chisel Cartel",
        codeName: "chisel.cartel",
        blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",
        tags: returnTags([
            'jquery',
            'angular',
            'uidesign',
            'typography'
        ]),
    }, ]

    setTimeout(function() {
        $('[data-toggle="tooltip"]').tooltip();
    }, 500);

    $('.work-item').click(function(event) {
        if (window.width < 768) {
            Log.Value('Firing scroll top',$(this).position().top);
            $("body, html").animate({
                scrollTop: $(this).position().top
            },500);
        }
    });

}])
