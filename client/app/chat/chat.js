'use strict';

angular.module('nwtNotesApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/chat', {
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatCtrl'
      });
  });