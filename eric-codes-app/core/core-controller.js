app.controller('CoreController', ['$scope', '$rootScope', 'loadData', function($scope, $rootScope, loadData) {

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });

    $rootScope.Footer = true;

    loadData.GetData().then(function(data) {

    	var FileSet = data.data;

        Log.Set('FileSet', FileSet);

        var WorkItems = [];

        $.each(FileSet,function(i,val){
        	WorkItems.push(val.workData);
        })

        $rootScope.WorkItems = WorkItems;

    }, function(data) {
        Log.Set('LoadData test error', data);
    })

}])
