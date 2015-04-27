'use strict';

angular.module('nwtNotesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/waiting', {
        templateUrl: 'app/waiting/waiting.html',
        controller: 'WaitCtrl'
      });
  });