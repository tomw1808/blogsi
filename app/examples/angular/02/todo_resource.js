'use strict';

angular.module('todotsiApp')
    .factory('TodoResource', function ($resource) {
        return $resource (
            "http://192.168.56.101/todo/:id", {});
    });
