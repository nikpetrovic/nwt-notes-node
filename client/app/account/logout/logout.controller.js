'user strict'
angular.module('nwtNotesApp').controller('LogoutCtrl', function($scope, $location, Auth) {
	Auth.logout();
	$location.path('/login');
});