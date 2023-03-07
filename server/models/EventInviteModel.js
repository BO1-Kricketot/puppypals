const mongoose = require('mongoose');

const eventInviteSchema = new mongoose.Schema({
  _id: Number,
  senderId: Number,
  recipientId: Number,
  status: String,
  creationDate: Date,
});

const EventInviteModel = mongoose.model('Event_Invite', eventInviteSchema);

module.exports = EventInviteModel;
