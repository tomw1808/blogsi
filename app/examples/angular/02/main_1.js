'use strict';

/**
 * @ngdoc function
 * @name todotsiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todotsiApp
 */
angular.module('todotsiApp')
  .controller('MainCtrl', function ($scope, TodoService) {
        $scope.getTodoList = function() {
            return TodoService.getTodoList();
        }
  });
