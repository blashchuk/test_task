'use strict';

/**
 * @ngdoc overview
 * @name testTaskApp
 * @description
 * # testTaskApp
 *
 * Main module of the application.
 */
angular
  .module('testTaskApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'values'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
      })
      .when('/profile/:id', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
      })
      .when('/repo-info/:id', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl',
      })
      .when('/commits/:login/:repo/:sha', {
        templateUrl: 'views/commits.html',
        controller: 'CommitsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
