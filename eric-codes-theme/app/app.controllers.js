app.controller('about', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(0);

    $rootScope.BodyClass = "about";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".about()",
        link: "/about"
    })

    $scope.skillIcons = [{
        icon: iconFolder + "code_jquery.svg",
        title: "jQuery"
    }, {
        icon: iconFolder + "code_angular.svg",
        title: "Angular 1.x"
    }, {
        icon: iconFolder + "code_sass.svg",
        title: "SASS / LESS"
    }, {
        icon: iconFolder + "code_backend.svg",
        title: "PHP / MySQL"
    }, {
        icon: iconFolder + "code_css3.svg",
        title: "CSS3" 
    }, {
        icon: iconFolder + "code_graphicdesign.svg",
        title: "Graphic Design"
    }, {
        icon: iconFolder + "code_gulp.svg",
        title: "Gulp"
    }, {
        icon: iconFolder + "code_html5.svg",
        title: "HTML5"
    }, {
        icon: iconFolder + "code_typography.svg",
        title: "Typography"
    }, {
        icon: iconFolder + "code_uidesign.svg",
        title: "UI Design"
    }, ];

    setTimeout(function(){
        $('[data-toggle="tooltip"]').tooltip();
    },500);

}])

app.controller('contact', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(2);

    $rootScope.BodyClass = "contact";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".contact()",
        link: "/contact"
    })

    $scope.SocialIcons = [{
        icon: iconFolder + "social_linkedin.svg"
    }, {
        icon: iconFolder + "social_behance.svg"
    }, {
        icon: iconFolder + "social_twitter.svg"
    }, ];

}])



app.controller('homepage', ['$scope', '$rootScope', 'breadcrumbs', function($scope,$rootScope,breadcrumbs){
	
	$rootScope.BodyClass = "homepage";
	
	$rootScope.NavHidden = true;
	
	breadcrumbs.homepage();

	$rootScope.Footer = false;

	$scope.LogoURL = themeURL + "images/mainLogo.svg";

	Log.Value("$scope.LogoURL",$scope.LogoURL);

	$scope.NavIcons = [
	{
		name: "About",
		URL: iconFolder + 'nav_about.svg',
		link: "/about"
	},{
		name: "Work",
		URL: iconFolder + 'nav_work.svg',
		link: "/work"
	},{
		name: "Contact",
		URL: iconFolder + 'nav_contact.svg',
		link: "/contact"
	},
	]

	$scope.OpenLink = function(link){
		window.location.href = link;
	}

}])
app.controller('navbar', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    Log.Heading('Navbar Controller Loaded');

    $rootScope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];

    $rootScope.NavHidden = true;

    /**
     * $rootScope nav text array.
     * @type {Array}
     */
    $scope.NavText = [{
        text: 'eric.codes',
        link: '/'
    }];

    $scope.NavBar = [{
        icon: GetShared('nav_about'),
        link: "/about",
        slug: 'about'
    }, {
        icon: GetShared('nav_work'),
        link: "/work",
        slug: 'work'
    }, {
        icon: GetShared('nav_contact'),
        link: "/contact",
        slug: 'contact'
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

            if ($('.crumb:eq(0)').text().length < 1) {
            	Animate.In(newv[0].text, 0);
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


            RunUpdate();



        }

    }, true);

    $rootScope.$watch('NavHidden', function(newValue, oldValue) {
    	
    	if (newValue === true) {
    		$('.navbar').addClass('not-shown');
    	} else {
    		$('.navbar').removeClass('not-shown');
    	}

    }, true);




}])

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

}])

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
