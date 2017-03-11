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

	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/bootstrap.min.css'); ?>">
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/bootstrap.min.js'); ?>"></script>

	<link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/style.css'); ?>">
	<script src="https://use.fontawesome.com/e8d681bf45.js"></script>

	<script type="text/javascript"> 
		window.Debug = true;
	</script>

</head>
<body ng-app="EricCodes" ngClass="BodyClass">

<nav class="navbar navbar-default" ng-controller="navbar">
	<div class="container">


		<div class="pull-left logo-area">
			<span class="logo-type">eric.codes</span>
		</div>

		<div class="pull-right icon-area">
			<div class="icon-drawer">
				<a class="icon-link" ng-repeat="link in NavBar" ng-href="{{link.link}}">
					<img class="icon-img" ng-src="{{link.icon}}"></img>
				</a>
			</div>
		</div>

	</div>
</nav>

	<section ui-view class="main-page-section">



	</section>


	<script type="text/javascript" src="<?php TemplateGet('/app/app.module.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.core.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.controllers.min.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/app/app.directives.min.js'); ?>"></script>

</body>
</html>