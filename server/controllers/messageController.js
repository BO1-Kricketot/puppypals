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
    const messageLog = new MessagesModel({
      _id: new Date().getTime(),
      members: req.body.members,
      messages: [],
    });
    messageLog.save((err) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error creating message log');
      } else {
        res.status(201).send('Message log created successfully');
      }
    });
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
    const newMessage = {
      _id: new Date().getTime(),
      body: req.body.message.body,
      timestamp: new Date(),
      reactions: [],
    };
    MessagesModel.findByIdAndUpdate(
      req.params._id,
      { $push: { messages: newMessage } },
      (err) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error posting message');
        } else {
          res.status(201).send('Message posted successfully');
        }
      }
    );
  },

  /**
   * Retrieves a Message_Log by its _id
   *
   * Example: /messages/333
   *
   * TODO: Implement
   */
  getMessageLogById(req, res) {
    MessagesModel.findById(req.params._id, (err, messageLog) => {
      if (err) {
        console.log(err);
        res.status(500).send('Error getting message log');
      } else if (!messageLog) {
        res.status(404).send('Message log not found');
      } else {
        res.status(200).json(messageLog);
      }
    });
  },

  /**
   * Retrieves the log of messages between two Dogs by their _id
   *
   * Example: /messages/123/456
   *
   * TODO: Implement
   */
  getMessageLogByDogIds(req, res) {
    MessagesModel.findOne(
      { members: { $all: [req.params.dog1, req.params.dog2] } },
      (err, messageLog) => {
        if (err) {
          console.log(err);
          res.status(500).send('Error getting message log');
        } else if (!messageLog) {
          res.status(404).send('Message log not found');
        } else {
          res.status(200).json(messageLog);
        }
      }
    );
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
    MessagesModel.findOneAndUpdate(
      { _id: req.params.logId, 'messages._id': req.params.messageId },
      { $addToSet: { 'messages.$.reactions': req.body.reaction } },
      (err) => {
        if (err) {
          console.error(err);
          res.status(500).send('Error reacting to message');
        } else {
          res.status(200).send('Reaction added successfully');
        }
      }
    );
  },
};
