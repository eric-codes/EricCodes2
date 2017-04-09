app.controller('modalController', ['$scope', "modal", '$rootScope', function($scope, $rootScope, modal) {

    $rootScope.ModalSettings;
    $rootScope.ModalToggle = false;

    $scope.ModalSettings;

    $scope.ModalToggle = $rootScope.ModalToggle;
    $scope.ModalStatus = "";

    $scope.Modal = {
        Open: function() {
            $scope.ModalStatus = "open";
        },
        Close: function() {
            $scope.ModalStatus = "";
        }
    }

    $scope.GetImage = function(filename) {
        return themeURL + "assets/img/" + $scope.ModalSettings.slug + "/" + filename;
    }

    $scope.CloseModal = function(){
    	modal.Close();
    }

    $rootScope.$watch('ModalSettings', function(newv, oldv) {
        $scope.ModalSettings = newv;
    })

    $rootScope.$watch('ModalToggle', function(newv, oldv) {
        if (newv === true) {
            $scope.Modal.Open();
        } else {
            $scope.Modal.Close();
        }
    })


}])
