'use strict';


// Declare app level module which depends on filters, and services
angular.module('blogsi.tomo.01', [
        'ngRoute',
        'ngDisqus'
    ]).
    config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/tomo/:name', {
            templateUrl: function (name) {
                return 'scripts/modules/tomo/' + name.name + '.html';
            },
            controller: 'TomoCtl'
        });
    }])
    .controller("TomoCtl", ['$scope', '$rootScope', function ($scope, $rootScope) {

        $rootScope.discussion = true;

        $scope.basepath = "scripts/modules/tomo/";

    }])
;
