'user strict'
angular.module('nwtNotesApp').controller('LogoutCtrl', function($location, Auth) {
	Auth.logout();
	$location.path('/');
});