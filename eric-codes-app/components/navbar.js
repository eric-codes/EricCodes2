app.controller('navbar', ['$scope', function($scope){
	
	$scope.NavBar = [
	{
		icon: iconFolder + "nav_about.svg",
		link: "/about"
	},{
		icon: iconFolder + "nav_work.svg",
		link: "/work"
	},{
		icon: iconFolder + "nav_contact.svg",
		link: "/contact"
	},
	]

}])