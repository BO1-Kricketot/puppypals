const mongoose = require('mongoose');

const eventInviteSchema = new mongoose.Schema({
  senderId: String, // Dog _id
  recipientId: String, // Dog _id
  status: String,
  creationDate: Date,
  eventId: String,
});

const EventInviteModel = mongoose.model('Event_Invite', eventInviteSchema);

module.exports = EventInviteModel;
