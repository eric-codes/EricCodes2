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
            console.log("");
            console.log("--- " + msg);
            console.log("");
        },
        Warning: function(msg) {
            console.log("");
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


/**
 * Set global child theme template folder
 * @type {String}
 */
var themeURL = 'http://' + window.location.host + "/wp-content/themes/eric-codes-theme/";

Log.Value('themeURL',themeURL);





/**
 * Initialize Angular site main module
 * @type {class}
 */
var app = angular.module('EricCodes', ['ui.router', 'ngAnimate']);

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
 * Angular Routing configuration settings
 */
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider
        .state('home', { // Home Page
            url: '/',
            controller: 'homepage',
            templateUrl: GetView('homepage')
        }) // Battles Main Page
/*        .state('battles', {
            url: '/battles',
            controller: 'cc_battles',
            templateUrl: GetView('battles-featured')
        }) // Battles Main Page
        .state('battles-active', {
            url: '/battles/active',
            controller: 'cc_battles_active',
            templateUrl: GetView('battles-active')
        })
        .state('battle-page', {
            url: '/battles/:battleSlug',
            controller: 'cc_battle_page',
            templateUrl: GetView('battle-page')
        })
        .state('vote', { // Vote Main Page
            url: '/vote',
            controller: 'cc_vote',
            templateUrl: GetView('vote')
        })
        .state('vote-battle', { // Vote Specific battle
            url: '/vote/:battleSlug',
            controller: 'cc_vote',
            templateUrl: GetView('vote')
        })
        .state('news', { // Blog Posts Main Page
            url: '/news',
            controller: 'cc_news',
            templateUrl: GetView('news')
        })*/
}])