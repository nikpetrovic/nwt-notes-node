'use strict';

angular.module('nwtNotesApp').controller('DirectiveCtrl', function($scope, $http) {
	$scope.menuLinks = [ {
		text : '<i class=\'fa fa-pencil\'></i>&nbsp;Notes',
		href : '/directive1'
	}, {
		text : '<i class=\"fa fa-download\"></i>&nbsp;Logout',
		href : '/logout',
		target : '_self'
	} ];
});