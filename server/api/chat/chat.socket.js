/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Chat = require('./chat.model');
var User = require('../user/user.model');

var admin_room = 'admin_room';

exports.register = function(socket) {
  Chat.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Chat.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
  
  

//	User.findOne({
//		_id : socket.decoded_token._id
//	}, '-salt -hashedPassword', function(err, user) { // don't ever give out the
//		// password or salt
//		if (err)
//			return next(err);
////		if (!user)
////			return res.json(401);
//		console.log("User: " + user.firstName + " " + user.lastName);
//	});
}

function onSave(socket, doc, cb) {
  socket.emit('chat:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('chat:remove', doc);
}