app.factory('breadcrumbs', ['$rootScope', function($rootScope) {

    Log.Heading('Breadcrumbs Service initiated');



    var scope = {};

    scope.homepage = function() {
        $rootScope.NavText = [{
            text: 'eric.codes',
            link: '/'
        }];
    }

    scope.updateFirstChild = function(obj) {
        Log.Function('Updating Nav First Child');

        var currentNav = $rootScope.NavText;

        Log.Set('currentNav before change', currentNav);

        if (currentNav[2]) {
            currentNav.pop();
            Log.Set('currentNav popped!', currentNav);
        }

        currentNav[1] = obj;

        Log.Set('currentNav after change', currentNav);


        $rootScope.NavText = currentNav;
    }

    scope.updateSecondChild = function(obj) {
        Log.Function('Updating Nav Second Child');

        var currentNav = $rootScope.NavText;

        Log.Set('currentNav before change', currentNav);

        currentNav[2] = obj;

        Log.Set('currentNav after change', currentNav);

        $rootScope.NavText = currentNav;
    }

    return scope;
}])
