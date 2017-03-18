function GetView(o){return themeURL+"app/components/"+o+".html"}function GetShared(o){return themeURL+"app/shared/"+o+".html"}function returnTags(o){var e=[];return $.each(o,function(o,n){var l,t={icon:iconFolder+"code_"+n+".svg"};switch(n){case"jquery":l="jQuery";break;case"angular":l="Angular 1.x";break;case"sass":l="SASS / LESS";break;case"backend":l="PHP / MySQL";break;case"css3":l="CSS3";break;case"graphicdesign":l="Graphic Design";break;case"gulp":l="Gulp";break;case"html5":l="HTML5";break;case"typography":l="Typography";break;case"uidesign":l="UI Design"}t.title=l,e.push(t)}),e}1==window.Debug?window.Log={Msg:function(o){console.log(o)},Value:function(o,e){console.log(o+": "+e)},Set:function(o,e){console.log(o+": "),console.log(e)},Divider:function(){console.log(""),console.log(""),console.log("================================================================================"),console.log("================================================================================"),console.log(""),console.log("")},Heading:function(o){console.log(""),console.log(""),console.log(""),console.log("================================================================================"),console.log("==   "+o),console.log("================================================================================"),console.log(""),console.log("")},Space:function(){console.log(""),console.log(""),console.log(""),console.log(""),console.log("")},Function:function(o){console.log(""),console.log("--- "+o),console.log("")},Warning:function(o){console.log(""),console.log("!!!!!!!  "+o+"  !!!!!!!"),console.log("")}}:window.Log={Msg:function(){return!1},Value:function(){return!1},Set:function(){return!1},Divider:function(){return!1},Heading:function(){return!1},Space:function(){return!1},Function:function(){return!1},Warning:function(){return!1}};var themeURL="http://"+window.location.host+"/wp-content/themes/eric-codes-theme/";Log.Value("themeURL",themeURL);var app=angular.module("EricCodes",["ui.router","ngAnimate"]),iconFolder=themeURL+"images/icons/";Log.Set("returnTags Test",returnTags(["jquery","angular"])),app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,e,n){e.otherwise("/"),o.state("home",{url:"/",controller:"homepage",templateUrl:GetView("homepage")}).state("about",{url:"/about",controller:"about",templateUrl:GetView("about")}).state("work",{url:"/work",controller:"work",templateUrl:GetView("work")}).state("work_single",{url:"/work/:workSlug",controller:"work_single",templateUrl:GetView("work_single")}),n.html5Mode(!0)}]);