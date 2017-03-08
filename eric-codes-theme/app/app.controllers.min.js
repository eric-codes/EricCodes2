

app.controller('homepage', ['$scope', '$rootScope', function($scope,$rootScope){
	
	var iconFolder = themeURL + "images/icons/";

	$scope.LogoURL = themeURL + "images/mainLogo.svg";

	Log.Value("$scope.LogoURL",$scope.LogoURL);

	$scope.NavIcons = [
	{
		name: "About",
		URL: iconFolder + 'nav_about.svg'
	},{
		name: "Work",
		URL: iconFolder + 'nav_work.svg'
	},{
		name: "Contact",
		URL: iconFolder + 'nav_contact.svg'
	},
	]

}])