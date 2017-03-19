app.controller('CoreController', ['$scope', '$rootScope', 'loadData', function($scope, $rootScope, loadData) {

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });

    $rootScope.Footer = true;

    loadData.GetData().then(function(data) {
        Log.Set('LoadData test', data);

        var FileList = [];

        $.each(data.data.files, function(i, val) {
            Log.Set('test', val);

            if (val.includes('json')) {

                FileList.push(val);
            }
        })

        Log.Set('FileList', FileList);

    }, function(data) {
        Log.Set('LoadData test error', data);
    })

}])

app.service('loadData', ['$rootScope', '$http', function($rootScope, $http) {

    var scope = {};

    scope.GetData = function() {

        return $http({
            url: themeURL + "app/content/getContent.php",
        });


    }

    return scope;

}])

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

    scope.updateSecondChild = function(obj, parent) {
        Log.Function('Updating Nav Second Child');

        var currentNav = $rootScope.NavText;

        Log.Set('currentNav before change', currentNav);

        if (parent.text && parent.text !== $('.crumb-1').text()) {
            currentNav[1] = parent;
        }



        currentNav[2] = obj;

        Log.Set('currentNav after change', currentNav);

        $rootScope.NavText = currentNav;
    }

    scope.updateNav = function(i) {
        $('.icon-link').removeClass('selected');
        $('.icon-link').eq(i).addClass('selected');
    }

    return scope;
}])
