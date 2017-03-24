

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

	$scope.BGVidURL = themeURL + "images/background.mp4"

	function RunAnimation(){

		var typeSpeed = 300,
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
						Link('#b_c',typeSpeedSlow,function(){
							Link('#dot',typeSpeedSlow,function(){
								Link('#t_c',typeSpeedFast,function(){
									Link('#t_o',typeSpeedFast,function(){
										Link('#t_d',typeSpeedFast,function(){
											Link('#t_e',typeSpeedFast,function(){
												Link('#t_s',typeSpeedSlow,function(){
													Link('#br_r',typeSpeedFast);
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
		},500);
	})

}])