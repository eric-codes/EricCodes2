app.service('loadData', ['$rootScope', '$http', function($rootScope, $http) {

    var scope = {};

    scope.GetData = function() {

        $http({
                url: themeURL + "app/content/getContent.php",
            })
            .then(function(data) {
                return data;
            },function(data) {
                return data;
            });


    }

    return scope;

}])
