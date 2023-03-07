const MessagesRouter = require('express').Router();
const controller = require('../controllers').messages;

MessagesRouter.post('/', controller.createDialogue);
MessagesRouter.post('/:_id', controller.postMessage);
MessagesRouter.get('/:_id', controller.getMessageLogById);
MessagesRouter.get('/:dog1/:dog2', controller.getMessageLogByDogIds);
MessagesRouter.patch('/:logId/:messageId', controller.reactToMessage);

module.exports = MessagesRouter;
