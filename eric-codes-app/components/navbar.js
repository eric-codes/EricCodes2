app.controller('navbar', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    Log.Heading('Navbar Controller Loaded');

    $rootScope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];

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

    function updateNav(newv, oldv, callback) {

        Log.Function('Updating Nav');
        Log.Set('New Value', newv);

        if (newv[2]) {

            // two pages in

            Log.Warning('Third value found');

            Animate.In(newv[2].text, 2, function() {
                if (callback) {
                    callback();
                }
            });

        } else if (newv[1]) {

            // one page in

            Log.Warning('Second value found');

            if (oldv[2]) {

                Log.Warning('Old third value');

                Animate.Out(2, function() {

                    if (newv[1].text !== oldv[1].text) {
                        Animate.Out(1, function() {
                            Animate.In(newv[1].text, 1, function() {
                                if (callback) {
                                    callback();
                                }
                            });
                        })
                    }

                })

            } else if (oldv[1]) {

                Log.Warning('Old second value! replacing...');

                Animate.Out(1, function() {
                    Animate.In(newv[1].text, 1, function() {
                        if (callback) {
                            callback();
                        }
                    });
                })
            } else if (!oldv[0]) {

                Log.Warning('First load! Running full anim...');

                if (newv[0]) {
                    Animate.In(newv[0].text, 0, function() {
                        Animate.In(newv[1].text, 1, function() {
                            if (callback) {
                                callback();
                            }
                        });
                    });
                } else {
                    return false;
                }
            } else {
                Animate.In(newv[1].text, 1, function() {
                    if (callback) {
                        callback();
                    }
                });
            }

        } else if (!newv[1]) {

            // homepage only

            Log.Warning('No second value!');

            Log.Set("newv[0].text", newv[0].text);

            if (oldv[2]) {
                Animate.Out(2, function() {
                    Animate.Out(1, function() {
                        if (callback) {
                            callback();
                        }
                    });
                })
            } else if (oldv[1]) {
                Animate.Out(1, function() {
                    if (callback) {
                        callback();
                    }
                });
            } else {
                Animate.In(newv[0].text, 0, function() {
                    if (callback) {
                        callback();
                    }
                });
            }


        } else {
            return false;
        }

    }


    $rootScope.$watch('NavText', function(newv, oldv) {

        Log.Function('NavText watcher triggered!');

        var NewVal = newv;

        if (NewVal[0]) {

            function RunUpdate() {

                Log.Warning('Firing anims..');

                $.each(NewVal, function(i, v) {
                    NewVal[i].class = "crumb-" + i;
                })

                Log.Set('NewVal', NewVal);


                if (newv.length > oldv.length) {
                    Log.Msg('Old length greater than new length!');
                    $scope.NavText = NewVal;
                    updateNav(NewVal, oldv);
                } else {
                	Log.Msg('New length equal to or greater than old length');
                    updateNav(NewVal, oldv, function() {
                        $scope.NavText = NewVal;
                    });

                }




            }

            if (newv === oldv) {
                Log.Warning('No good! Not running');
            } else {
                RunUpdate();
            }


        }

    }, true);




}])
