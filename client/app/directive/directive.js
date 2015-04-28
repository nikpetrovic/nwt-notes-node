'use strict';

angular.module('nwtNotesApp').config(function($routeProvider) {
	$routeProvider.when('/directive1', {
		templateUrl : 'app/directive/directive.html',
		controller : 'DirectiveCtrl'
	});
});