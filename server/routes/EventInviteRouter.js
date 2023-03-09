const EventInviteRouter = require('express').Router();
const controller = require('../controllers').eventInvite;

EventInviteRouter.post('/', controller.sendEventInvite);
EventInviteRouter.get('/:recipientId', controller.getEventInvitesById);

module.exports = EventInviteRouter;
