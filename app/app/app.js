(function(){

    'use strict';

/**
 * @ngdoc overview
 * @name rosettaApp
 * @description
 * # rosettaApp
 *
 * Main module of the application.
 */

angular
  .module('rosettaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/landing/views/main.html'
      })
      .when('/login', {
	    templateUrl: 'app/auth/views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/home', {
	      templateUrl: 'app/dashboard/views/home.html',
	      controller: 'HomeCtrl',
	      controllerAs: 'home'
      })
      .when('/projects', {
        templateUrl: 'app/dashboard/views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects'
      })
      .when('/project/:id', {
	      templateUrl: 'app/dashboard/views/project.html',
	      controller: 'ProjectCtrl',
	      controllerAs: 'project'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


})();