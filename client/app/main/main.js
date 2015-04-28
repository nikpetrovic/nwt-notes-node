'use strict';

angular.module('nwtNotesApp').config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'app/main/main.html',
		controller : 'MainCtrl'
	});
});