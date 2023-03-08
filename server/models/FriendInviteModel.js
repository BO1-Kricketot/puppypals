const mongoose = require('mongoose');

const friendInviteSchema = new mongoose.Schema({
  senderId: String,
  recipientId: String,
  status: String, // pending, accepted, rejected
  creationDate: Date,
});

const FriendInviteModel = mongoose.model('Friend_Invite', friendInviteSchema);

module.exports = FriendInviteModel;
