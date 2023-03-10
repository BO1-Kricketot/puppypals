const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,
  body: String,
  timestamp: Date,
  reactions: { type: [String], default: undefined },
});

const messageLogSchema = new mongoose.Schema({
  members: { type: [String, String], default: undefined },
  messages: [messageSchema],
});

const MessagesModel = mongoose.model('Message_Log', messageLogSchema);

module.exports = MessagesModel;
