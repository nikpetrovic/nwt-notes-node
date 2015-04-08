'use strict';

angular.module('nwtNotesApp').controller(
		'ChatCtrl',
		function($scope, socket) {
			$scope.message = 'Hello';

			socket.socket.emit("get_rooms", {});
			socket.socket.on("rooms_list", function(rooms) {
				for ( var room in rooms) {
					var roomDiv = '<div class="room_div"><span class="room_name">' + room
							+ '</span><span class="room_users">[ ' + rooms[room] + ' Users ] </span>'
							+ '<a class="room" href="/?room=' + room + '">Join</a></div>';
					$('#rooms_list').append(roomDiv);
				}
			});
		});
