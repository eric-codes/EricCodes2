function GetView(o){return themeURL+"app/components/"+o+".html"}function GetShared(o){return themeURL+"app/shared/"+o+".html"}1==window.Debug?window.Log={Msg:function(o){console.log(o)},Value:function(o,e){console.log(o+": "+e)},Set:function(o,e){console.log(o+": "),console.log(e)},Divider:function(){console.log(""),console.log(""),console.log("================================================================================"),console.log("================================================================================"),console.log(""),console.log("")},Heading:function(o){console.log(""),console.log(""),console.log(""),console.log("================================================================================"),console.log("==   "+o),console.log("================================================================================"),console.log(""),console.log("")},Space:function(){console.log(""),console.log(""),console.log(""),console.log(""),console.log("")},Function:function(o){console.log(""),console.log(""),console.log("--- "+o),console.log("")},Warning:function(o){console.log(""),console.log(""),console.log("!!!!!!!  "+o+"  !!!!!!!"),console.log("")}}:window.Log={Msg:function(){return!1},Value:function(){return!1},Set:function(){return!1},Divider:function(){return!1},Heading:function(){return!1},Space:function(){return!1},Function:function(){return!1},Warning:function(){return!1}};var themeURL="http://"+window.location.host+"/wp-content/themes/eric-codes-theme/";Log.Value("themeURL",themeURL);var app=angular.module("EricCodes",["ui.router","ngAnimate"]),iconFolder=themeURL+"images/icons/";app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,e,n){e.otherwise("/"),o.state("home",{url:"/",controller:"homepage",templateUrl:GetView("homepage")}).state("about",{url:"/about",controller:"about",templateUrl:GetView("about")}).state("work",{url:"/work",controller:"work",templateUrl:GetView("work")}).state("work_single",{url:"/work/:workSlug",controller:"work_single",templateUrl:GetView("work_single")}),n.html5Mode(!0)}]);