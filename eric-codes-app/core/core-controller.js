app.controller('CoreController', ['$scope', '$rootScope', 'loadData', 'preloader', function($scope, $rootScope, loadData, preloader) {

    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
        $('html, body').animate({
            scrollTop: 0
        }, 0);
    });

    $rootScope.Footer = true;

    $scope.Animate = {
        In: function($el){
            $el.removeClass('not-shown');
            $el.addClass('shown transition');
        },
        Out: function($el){
            $el.addClass('not-shown transition');
            $el.removeClass('shown');
        }
    }

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

        function Preload(list) {
            preloader.preloadImages(list)
                .then(function() {
                    Log.Warning('Images preloaded!');
                }, function() {
                    Log.Warning('Error preloading!');
                });
        }

        $.each(AllFiles, function(i, val) {
            var Return = themeURL + "assets/img/" + i + "/background.jpg";
            Log.Set('Preload for ' + i, Return);
            PreloadList.push(Return);
            Preload(PreloadList);

            var PreloadListHero = [];
            $.each(val.workData.hero, function(i2, val2) {
                var Return = themeURL + "assets/img/" + i + "/mockup/" + val2.image;
                PreloadListHero.push(Return);
            })
            Preload(PreloadListHero);


            var PreloadListGallery = [];
            $.each(val.sections, function(i2, val2) {
                if (val2.gallery) {
                    $.each(val2.gallery, function(itemIndex, item) {
                        if (item.URL) {
                            var Return = themeURL + "assets/img/" + i + "/" + item.URL;
                        } else {
                            var Return = themeURL + "assets/img/" + i + "/" + item.scrollURL;
                        }

                        var ReturnThumb = themeURL + "assets/img/" + i + "/" + item.thumbnail;
                        PreloadListGallery.push(Return, ReturnThumb);
                    })
                }
            })
            Preload(PreloadListGallery);



        })

        Log.Set("PreloadList", PreloadList);



    }, function(data) {
        Log.Set('LoadData test error', data);
    })

}])
