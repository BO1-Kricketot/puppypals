const EventModel = require('../models/EventModel');
const api = require('../api');

module.exports = {
  /**
   * Creates a new Event document
   * Expects: body containing Event information
   */
  async createEvent(req, res) {
    const event = req.body;
    event.location = {
      ...event.location,
      coordinates: await api.getCoordinates(event.location),
    };
    console.log('check event', event);
    return EventModel.create(event)
      .then((result) => {
        console.log(result);
        res.status(201).send(result);
      })
      .catch((err) => res.status(500).send(err));
  },

  /**
   * Returns one Event by (Event)_id
   *
   * Query: _id - Event _id
   * Example: /events/222
   */
  getEventById(req, res) {
    const { eventId } = req.params;

    return EventModel.findOne({ _id: eventId })
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

  getAttendingEventsByDogId(req, res) {
    const { dogId } = req.params;

    return EventModel.find({ attendees: dogId })
      .exec()
      .then((result) => {
        // const filtered = result.map((event) => event.attendees.includes(dogId));
        res.status(200).send(result);
      })
      .catch((err) => res.status(500).send(err));
  },

  getInvitedEventsByDogId(req, res) {
    const { dogId } = req.params;

    return EventModel.find({ invitees: dogId })
      .exec()
      .then((result) => {
        res.status(200).send(result);
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
   * removes dog from event's invitees and adds it to the event's attendees
   */
  async attendEvent(req, res) {
    try {
      const { eventId, dogId } = req.params;
      const event = await EventModel.findById({ _id: eventId }).exec();
      event.invitees.splice(event.invitees.indexOf(dogId), 1);
      event.attendees.push(dogId);
      const results = await EventModel.findOneAndUpdate(
        { _id: eventId },
        event,
      ).exec();
      res.status(200).send(results);
    } catch {
      res.sendStatus(404);
    }
  },

  /**
   * removes dog from event's invitees
   */
  async rejectEvent(req, res) {
    try {
      const { eventId, dogId } = req.params;
      const event = await EventModel.findById({ _id: eventId }).exec();
      event.invitees.push(dogId);
      event.invitees.splice(event.invitees.indexOf(dogId), 1);
      const results = await EventModel.findOneAndUpdate(
        { _id: eventId },
        event,
      ).exec();
      res.status(200).send(results);
    } catch {
      res.sendStatus(404);
    }
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
