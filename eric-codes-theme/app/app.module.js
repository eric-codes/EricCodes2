function GetView(o){return themeURL+"app/components/"+o+".html"}function GetShared(o){return themeURL+"app/shared/"+o+".html"}function returnTags(o){var e=[];return $.each(o,function(o,n){var t,l={icon:iconFolder+"code_"+n+".svg"};switch(n){case"jquery":t="jQuery";break;case"angular":t="Angular 1.x";break;case"sass":t="SASS / LESS";break;case"backend":t="PHP / MySQL";break;case"css3":t="CSS3";break;case"graphicdesign":t="Graphic Design";break;case"gulp":t="Gulp";break;case"html5":t="HTML5";break;case"typography":t="Typography";break;case"uidesign":t="UI Design"}l.title=t,e.push(l)}),e}1==window.Debug?window.Log={Msg:function(o){console.log(o)},Value:function(o,e){console.log(o+": "+e)},Set:function(o,e){console.log(o+": "),console.log(e)},Divider:function(){console.log(""),console.log(""),console.log("================================================================================"),console.log("================================================================================"),console.log(""),console.log("")},Heading:function(o){console.log(""),console.log(""),console.log(""),console.log("================================================================================"),console.log("==   "+o),console.log("================================================================================"),console.log(""),console.log("")},Space:function(){console.log(""),console.log(""),console.log(""),console.log(""),console.log("")},Function:function(o){console.log(""),console.log("--- "+o),console.log("")},Warning:function(o){console.log(""),console.log("!!!!!!!  "+o+"  !!!!!!!"),console.log("")}}:window.Log={Msg:function(){return!1},Value:function(){return!1},Set:function(){return!1},Divider:function(){return!1},Heading:function(){return!1},Space:function(){return!1},Function:function(){return!1},Warning:function(){return!1}};var themeURL="http://"+window.location.host+"/wp-content/themes/eric-codes-theme/";Log.Value("themeURL",themeURL);var app=angular.module("EricCodes",["ui.router","ngAnimate","angular-scroll-animate"]),iconFolder=themeURL+"images/icons/";Log.Set("returnTags Test",returnTags(["jquery","angular"])),app.config(["$stateProvider","$urlRouterProvider","$locationProvider",function(o,e,n){e.otherwise("/"),o.state("home",{url:"/",controller:"homepage",templateUrl:GetView("homepage")}).state("about",{url:"/about",controller:"about",templateUrl:GetView("about")}).state("work",{url:"/work",controller:"work",templateUrl:GetView("work")}).state("contact",{url:"/contact",controller:"contact",templateUrl:GetView("contact")}).state("work_single",{url:"/work/:workSlug",controller:"work_single",templateUrl:GetView("work_single")}),n.html5Mode(!0)}]).run(["$state","$rootScope",function(o,e){e.$on("$stateChangeSuccess",function(){setTimeout(function(){$("body,html").scrollTop(1)},100)})}]);mes/eric-codes-theme/";

Log.Value('themeURL', themeURL);





/**
 * Initialize Angular site main module
 * @type {class}
 */
var app = angular.module('EricCodes', ['ui.router', 'ngAnimate', 'angular-scroll-animate']);

/**
 * Returns template URL for the view name input.
 * @param {String} view_name    File of view .html file
 * @returns {String}            URL of the template HTML
 */
function GetView(view_name) {
    return themeURL + "app/components/" + view_name + ".html";
}

/**
 * Returns template URL for the directive name input
 * @param {String} view_name    File of view .html file
 * @returns {String}            URL of the template HTML
 */
function GetShared(view_name) {
    return themeURL + "app/shared/" + view_name + ".html";
}

/**
 * Static var for the icon folder - changes depending on themeURL
 * @type {String}
 */
var iconFolder = themeURL + "images/icons/";

function returnTags(tagArray) {

    var returnArr = [];

    $.each(tagArray, function(i, val) {
        var AddToArr = {
            icon: iconFolder + "code_" + val + ".svg"
        }
        var Title;
        switch (val) {
            case "jquery":
                Title = "jQuery";
                break;
            case "angular":
                Title = "Angular 1.x";
                break;

            case "sass":
                Title = "SASS / LESS";
                break;

            case "backend":
                Title = "PHP / MySQL";
                break;

            case "css3":
                Title = "CSS3";
                break;

            case "graphicdesign":
                Title = "Graphic Design";
                break;

            case "gulp":
                Title = "Gulp";
                break;

            case "html5":
                Title = "HTML5";
                break;

            case "typography":
                Title = "Typography";
                break;

            case "uidesign":
                Title = "UI Design";
                break;
        }
        AddToArr.title = Title;
        returnArr.push(AddToArr);
    })

    return returnArr;
}

Log.Set('returnTags Test', returnTags(['jquery', 'angular']));

/**
 * Angular Routing configuration settings
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', { // Home Page
            url: '/',
            controller: 'homepage',
            templateUrl: GetView('homepage')
        })
        .state('about', { // Home Page
            url: '/about',
            controller: 'about',
            templateUrl: GetView('about')
        })
        .state('work', { // Home Page
            url: '/work',
            controller: 'work',
            templateUrl: GetView('work')
        })
        .state('contact', { // Home Page
            url: '/contact',
            controller: 'contact',
            templateUrl: GetView('contact')
        })
        .state('work_single', {
            url: '/work/:workSlug',
            controller: 'work_single',
            templateUrl: GetView('work_single')
        })

    $locationProvider.html5Mode(true);

}])

.run(['$state', '$rootScope', function($state, $rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
        setTimeout(function() {
            $('body,html').scrollTop(1);
        }, 100);
    });
}]);
