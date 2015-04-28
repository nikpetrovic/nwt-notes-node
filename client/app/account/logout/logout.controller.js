'user strict'
angular.module('nwtNotesApp').controller('LogoutCtrl', function($scope, $location, Auth) {
//	alert('Logout');
	Auth.logout();
//	$location.path('/');
});