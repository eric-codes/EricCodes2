app.controller('about', ['$scope', '$rootScope', 'breadcrumbs', function($scope, $rootScope, breadcrumbs) {

    breadcrumbs.updateNav(0);

    $rootScope.BodyClass = "about";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    breadcrumbs.updateFirstChild({
        text: ".about()",
        link: "/about"
    })

    $scope.ProfilePicture = themeURL + "assets/img/profile-picture.jpg";

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

app.controller('contact', ['$scope', '$rootScope', 'breadcrumbs', 'sendMail', function($scope, $rootScope, breadcrumbs, sendMail) {

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

    $scope.contact = {};

    $scope.sent = false;

    $scope.SendMail = function(){
        sendMail.send($scope.contact,function(data){
            if (data.data == true) {
                $scope.sent = true;
            }
        });
    }

}])



app.controller('footer', ['$scope', function($scope){
	
	$scope.ScrollToTop = function(){
		$('body').animate({
			scrollTop:0
		},1000);
	}

}])


app.controller('homepage', ['$scope', '$rootScope', 'breadcrumbs', function($scope,$rootScope,breadcrumbs){
	
	$rootScope.BodyClass = "homepage";
	
	$rootScope.NavHidden = true;
	
	breadcrumbs.homepage();

	$rootScope.Footer = false;

	$scope.LogoURL = themeURL + "images/mainLogo.svg";

	Log.Value("$scope.LogoURL",$scope.LogoURL);

	$scope.Logo = themeURL + "app/shared/logo-homepage.html";

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

	$scope.BGVidURL = themeURL + "images/background.mp4"
	$scope.BGVidPoster = themeURL + "assets/images/bg-still.jpg"

	function RunAnimation(){

		var typeSpeed = 200,
		typeSpeedSlow = typeSpeed * 2,
		typeSpeedFast = (typeSpeed / 3) * 2;

		function Link(id,speed,callback) {
			setTimeout(function(){
				$(id).addClass('in');
				if (callback) {
					callback();
				}
			},speed);
		}

		Link('#br_l',typeSpeedSlow,function(){
			Link('#b_e',typeSpeed,function(){
				Link('#b_r',typeSpeed,function(){
					Link('#b_i',typeSpeed,function(){
						Link('#b_c',typeSpeed,function(){
							Link('#dot',typeSpeedSlow,function(){
								Link('#t_c',typeSpeedFast,function(){
									Link('#t_o',typeSpeedFast,function(){
										Link('#t_d',typeSpeedFast,function(){
											Link('#t_e',typeSpeedFast,function(){
												Link('#t_s',typeSpeedFast,function(){
													Link('#br_r',typeSpeedSlow);
												})
											})
										})
									})
								})
							})
						})
					})
				})
			})
		})


	}

	$(document).ready(function(){
		setTimeout(function(){
			$('video')[0].play();
			RunAnimation();

			$('.nav-icon-img').mouseover(function(){
				$(this).parents('.nav-icon-single').addClass('over');
			}).mouseout(function(){
				$(this).parents('.nav-icon-single').removeClass('over');
			})

		},500);
	})

}])
app.controller('modalController', ['$scope', '$rootScope', "modalService", function($scope, $rootScope, modalService) {

    $rootScope.ModalSettings;
    $rootScope.ModalSlug;
    $rootScope.ModalToggle = false;

    $scope.ModalSettings;

    $scope.ModalToggle = $rootScope.ModalToggle;
    $scope.ModalStatus = "";

    $scope.Modal = {
        Open: function() {
            $scope.ModalStatus = "open";
        },
        Close: function() {
            $scope.ModalStatus = "";
        }
    }

    $scope.GetImage = function(filename) {
        return themeURL + "assets/img/" + $rootScope.ModalSlug + "/" + filename;
    }

    $scope.CloseModal = function(){
    	modalService.Close();
    }

    $rootScope.$watch('ModalSettings', function(newv, oldv) {
        $scope.ModalSettings = newv;
    })

    $rootScope.$watch('ModalToggle', function(newv, oldv) {
        if (newv === true) {
            $scope.Modal.Open();
        } else {
            $scope.Modal.Close();
        }
    })


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

                    Log.Value('Timeout fired', NewString);


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

/**
 * @todo INSTALL PRISMJS!
 */

app.controller('work_single', ['$scope', '$rootScope', 'breadcrumbs', '$stateParams', function($scope, $rootScope, breadcrumbs, $stateParams) {

    breadcrumbs.updateNav(1);

    $rootScope.BodyClass = "work-single";

    $rootScope.NavHidden = false;

    $rootScope.Footer = true;

    var ThisSlug = $stateParams.workSlug;

    $rootScope.ModalSlug = $stateParams.workSlug;


    $scope.AllProjects;

    $scope.ThisData;

    $scope.WorkData;
    $scope.Tags;
    $scope.Sections;

    $scope.ContentImgUrl = function(filename, type) {
        if (type == "hero") {
            return themeURL + "assets/img/" + $scope.WorkData.slug + "/mockup/" + filename;
        } else if (type == "gallery") {
            return themeURL + "assets/img/" + $scope.WorkData.slug + "/" + filename;
        }
    }

    function UpdateScope() {
        $scope.AllProjects = $rootScope.WorkItems;

        $scope.ThisData = $rootScope.AllData[ThisSlug];

        $scope.WorkData = $scope.ThisData.workData;
        $scope.Tags = returnTags($scope.ThisData.workData.tags);
        $scope.Sections = $scope.ThisData.sections;

        Log.Set('Tags', $scope.Tags);

        breadcrumbs.updateSecondChild({
            text: '.' + $scope.WorkData.title,
            link: "/" + $scope.WorkData.slug
        }, {
            text: ".work",
            link: "/work"
        })

    }

    function InitHeroSlider() {

        var HeroImage = $('.hero-image-single');

        HeroImage.eq(0).addClass('open');


        $scope.HeroCycleNext = function() {

            var Current;

            HeroImage.each(function(i, e) {

                if ($(e).hasClass('open')) {
                    Current = i;
                }

            })

            var Next = Current + 1;

            if (Next >= HeroImage.length) {
                Next = 0;
            }

            HeroImage.removeClass('open')
                .eq(Next).addClass('open');

        }

        $scope.HeroCyclePrev = function() {

            var Current;

            HeroImage.each(function(i, e) {

                if ($(e).hasClass('open')) {
                    Current = i;
                }

            })

            var Next = Current - 1;

            if (Next < 0) {
                Next = HeroImage.length - 1;
            }

            HeroImage.removeClass('open')
                .eq(Next).addClass('open');

        }

        function FireCycle() {
            setTimeout(function(){
                $scope.HeroCycleNext();
                FireCycle();
            },3000);
        }

        FireCycle();

    }

    $(document).ready(function() {
        InitHeroSlider();
    })


    if ($rootScope.AllData) {
        UpdateScope();
    }

    $rootScope.$watch('AllData', function(nv, ov) {
        UpdateScope();
    }, true)


}]);
