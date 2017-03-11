app.controller('work_single', ['$scope', '$rootScope', function($scope, $rootScope) {

    $scope.WorkData = {
        title: "chisel.cartel",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero.",
        tags: returnTags([
            'jquery',
            'gulp',
            'uidesign',
            'backend'
        ]),
        hero: [{
            image: "http://placehold.it/500x500"
        }, {
            image: "http://placehold.it/500x500"
        }, {
            image: "http://placehold.it/500x500"
        }]

    }

    $scope.Sections = [{
        title: "design()",
        tags: returnTags([
            'typography',
            'html5',
            'css3',
            'graphicdesign',
        ]),
    }, {
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "
    }, {
        gallery: [{
            URL: "http://placehold.it/640x480"
        }, {
            URL: "http://placehold.it/640x480"
        }, {
            URL: "http://placehold.it/640x480"
        }, {
            URL: "http://placehold.it/640x480"
        }, {
            URL: "http://placehold.it/640x480"
        }]
    }, {
        title: "development",
        tags: returnTags([
            'jquery',
            'gulp',
            'backend',
            'angular',
        ]),
    }]

}])
