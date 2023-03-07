const EventRouter = require('express').Router();
const controller = require('../controllers').event;

EventRouter.post('/', controller.createEvent);
EventRouter.get('/:_id', controller.getEventById);
EventRouter.get('/dog/:_id', controller.getEventsByDogId);
EventRouter.patch('/:_id', controller.updateEventById);
EventRouter.delete('/:_id', controller.deleteEventById);

module.exports = EventRouter;
