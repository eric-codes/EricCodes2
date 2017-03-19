app.service('loadData', ['$rootScope', '$http', function($rootScope, $http) {

    var scope = {};

    scope.GetData = function() {

        return $http({
            url: themeURL + "app/content/getContent.php",
        });


    }

    return scope;

}])
