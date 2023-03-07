const DogModel = require('../models/DogModel');
const EventInviteModel = require('../models/EventInviteModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Event_Invite document
   *
   * Expects: body containing senderId and recipientId
   *
   * TODO: Implement
   */
  sendEventInvite(req, res) {
    throw new Error('sendEventInvite not implemented yet!');
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
    throw new Error('getEventInvitesById not implemented yet!');
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
