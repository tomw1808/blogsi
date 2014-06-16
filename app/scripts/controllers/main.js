'use strict';

angular.module('blogsiApp')
  .controller('MainCtrl', ["$scope", "$rootScope", "$route", function ($scope, $rootScope, $route) {
        console.log($route.current);
  }]);
