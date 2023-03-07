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
   * Example: /events/222
   *
   * TODO: Implement
   */
  getEventById(req, res) {
    throw new Error('getEventById not implemented yet!');
  },

  /**
   * Returns Events by (Dog)_id and query (invited | attending). 404 if no query
   * is provided. Find dogId $in filter.
   *
   * Query: filter - invited | attending
   * Route: /events/dog/:dogId?query=value
   * Example: /events/dog/123?filter=invited
   *
   * TODO: Implement
   */
  getEventsByDogId(req, res) {
    throw new Error('getEventsByDogId not implemented yet!');
  },

  /**
   * Updates one Event by (Event)_id with new information
   *
   * Expects: body containing new Event information
   *
   * TODO: Implement
   */
  updateEventById(req, res) {
    throw new Error('updateEventById not implemented yet!');
  },

  /**
   * Deletes one Event by (Event)_id
   *
   * TODO: Implement
   */
  deleteEventById(req, res) {
    throw new Error('deleteEventById not implemented yet!');
  },
};
