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

        var AllFiles = {};
        var WorkItems = [];

        $.each(FileSet,function(i,val){
        	AllFiles[val.workData.slug] = val;
        	WorkItems.push(val.workData);
        })

        $rootScope.AllData = AllFiles;
        $rootScope.WorkItems = WorkItems;

        Log.Set("$rootScope.AllData",$rootScope.AllData);
        Log.Set("$rootScope.WorkItems",$rootScope.WorkItems);

    }, function(data) {
        Log.Set('LoadData test error', data);
    })

}])
