'use strict';

/**
 * @ngdoc overview
 * @name pohAdminApp
 * @description
 * # pohAdminApp
 *
 * Main module of the application.
 */
angular
  .module('pohAdminApp', [
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
      'ui.bootstrap',
      'ui.select',
      'ngSanitize'
  ])
  .config(function ($routeProvider, $httpProvider) {

      Date.prototype.parseDate = function(dateString) {
          var m = moment(dateString, 'DD-MM-YYYY', true);
          return m.isValid() ? m.toDate() : new Date(NaN);
      };

      Date.prototype.toJSON = function(){ return moment(this).format('YYYY-MM-DD');}

      $httpProvider.defaults.headers.common["X-Requested-with"] = 'XMLHTTPRequest';


      $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
