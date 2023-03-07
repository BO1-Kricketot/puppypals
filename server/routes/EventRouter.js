const EventRouter = require('express').Router();
const controller = require('../controllers').event;

EventRouter.post('/', controller.createEvent);
EventRouter.get('/', controller.getEventById);
EventRouter.get('/:dogId', controller.getEventsByDogId);
EventRouter.patch('/', controller.updateEventById);
EventRouter.delete('/', controller.deleteEventById);

module.exports = EventRouter;
