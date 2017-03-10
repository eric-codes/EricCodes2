

app.controller('homepage', ['$scope', '$rootScope', function($scope,$rootScope){
	
	

	$scope.LogoURL = themeURL + "images/mainLogo.svg";

	Log.Value("$scope.LogoURL",$scope.LogoURL);

	$scope.NavIcons = [
	{
		name: "About",
		URL: iconFolder + 'nav_about.svg',
		link: "/#/about"
	},{
		name: "Work",
		URL: iconFolder + 'nav_work.svg',
		link: "/#/work"
	},{
		name: "Contact",
		URL: iconFolder + 'nav_contact.svg',
		link: "/#/contact"
	},
	]

	$scope.OpenLink = function(link){
		window.location.href = link;
	}

}])