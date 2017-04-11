app.controller('CoreController', ['$scope', '$rootScope', 'loadData', 'preloader', function($scope, $rootScope, loadData,preloader) {

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

        $.each(FileSet, function(i, val) {
            AllFiles[val.workData.slug] = val;
            WorkItems.push(val.workData);
        })


        $rootScope.AllData = AllFiles;
        $rootScope.WorkItems = WorkItems;

        Log.Set("$rootScope.AllData", $rootScope.AllData);
        Log.Set("$rootScope.WorkItems", $rootScope.WorkItems);

        var PreloadList = [];

        $.each(AllFiles, function(i, val) {
            var Return = themeURL + "assets/img/" + i + "/background.jpg";
            Log.Set('Preload for ' + i, Return);
            PreloadList.push(Return);

            $.each(val.sections, function(i2, val2) {
                if (val2.gallery) {
                    $.each(val2.gallery, function(itemIndex, item) {
                        var Return = themeURL + "assets/img/" + i + "/" + item.URL,
                            ReturnThumb = themeURL + "assets/img/" + i + "/" + item.thumbnail;
                            PreloadList.push(Return,ReturnThumb);
                    })
                }
            })

        })

        Log.Set("PreloadList",PreloadList);

        preloader.preloadImages(PreloadList)
        .then(function(){
            Log.Warning('Images preloaded!');
        },function(){
            Log.Warning('Error preloading!');
        });

    }, function(data) {
        Log.Set('LoadData test error', data);
    })

}])
