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

app.factory('modalService', ['$rootScope', function($rootScope){

	var scope = {};

	scope.Open = function(settings){
		$rootScope.ModalSettings = settings;
		$rootScope.ModalToggle = true;
	}

	scope.Close = function(settings){
		$rootScope.ModalToggle = false;
	}

	return scope;

}])
app.factory(
            'preloader',
            function( $q, $rootScope ) {
                // I manage the preloading of image objects. Accepts an array of image URLs.
                function Preloader( imageLocations ) {
                    // I am the image SRC values to preload.
                    this.imageLocations = imageLocations;
                    // As the images load, we'll need to keep track of the load/error
                    // counts when announing the progress on the loading.
                    this.imageCount = this.imageLocations.length;
                    this.loadCount = 0;
                    this.errorCount = 0;
                    // I am the possible states that the preloader can be in.
                    this.states = {
                        PENDING: 1,
                        LOADING: 2,
                        RESOLVED: 3,
                        REJECTED: 4
                    };
                    // I keep track of the current state of the preloader.
                    this.state = this.states.PENDING;
                    // When loading the images, a promise will be returned to indicate
                    // when the loading has completed (and / or progressed).
                    this.deferred = $q.defer();
                    this.promise = this.deferred.promise;
                }
                // ---
                // STATIC METHODS.
                // ---
                // I reload the given images [Array] and return a promise. The promise
                // will be resolved with the array of image locations.
                Preloader.preloadImages = function( imageLocations ) {
                    var preloader = new Preloader( imageLocations );
                    return( preloader.load() );
                };
                // ---
                // INSTANCE METHODS.
                // ---
                Preloader.prototype = {
                    // Best practice for "instnceof" operator.
                    constructor: Preloader,
                    // ---
                    // PUBLIC METHODS.
                    // ---
                    // I determine if the preloader has started loading images yet.
                    isInitiated: function isInitiated() {
                        return( this.state !== this.states.PENDING );
                    },
                    // I determine if the preloader has failed to load all of the images.
                    isRejected: function isRejected() {
                        return( this.state === this.states.REJECTED );
                    },
                    // I determine if the preloader has successfully loaded all of the images.
                    isResolved: function isResolved() {
                        return( this.state === this.states.RESOLVED );
                    },
                    // I initiate the preload of the images. Returns a promise.
                    load: function load() {
                        // If the images are already loading, return the existing promise.
                        if ( this.isInitiated() ) {
                            return( this.promise );
                        }
                        this.state = this.states.LOADING;
                        for ( var i = 0 ; i < this.imageCount ; i++ ) {
                            this.loadImageLocation( this.imageLocations[ i ] );
                        }
                        // Return the deferred promise for the load event.
                        return( this.promise );
                    },
                    // ---
                    // PRIVATE METHODS.
                    // ---
                    // I handle the load-failure of the given image location.
                    handleImageError: function handleImageError( imageLocation ) {
                        this.errorCount++;
                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {
                            return;
                        }
                        this.state = this.states.REJECTED;
                        this.deferred.reject( imageLocation );
                    },
                    // I handle the load-success of the given image location.
                    handleImageLoad: function handleImageLoad( imageLocation ) {
                        this.loadCount++;
                        // If the preload action has already failed, ignore further action.
                        if ( this.isRejected() ) {
                            return;
                        }
                        // Notify the progress of the overall deferred. This is different
                        // than Resolving the deferred - you can call notify many times
                        // before the ultimate resolution (or rejection) of the deferred.
                        this.deferred.notify({
                            percent: Math.ceil( this.loadCount / this.imageCount * 100 ),
                            imageLocation: imageLocation
                        });
                        // If all of the images have loaded, we can resolve the deferred
                        // value that we returned to the calling context.
                        if ( this.loadCount === this.imageCount ) {
                            this.state = this.states.RESOLVED;
                            this.deferred.resolve( this.imageLocations );
                        }
                    },
                    // I load the given image location and then wire the load / error
                    // events back into the preloader instance.
                    // --
                    // NOTE: The load/error events trigger a $digest.
                    loadImageLocation: function loadImageLocation( imageLocation ) {
                        var preloader = this;
                        // When it comes to creating the image object, it is critical that
                        // we bind the event handlers BEFORE we actually set the image
                        // source. Failure to do so will prevent the events from proper
                        // triggering in some browsers.
                        // --
                        // The below removes a dependency on jQuery, based on a comment
                        // on Ben Nadel's original blog by user Adriaan:
                        // http://www.bennadel.com/members/11887-adriaan.htm
                        var image = angular.element( new Image() )
                            .bind('load', function( event ) {
                                // Since the load event is asynchronous, we have to
                                // tell AngularJS that something changed.
                                $rootScope.$apply(
                                    function() {
                                        preloader.handleImageLoad( event.target.src );
                                        // Clean up object reference to help with the
                                        // garbage collection in the closure.
                                        preloader = image = event = null;
                                    }
                                );
                            })
                            .bind('error', function( event ) {
                                // Since the load event is asynchronous, we have to
                                // tell AngularJS that something changed.
                                $rootScope.$apply(
                                    function() {
                                        preloader.handleImageError( event.target.src );
                                        // Clean up object reference to help with the
                                        // garbage collection in the closure.
                                        preloader = image = event = null;
                                    }
                                );
                            })
                            .attr( 'src', imageLocation )
                        ;
                    }
                };
                // Return the factory instance.
                return( Preloader );
            }
        );
app.factory('sendMail', ['$http', function($http){

	var scope = {};

	scope.send = function(args,callback) {
		Log.Warning('Sending mail...');
		Log.Set('Arguments..',args);
		$http({
			method: 'POST',
			url: '/wp-json/ericcodes/v1/send',
			data: args
		}).then(function(data){
			Log.Set('RETURN DATA',data);
			if (callback) {
				callback(data);
			} else {
				return data;
			}
		},function(data){
			Log.Set('ERROR DATA',data);
			if (callback) {
				callback(data);
			} else {
				return data;
			}
		})
	}

	return scope;
}])