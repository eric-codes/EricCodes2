/**
 * @file The main app script for the theme.
 * @author Eric Cheung
 * @version 1.0.0
 *
 * 
 * @namespace Directives
 *
 *
 */

/**
 * @namespace Controllers
 */

/**
 * @namespace Services
 */

if (window.Debug == true) {
    window.Log = {
        Msg: function(msg) {
            console.log(msg);
        },
        Value: function(valname, val) {
            console.log(valname + ": " + val);
        },
        Set: function(valname, val) {
            console.log(valname + ": ");
            console.log(val);
        },
        Divider: function() {
            console.log("");
            console.log("");
            console.log("================================================================================");
            console.log("================================================================================");
            console.log("");
            console.log("");
        },
        Heading: function(msg) {
            console.log("");
            console.log("");
            console.log("");
            console.log("================================================================================");
            console.log("==   " + msg);
            console.log("================================================================================");
            console.log("");
            console.log("");
        },
        Space: function() {
            console.log("");
            console.log("");
            console.log("");
            console.log("");
            console.log("");
        },
        Function: function(msg) {
            console.log("");
            console.log("--- " + msg);
            console.log("");
        },
        Warning: function(msg) {
            console.log("");
            console.log("!!!!!!!  " + msg + "  !!!!!!!");
            console.log("");
        }
    }
} else {
    window.Log = {
        Msg: function() {
            return false;
        },
        Value: function() {
            return false;
        },
        Set: function() {
            return false;
        },
        Divider: function() {
            return false;
        },
        Heading: function() {
            return false;
        },
        Space: function() {
            return false;
        },
        Function: function() {
            return false;
        },
        Warning: function() {
            return false;
        },
    }
}


// function preload(arrayOfImages) {
//     $(arrayOfImages).each(function(){
//         $('<img/>')[0].src = this;
//         Log.Set('Preloading', this);
//     });
// }

/**
 * Set global child theme template folder
 * @type {String}
 */
var themeURL = 'http://' + window.location.host + "/wp-content/themes/eric-codes-theme/";

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
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$transitions', function($stateProvider, $urlRouterProvider, $locationProvider, $transitions) {

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

    $transitions.onStart({},function(trans){
        trans.promise.finally(function(){
            $(window).scrollTop(1);
        })
    })



}])
