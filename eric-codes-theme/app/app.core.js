app.controller("CoreController",["$scope","$rootScope","loadData","preloader",function(t,e,o,a){e.$on("$stateChangeStart",function(t,e,o,a,n){$("html, body").animate({scrollTop:0},0)}),e.Footer=!0,o.GetData().then(function(t){function o(t){a.preloadImages(t).then(function(){Log.Warning("Images preloaded!")},function(){Log.Warning("Error preloading!")})}var n=t.data;Log.Set("FileSet",n);var r={},i=[];$.each(n,function(t,e){r[e.workData.slug]=e,i.push(e.workData)}),e.AllData=r,e.WorkItems=i,Log.Set("$rootScope.AllData",e.AllData),Log.Set("$rootScope.WorkItems",e.WorkItems);var s=[];$.each(r,function(t,e){var a=themeURL+"assets/img/"+t+"/background.jpg";Log.Set("Preload for "+t,a),s.push(a),o(s);var n=[];$.each(e.workData.hero,function(e,o){var a=themeURL+"assets/img/"+t+"/mockup/"+o.image;n.push(a)}),o(n);var r=[];$.each(e.sections,function(e,o){o.gallery&&$.each(o.gallery,function(e,o){if(o.URL)var a=themeURL+"assets/img/"+t+"/"+o.URL;else var a=themeURL+"assets/img/"+t+"/"+o.scrollURL;var n=themeURL+"assets/img/"+t+"/"+o.thumbnail;r.push(a,n)})}),o(r)}),Log.Set("PreloadList",s)},function(t){Log.Set("LoadData test error",t)})}]),app.service("loadData",["$rootScope","$http",function(t,e){var o={};return o.GetData=function(){return e({url:themeURL+"app/content/getContent.php"})},o}]),app.factory("breadcrumbs",["$rootScope",function(t){Log.Heading("Breadcrumbs Service initiated");var e={};return e.homepage=function(){t.NavText=[{text:"eric.codes",link:"/"}]},e.updateFirstChild=function(e){Log.Function("Updating Nav First Child");var o=t.NavText;Log.Set("currentNav before change",o),o[2]&&(o.pop(),Log.Set("currentNav popped!",o)),o[1]=e,Log.Set("currentNav after change",o),t.NavText=o},e.updateSecondChild=function(e,o){Log.Function("Updating Nav Second Child");var a=t.NavText;Log.Set("currentNav before change",a),o.text&&o.text!==$(".crumb-1").text()&&(a[1]=o),a[2]=e,Log.Set("currentNav after change",a),t.NavText=a},e.updateNav=function(t){$(".icon-link").removeClass("selected"),$(".icon-link").eq(t).addClass("selected")},e}]),app.factory("modalService",["$rootScope",function(t){var e={};return e.Open=function(e){t.ModalSettings=e,t.ModalToggle=!0},e.Close=function(e){t.ModalToggle=!1},e}]),app.factory("preloader",function(t,e){function o(e){this.imageLocations=e,this.imageCount=this.imageLocations.length,this.loadCount=0,this.errorCount=0,this.states={PENDING:1,LOADING:2,RESOLVED:3,REJECTED:4},this.state=this.states.PENDING,this.deferred=t.defer(),this.promise=this.deferred.promise}return o.preloadImages=function(t){return new o(t).load()},o.prototype={constructor:o,isInitiated:function(){return this.state!==this.states.PENDING},isRejected:function(){return this.state===this.states.REJECTED},isResolved:function(){return this.state===this.states.RESOLVED},load:function(){if(this.isInitiated())return this.promise;this.state=this.states.LOADING;for(var t=0;t<this.imageCount;t++)this.loadImageLocation(this.imageLocations[t]);return this.promise},handleImageError:function(t){this.errorCount++,this.isRejected()||(this.state=this.states.REJECTED,this.deferred.reject(t))},handleImageLoad:function(t){this.loadCount++,this.isRejected()||(this.deferred.notify({percent:Math.ceil(this.loadCount/this.imageCount*100),imageLocation:t}),this.loadCount===this.imageCount&&(this.state=this.states.RESOLVED,this.deferred.resolve(this.imageLocations)))},loadImageLocation:function(t){var o=this,a=angular.element(new Image).bind("load",function(t){e.$apply(function(){o.handleImageLoad(t.target.src),o=a=t=null})}).bind("error",function(t){e.$apply(function(){o.handleImageError(t.target.src),o=a=t=null})}).attr("src",t)}},o}),app.factory("sendMail",["$http",function(t){var e={};return e.send=function(e){Log.Warning("Sending mail..."),Log.Set("Arguments..",e),t({method:"POST",url:"/wp-json/ericcodes/v1/send"}).then(function(t){Log.Set("RETURN DATA",t)},function(t){Log.Set("ERROR DATA",t)})},e}]);