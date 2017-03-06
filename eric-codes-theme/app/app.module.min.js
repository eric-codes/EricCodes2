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
 * Initialize Angular site main module
 * @type {class}
 */
var app = angular.module('EricCodes', ['ui.router', 'ngAnimate']);