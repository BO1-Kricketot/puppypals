const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  _id: Number,
  userId: Number,
  body: String,
  timestamp: Date,
  reactions: [String],
});

const messageLogSchema = new mongoose.Schema({
  _id: Number,
  members: [Number, Number],
  messages: [messageSchema],
});

const MessagesModel = mongoose.model('Message_Log', messageLogSchema);

module.exports = MessagesModel;
