const DogModel = require('../models/DogModel');
const MessagesModel = require('../models/MessageModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Message_Log document given two Dog _ids
   *
   * Expects: body contains [_id, _id] where _id are Dog _ids
   *
   * TODO: Implement
   */
  createDialogue(req, res) {
    throw new Error('createDialogue not implemented yet!');
  },

  /**
   * Pushes a new Message into a Message_Log given a chatroom _id
   *
   * Route: /messages/:logId
   * Expects: body containing message
   * Example: /messages/123
   *
   * TODO: Implement
   */
  postMessage(req, res) {
    throw new Error('postMessage not implemented yet!');
  },

  /**
   * Retrieves the log of messages
   *
   * Expects: query containing id1, id2 -- these ids are Dog _ids
   * Example: /messages?id1=12&id2=23
   *
   * TODO: Implement
   */
  getMessageLogByIds(req, res) {
    throw new Error('getMessageLogById not implemented yet!');
  },

  /**
   * Updates a Message with an emoji react given a logId and messageId
   *
   * Route: /messages/123/1
   * Expects: body containing emoji
   *
   * TODO: Implement
   */
  reactToMessage(req, res) {
    throw new Error('getMessageLogById not implemented yet!');
  },
};
