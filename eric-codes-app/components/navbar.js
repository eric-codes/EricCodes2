app.controller('navbar', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    Log.Heading('Navbar Controller Loaded');

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


    function updateNav(newv, oldv) {

        Log.Function('Updating Nav');
        Log.Set('New Value', newv);

        if (!newv[1]) {

            // homepage only

            Log.Warning('No second value!');

            Log.Set("newv[0].text", newv[0].text);



            for (var i = 0; i < newv[0].text.length; i++) {
                Log.Value('Text Length', i);

                setTimeout(function() {

                    var NewV = newv[0].text,
                        NewString = NewV.substr(0, i+1);

                    Log.Value('Timeout fired', NewString);;

                    $('.crumb-0').text(NewString);

                }, 200 * i);
            }


        } else if (newv[1] && !newv[2]) {

            // one page in

            Log.Warning('Second value found');

            $('.crumb-1').text(newv[1].text);

        } else if (newv[2]) {

            // two pages in

            Log.Warning('Third value found');

            $('.crumb-2').text(newv[2].text);

        }

    }


    $rootScope.$watch('NavText', function(newv, oldv) {

        var NewVal = newv;

        $.each(NewVal, function(i, v) {
            NewVal[i].class = "crumb-" + i;
        })

        $scope.NavText = NewVal;

        updateNav(NewVal, oldv);

    }, true);

    /**
     * Nav text array used in $scope of navbar controller
     */
    $rootScope.NavText = $scope.NavText;


}])
