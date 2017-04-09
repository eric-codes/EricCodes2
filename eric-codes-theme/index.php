<?php 

function TemplateGet($input) {
	$ChildThemePath =  get_stylesheet_directory_uri();
	echo $ChildThemePath.$input;
}

?>
<!DOCTYPE html>
<html>
<head>
	<base href="/">
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Welcome to Eric.Codes</title>

	<script type="text/javascript" src="<?php TemplateGet('/assets/js/jquery.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/angular.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/angular-ui-router.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/angular-animate.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/prism.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/prism-php.min.js'); ?>"></script>

	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/bootstrap.min.css'); ?>">
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/bootstrap.min.js'); ?>"></script>

	<link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/prism.css'); ?>">
	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/style.css'); ?>">
	<script src="https://use.fontawesome.com/e8d681bf45.js"></script>

	<script type="text/javascript"> 
		window.Debug = true;
	</script>

</head>
<body ng-app="EricCodes" ng-class="BodyClass" class="eric-codes">

<div class="modal-container" ng-controller="modal">
	
<div class="modal-inside">
	
<div class="modal-image-container">
	<img class="modal-image" src="http://placehold.it/1920x1080"></img>
</div>

</div>

</div>

<div ng-controller="CoreController"></div> 

<nav class="navbar navbar-default navbar-fixed-top" ng-controller="navbar">
	<div class="container">


		<div class="pull-left logo-area">
			<span class="logo-type">
			<a ng-href="{{crumb.link}}" class="crumb" ng-repeat="crumb in NavText"></a>
			</span>
		</div>

		<div class="pull-right icon-area">

		<icon-drawer maindata="NavBar"></icon-drawer>

		</div>

	</div>
</nav>

	<section ui-view class="main-page-section">



	</section>

	<footer ng-if="Footer">
		
	<div class="container">
		<div class="pull-left">
			
		<span class="footer-text">2010 - 2017 Eric.Codes</span>
		<social-icons class="social"></social-icons>
		</div>
		<div class="pull-right">
			
			<a class="back-to-top"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>

		</div>
		<div class="clearfix"></div>
	</div>

	</footer>


	<script type="text/javascript" src="<?php TemplateGet('/app/app.module.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.core.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.controllers.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.directives.min.js'); ?>"></script>

</body>
</html>