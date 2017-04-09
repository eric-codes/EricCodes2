app.factory('modal', ['$rootScope', function($rootScope){

	var scope = {};

	scope.Open = function(settings){
		$rootScope.ModalSettings = settings;
		$rootScope.ModalToggle = true;
	}

	scope.Close = function(settings){
		$rootScope.ModalToggle = false;
	}

	return scope;

}])