/**
 * Socket.io configuration
 */

'use strict';

var config = require('./environment');
var User = require('../api/user/user.model');

var admin_room = 'admin_room';
var rooms = {};

// When the user disconnects.. perform this
function onDisconnect(socket) {
	var idx = null;
	for (var i = 0; i < rooms[admin_room].length; i++) {
		console.log("USER " + i + ": " + rooms[admin_room][i]._id);
		if (rooms[admin_room][i]._id == socket.decoded_token._id) {
			idx = i;
			break;
		}
	}

	console.log("ROOMS: " + rooms[admin_room].length);
	console.log("ID: " + socket.decoded_token._id);

	var user = null;
	console.log("IDX: " + idx);
	if (idx >= 0) {
		user = rooms[admin_room][idx];
		rooms[admin_room].splice(idx, 1);
	}
	socket.leave(admin_room);

	console.log("CURRENTLY IN ROOM: ");
	for (var i = 0; i < rooms[admin_room].length; i++) {
		console.log(rooms[admin_room][i].email);
	}

	console.log("user != null: " + user);
	if (user != null) {
		socket.to(admin_room).emit("online_status", {
			type : 'info',
			text : user.firstName + " " + user.lastName,
			participants : rooms[admin_room]
		});
	}
}

// When the user connects.. perform this
function onConnect(socket) {
	socket.on("update_status", function() {
		// socket.to(admin_room).emit("online_status", {
		// participants : rooms[admin_room]
		// });
		socket.emit("online_status", {
			participants : rooms[admin_room]
		});
	});

	// Insert sockets below
	require('../api/chat/chat.socket').register(socket);
	require('../api/book/book.socket').register(socket);
	require('../api/thing/thing.socket').register(socket);

	socket.join(admin_room);
	console.log("client '%s' has just joined the room '%s': ", socket.id, admin_room);
	console.log('decoded token: ' + socket.decoded_token._id);
	if (rooms[admin_room] == null) {
		console.log('rooms[admin_room] == null');
		rooms[admin_room] = [];
		console.log(JSON.stringify(rooms[admin_room]));
	}

	User.findOne({
		_id : socket.decoded_token._id
	}, '-salt -hashedPassword', function(err, user) { // don't ever give out the
		// password or salt
		if (err)
			return next(err);
		// if (!user)
		// return res.json(401);
		if (user && user.role === 'admin') {
			rooms[admin_room].push(user);
			console.log("User: " + user.firstName + " " + user.lastName);
			socket.to(admin_room).emit("online_status", {
				type : 'online_status',
				text : user.firstName + " " + user.lastName,
				participants : rooms[admin_room]
			});
		}
	});
}

module.exports = function(socketio) {
	// socket.io (v1.x.x) is powered by debug.
	// In order to see all the debug output, set DEBUG (in
	// server/config/local.env.js) to including the desired scope.
	//
	// ex: DEBUG: "http*,socket.io:socket"

	// We can authenticate socket.io users and access their token through
	// socket.handshake.decoded_token
	//
	// 1. You will need to send the token in
	// `client/components/socket/socket.service.js`
	//
	// 2. Require authentication here:
	socketio.use(require('socketio-jwt').authorize({
		secret : config.secrets.session,
		handshake : true
	})).on('authenticated', function(socket) {
		// this socket is authenticated, we are good to handle more events from
		// it.
		console.log('hello! ' + socket.decoded_token.name);
	});

	socketio.on('connection', function(socket) {
		console.log("CONNECTED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
		socket.address = socket.handshake.address !== null ? socket.handshake.address.address + ':'
				+ socket.handshake.address.port : process.env.DOMAIN;

		socket.connectedAt = new Date();

		// Call onDisconnect.
		socket.on('disconnect', function() {
			onDisconnect(socket);
			console.info('[%s] DISCONNECTED', socket.address);
		});

		// Call onConnect.
		onConnect(socket);
		console.info('[%s] CONNECTED', socket.address);
	});
};