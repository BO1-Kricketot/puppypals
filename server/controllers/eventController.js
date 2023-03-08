const DogModel = require('../models/DogModel');
const EventModel = require('../models/EventModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Event document
   * Expects: body containing Event information
   */
  createEvent(req, res) {
    const event = req.body;
    return EventModel.create(event)
      .then(result => res.status(201).send(result))
      .catch(err => res.status(500).send(err));
  },

  /**
   * Returns one Event by (Event)_id
   *
   * Query: _id - Event _id
   * Example: /events/222
   */
  getEventById(req, res) {
    const { eventId } = req.params;

    return EventModel.findOne({_id: eventId})
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
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
   * /events/dog/123?filter=invited
   * req.query = { filter: invited }
   * req.params = { dogId: 123 }
   */

    // query for the dog
    // get their pendingEvents OR attendingEvents array
    // query for those events
    // return those events
  getEventsByDogId(req, res) {
    const { dogId } = req.params;
    const { filter } = req.query;

    if (!filter) {
      return res.status(404).send('No query provided');
    }

    return DogModel.findOne({ _id: dogId })
      .exec()
      .then((dog) => {
        let events;

        if (filter === 'invited') {
          events = dog.eventsPending;
        } else if (filter === 'attending') {
          events = dog.eventsAttending;
        }

        EventModel.find({ _id: { $in: events } })
          .exec()
          .then((result) => res.status(200).send(result))
          .catch(err => res.status(500).send(err));
      })
      .catch((err) => res.status(500).send(err));
  },

  /**
   * Updates one Event by (Event)_id with new information
   * Expects: body containing new Event information
   */
  updateEventById(req, res) {
    const { eventId } = req.params;
    const update = req.body;

    return EventModel.findOneAndUpdate({ _id: eventId }, update, { new: true })
      .exec()
      .then((result) => res.status(204).send(result))
      .catch((err) => res.status(500).send(err));
  },

  /**
   * Deletes one Event by (Event)_id
   */
  deleteEventById(req, res) {
    const { eventId } = req.params;
    return EventModel.findOneAndDelete({ _id: eventId })
      .exec()
      .then(() => res.status(204).send('Event deleted'))
      .catch((err) => res.status(500).send(err));
  },
};
