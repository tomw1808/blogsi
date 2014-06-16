'use strict';

angular
  .module('blogsiApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
        'hljs',
        "blogsi.tomo.01",
        'ngDisqus'
  ])
  .config(function ($routeProvider, $locationProvider, $disqusProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
        $locationProvider
            .hashPrefix('!');
        $disqusProvider.setShortname("blogsi");
  }).run(["$location", "$rootScope", "$disqus", function($location, $rootScope, $disqus) {
        $disqus.commit($location.path());
        // register listener to watch route changes
        $rootScope.$on( "$locationChangeSuccess", function(event, next, current) {
            $disqus.commit($location.path());

        });

    }]);
