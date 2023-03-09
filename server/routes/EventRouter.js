const EventRouter = require('express').Router();
const controller = require('../controllers').event;

EventRouter.post('/', controller.createEvent);
EventRouter.get('/:eventId', controller.getEventById);
EventRouter.get('/dog/:dogId', controller.getEventsByDogId);
EventRouter.patch('/:eventId', controller.updateEventById);
EventRouter.patch('/attend/:eventId/:dogId', controller.attendEvent);
EventRouter.patch('/reject/:eventId/:dogId', controller.rejectEvent);
EventRouter.delete('/:eventId', controller.deleteEventById);

module.exports = EventRouter;
