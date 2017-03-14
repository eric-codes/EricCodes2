app.controller('navbar', ['$scope', '$rootScope', function($scope, $rootScope) {

	/**
	 * $rootScope nav text array.
	 * @type {Array}
	 */
    $rootScope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];

    /**
     * Nav text array used in $scope of navbar controller
     */
    $scope.NavText = $rootScope.NavText;

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




    $rootScope.$watch('NavText', function(newv, oldv) {

    	$scope.NavText = newv;

    });


}])
