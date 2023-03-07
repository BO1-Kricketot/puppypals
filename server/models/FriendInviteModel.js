const mongoose = require('mongoose');

const friendInviteSchema = new mongoose.Schema({
  _id: Number,
  senderId: Number,
  recipientId: Number,
  status: String, // pending, accepted, rejected
  creationDate: Date,
});

const FriendInviteModel = mongoose.model('Friend_Invite', friendInviteSchema);

module.exports = FriendInviteModel;
