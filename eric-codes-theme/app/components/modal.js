app.controller('modal', ['$scope', '$rootScope', function($scope,$rootScope){
	
	$rootScope.modalSettings;

	$scope.modalSettings;

	$scope.GetImage = function(filename) {
			return themeURL + "assets/img/" + $scope.modalSettings.slug + "/" + filename;
		}

	$rootScope.$watch('modalSettings',function(newv,oldv){
		$scope.modalSettings = newv;
	})


}])