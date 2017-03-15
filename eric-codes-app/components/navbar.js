app.controller('navbar', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    Log.Heading('Navbar Controller Loaded');

    $rootScope.NavText = [];

    /**
     * $rootScope nav text array.
     * @type {Array}
     */
    $scope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];

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


    var Animate = {
        Time: 150,
        In: function(string, selectorNum, callback) {
            var Split = string.split("");

            $.each(Split, function(i, v) {
                Log.Value('Text Length', i);

                setTimeout(function() {

                    var NewV = string;
                    var NewString = NewV.substr(0, i + 1);

                    Log.Value('Timeout fired', NewString);;

                    var Selector = '.crumb:eq(' + selectorNum + ')';
                    Log.Set('Selector', $(Selector));

                    $(Selector).text(NewString);

                    if (i + 1 == string.length) {
                        if (callback) {
                            callback();
                        }
                    }

                }, Animate.Time * i);
            })
        },
        Out: function(selectorNum, callback) {

            var Selector = '.crumb:eq(' + selectorNum + ')';
            var string = $(Selector).text();
            var Split = string.split("");

            $.each(Split, function(i, v) {
                Log.Value('Text Length', i);

                setTimeout(function() {

                    var NewV = string;
                    var NewString = NewV.substr(0, string.length - i);

                    Log.Value('Timeout fired', NewString);;


                    Log.Set('Selector', $(Selector));

                    $(Selector).text(NewString);

                    if (i + 1 == string.length) {
                        if (callback) {
                            callback();
                        }
                    }

                }, (Animate.Time * 0.75) * i);
            })
        }
    }

    function updateNav(newv, oldv) {

        Log.Function('Updating Nav');
        Log.Set('New Value', newv);

        if (newv[2]) {

            // two pages in

            Log.Warning('Third value found');

            Animate.In(newv[2].text, 2);

        } else if (newv[1] && !newv[2]) {

            // one page in

            Log.Warning('Second value found');

            if (oldv[2]) {
                Animate.Out(2, function() {

                    if (newv[1].text !== oldv[1].text) {
                        Animate.Out(1, function() {
                            Animate.In(newv[1].text, 1);
                        })
                    }


                })

            } else if (oldv[1]) {

                Animate.Out(1, function() {
                    Animate.In(newv[1].text, 1);
                })
            } else if (!oldv[0]) {
                if (newv[0].text) {
                    Animate.In(newv[0].text, 0, function() {
                        Animate.In(newv[1].text, 1);
                    });
                } else {
                    return false;
                }
            } else {
                Animate.In(newv[1].text, 1);
            }

        } else if (!newv[1]) {

            // homepage only

            Log.Warning('No second value!');

            Log.Set("newv[0].text", newv[0].text);

            if (oldv[2]) {
                Animate.Out(2, function() {
                    Animate.Out(1);
                })
            } else if (oldv[1]) {
                Animate.Out(1);
            } else {
                Animate.In(newv[0].text, 0);
            }


        } else {
            return false;
        }

    }


    $rootScope.$watch('NavText', function(newv, oldv) {

        var NewVal = newv;

        if (NewVal[0]) {
            $.each(NewVal, function(i, v) {
                NewVal[i].class = "crumb-" + i;
            })

        }

        $scope.NavText = NewVal;

        updateNav(NewVal, oldv);

    }, true);




}])
