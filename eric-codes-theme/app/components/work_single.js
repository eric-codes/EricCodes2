app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateSecondChild({
        text: ".chisel.cartel",
        link: "/chisel-cartel"
    }, {
        text: ".work",
        link: "/work"
    })

    $scope.AllProjects = [{
        name: "Chisel Cartel",
        slug: "chisel-cartel"
    }, {
        name: "Chisel Cartel 2",
        slug: "chisel-cartel"
    }, {
        name: "Chisel Cartel 3",
        slug: "chisel-cartel"
    }, {
        name: "Chisel Cartel 4",
        slug: "chisel-cartel"
    }]

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
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1281x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1282x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1283x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1284x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1285x1024",
        }]
    }, {
        title: "development",
        tags: returnTags([
            'jquery',
            'gulp',
            'backend',
            'angular',
        ]),
        textSections: [{
            title: "frontEnd()",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "
        }, {
            title: "backEnd()",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "
        }, {
            title: "automation()",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget venenatis lectus. Suspendisse mollis facilisis sapien at rutrum. Nulla scelerisque gravida libero. Duis vestibulum diam a nulla feugiat cursus. Donec luctus, massa eu elementum vulputate, purus lectus lacinia enim, in rutrum purus lacus nec nibh. Proin mollis semper blandit. Phasellus eget enim consectetur, laoreet lorem quis, tincidunt libero. "
        }, ]
    }, {
        gallery: [{
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1210x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1220x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1230x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1240x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1250x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1260x1024",
        }, {
            thumbnail: "http://placehold.it/640x480",
            URL: "http://placehold.it/1270x1024",
        }]
    }];



}]);