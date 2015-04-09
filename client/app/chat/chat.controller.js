'use strict';

angular.module('nwtNotesApp').controller('ChatCtrl', function($scope, socket) {
	socket.socket.on("online_status", function(data) {
		console.log("DATA FROM SERVER: " + JSON.stringify(data));
		$scope.onlineStatus = data;
		$scope.$apply();
	});

	socket.socket.emit("update_status", {});
});
