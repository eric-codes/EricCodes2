app.service('loadData', ['$rootScope', '$http', function($rootScope, $http) {

    var scope = {};

    scope.GetData = function() {

        $http({
                url: themeURL + "app/content/projects/",
            })
            .success(function(data) {
                return data;
            })
            .error(function(data) {
                return data;
            })

    }

    return scope;

}])
