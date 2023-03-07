const DogModel = require('../models/DogModel');
const EventModel = require('../models/EventModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Event document
   *
   * Expects: body containing Event information
   *
   * TODO: Implement
   */
  createEvent(req, res) {
    throw new Error('createEvent not implemented yet!');
  },

  /**
   * Returns one Event by (Event)_id
   *
   * Query: _id - Event _id
   * Example: /events?_id=222
   *
   * TODO: Implement
   */
  getEventById(req, res) {
    throw new Error('getEventById not implemented yet!');
  },

  /**
   * Returns Events by (Dog)_id and query (invited | attending)
   *
   * Query: filter - invited | attending
   * Route: /events/:dogId?query=value
   * Example: /events/123?filter=invited
   *
   * TODO: Implement
   */
  getEventsByDogId(req, res) {
    throw new Error('getEventsByDogId not implemented yet!');
  },

  /**
   * Updates one Event by (Event)_id with new information
   *
   * Query: _id - Event _id
   * Expects: body containing new Event information
   * Example: /events?_id=222
   *
   * TODO: Implement
   */
  updateEventById(req, res) {
    throw new Error('updateEventById not implemented yet!');
  },

  /**
   * Deletes one Event by (Event)_id
   *
   * Query: _id - Event _id
   * Example: /events?_id=222
   *
   * TODO: Implement
   */
  deleteEventById(req, res) {
    throw new Error('deleteEventById not implemented yet!');
  },
};
