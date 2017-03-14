app.controller('navbar', ['$scope', '$rootScope', function($scope, $rootScope) {

	$rootScope.NavText;

    /**
     * $rootScope nav text array.
     * @type {Array}
     */
    $scope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];



    $scope.NavOutput;

    $scope.NavBar = [{
        icon: iconFolder + "nav_about.svg",
        link: "/about"
    }, {
        icon: iconFolder + "nav_work.svg",
        link: "/work"
    }, {
        icon: iconFolder + "nav_contact.svg",
        link: "/contact"
    }, ];


    function updateNav(newv) {

        $.each(newv, function(i, val) {

        })

    }


    $rootScope.$watch('NavText', function(newv, oldv) {

        $scope.NavText = newv;

        updateNav(newv)

    });

        /**
     * Nav text array used in $scope of navbar controller
     */
    $rootScope.NavText = $scope.NavText;


}])
