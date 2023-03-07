const MessagesRouter = require('express').Router();
const controller = require('../controllers').messages;

MessagesRouter.post('/', controller.createDialogue);
MessagesRouter.post('/:logId', controller.postMessage);
MessagesRouter.get('/', controller.getMessageLogByIds);
MessagesRouter.patch('/:logId/:messageId');

module.exports = MessagesRouter;
