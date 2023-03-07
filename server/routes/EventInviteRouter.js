const EventInviteRouter = require('express').Router();
const controller = require('../controllers').eventInvite;

EventInviteRouter.post('/', controller.sendEventInvite);
EventInviteRouter.get('/:recipientId', controller.getEventInvitesById);
EventInviteRouter.patch('/', controller.updateEventInviteById);

module.exports = EventInviteRouter;
