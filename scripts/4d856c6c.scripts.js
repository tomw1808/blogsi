"use strict";angular.module("blogsiApp",["ngCookies","ngResource","ngSanitize","ngRoute","hljs","blogsi.tomo.01","ngDisqus"]).config(["$routeProvider","$locationProvider","$disqusProvider",function(a,b,c){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"}),b.hashPrefix("!"),c.setShortname("blogsi")}]),angular.module("blogsiApp").controller("MainCtrl",["$scope","$rootScope","$route",function(a,b,c){console.log(c.current)}]),angular.module("blogsiApp").directive("scrollOnClick",function(){return{restrict:"A",link:function(a,b,c){var d=c.href;b.on("click",function(){var a;a=d?$(d):b,$("html, body").animate({scrollTop:a.offset().top},"slow")})}}}),angular.module("blogsi.tomo.01",["ngRoute","ngDisqus"]).config(["$routeProvider",function(a){a.when("/tomo/:name",{templateUrl:function(a){return"scripts/modules/tomo/"+a.name+".html"},controller:"TomoCtl"})}]).controller("TomoCtl",["$scope","$rootScope",function(a,b){b.discussion=!0,a.basepath="scripts/modules/tomo/"}]);