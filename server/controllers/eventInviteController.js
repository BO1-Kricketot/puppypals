/* eslint-disable no-underscore-dangle */
const DogModel = require('../models/DogModel');
const EventInviteModel = require('../models/EventInviteModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Event_Invite document
   *
   * Expects: body containing senderId and recipientId
   *
   */
  sendEventInvite(req, res) {
    const invitedDogs = req.body.invitees; // array of dog IDs
    const sender = req.body.host_meta._id; // sender dog
    const promises = [];
    for (let i = 0; i < invitedDogs.length; i += 1 ) {
      const dogId = invitedDogs[i];
      promises.push(EventInviteModel.create({ senderId: sender , recipientId: dogId }))
    }
    Promise.all(promises)
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  },

  /**
   * Returns all Event_Invites where _id is recipientId, return the results
   * sorted by date descending
   *
   * Route: /einvites/123
   *
   * TODO: Implement
   */
  getEventInvitesById(req, res) {
    // (a,b) => b.creationDate - a.creationDate
    EventInviteModel.find({recipientId: req.params['recipientId']}).sort({creationDate: -1})
    .exec()
    .then((result) => {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  },

  /**
   * Updates an Event_Invite by _id reflecting new status
   *
   * Route: /einvites/111
   * Expects: body containing new status
   *
   * TODO: Implement
   */
  updateEventInviteById(req, res) {
    throw new Error('updateEventInviteById not implemented yet!');
  },
};
