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
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/angular-scroll-animate.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/prism.js'); ?>"></script>
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/prism-php.min.js'); ?>"></script>

	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/bootstrap.min.css'); ?>">
	<script type="text/javascript" src="<?php TemplateGet('/assets/js/bootstrap.min.js'); ?>"></script>

	<link href="https://fonts.googleapis.com/css?family=Space+Mono:400,700" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/prism.css'); ?>">
	<link rel="stylesheet" type="text/css" href="<?php TemplateGet('/assets/css/style.css'); ?>">
	<script src="https://use.fontawesome.com/e8d681bf45.js"></script>

	<script type="text/javascript"> 
		window.Debug = false;
	</script>

</head>
<body ng-app="EricCodes" ng-class="BodyClass" class="eric-codes">

	<div ng-controller="CoreController">



		<div class="modal-container" ng-controller="modalController" ng-class="ModalStatus">

			<div class="modal-inside">

				<span class="close-modal" ng-click="CloseModal()"><i class="fa fa-times" aria-hidden="true"></i></span>

				<div class="modal-image-container" ng-click="CloseModal()" ng-if="ModalSettings.URL">
					<img class="modal-image" ng-src="{{GetImage(ModalSettings.URL)}}"></img>
				</div>

				<div class="modal-scroll-image-container" ng-click="CloseModal()" ng-if="ModalSettings.scrollURL">
					<img class="modal-scroll-image" ng-src="{{GetImage(ModalSettings.scrollURL)}}"></img>
				</div>

				<div class="modal-description">
					<h4>{{ModalSettings.title}}</h4>
					<p>{{ModalSettings.description}}</p>
				</div>

			</div>

		</div>



		<nav class="navbar navbar-default navbar-fixed-top" ng-controller="navbar">
			<div class="container">


				<div class="pull-left logo-area">
					<span class="logo-type">
						<a ng-href="{{NavText[0].link}}" class="crumb crumb-0"></a>
						<a ng-href="{{NavText[1].link}}" class="crumb crumb-1"></a>
						<a ng-href="{{NavText[2].link}}" class="crumb crumb-2"></a>
					</span>
				</div>

				<div class="pull-right icon-area">

					<icon-drawer maindata="NavBar"></icon-drawer>

				</div>

			</div>
		</nav>



		<section ui-view class="main-page-section">

		</section>




		<footer ng-if="Footer" ng-controller="footer">
			
			<div class="container not-shown" when-visible="Animate.In" when-not-visible="Animate.Out">
				<div class="pull-left">

					<span class="footer-text">2010 - 2017 Eric.Codes</span>
					<social-icons class="social"></social-icons>
				</div>
				<div class="pull-right">

					<a class="back-to-top" ng-click="ScrollToTop()"><i class="fa fa-chevron-up" aria-hidden="true"></i></a>

				</div>
				<div class="clearfix"></div>
			</div>

		</footer>


		<script type="text/javascript" src="<?php TemplateGet('/app/app.module.min.js'); ?>"></script>
		<script type="text/javascript" src="<?php TemplateGet('/app/app.core.min.js'); ?>"></script>
		<script type="text/javascript" src="<?php TemplateGet('/app/app.controllers.min.js'); ?>"></script>
		<script type="text/javascript" src="<?php TemplateGet('/app/app.directives.min.js'); ?>"></script>
	</div> 
</body>
</html>