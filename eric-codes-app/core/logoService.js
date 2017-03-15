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

		if (currentNav[2]) {
			currentNav.pop();
		}   
		     
        currentNav[1] = obj;


        $rootScope.NavText = currentNav;
    }

    scope.updateSecondChild = function(obj) {
        Log.Function('Updating Nav Second Child');

        var currentNav = $rootScope.NavText;


        currentNav[2] = obj;


        $rootScope.NavText = currentNav;
    }

    return scope;
}])
