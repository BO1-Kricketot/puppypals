const DogModel = require('../models/DogModel');
const MessagesModel = require('../models/MessageModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Message_Log document given two Dog _ids
   * returns the _id of the message log
   *
   * Expects: body contains [_id, _id] where _id are Dog _ids
   *
   * TODO: Implement
   */
  createDialogue(req, res) {
    throw new Error('createDialogue not implemented yet!');
  },

  /**
   * Creates a new message and push into a Message_Log given a Messages _id
   *
   * Route: /messages/:_id
   * Expects: body containing message
   * Example: /messages/333
   *
   * TODO: Implement
   */
  postMessage(req, res) {
    throw new Error('postMessage not implemented yet!');
  },

  /**
   * Retrieves a Message_Log by its _id
   *
   * Example: /messages/333
   *
   * TODO: Implement
   */
  getMessageLogById(req, res) {
    throw new Error('getMessageLogById not implemented yet!');
  },

  /**
   * Retrieves the log of messages between two Dogs by their _id
   *
   * Example: /messages/123/456
   *
   * TODO: Implement
   */
  getMessageLogByDogIds(req, res) {
    throw new Error('getMessageLogByDogIds not implemented yet!');
  },

  /**
   * Updates a Message with an emoji react given a Message_Log _id and
   * Message _id
   *
   * Route: /messages/123/1
   * Expects: body containing emoji
   *
   * TODO: Implement
   */
  reactToMessage(req, res) {
    throw new Error('reactToMessage not implemented yet!');
  },
};
