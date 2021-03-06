

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