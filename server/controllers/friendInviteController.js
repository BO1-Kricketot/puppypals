const DogModel = require('../models/DogModel');
const FriendInviteModel = require('../models/FriendInviteModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Friend_Invite document
   *
   * Expects: body containing senderId and recipientId
   *
   * TODO: Implement
   */
  sendFriendInvite(req, res) {
    throw new Error('sendFriendInvite not implemented yet!');
  },

  /**
   * Returns all Friend_Invites where _id is recipientId, return the results
   * sorted by date descending
   *
   * Route: /finvites/123
   *
   * TODO: Implement
   */
  getFriendInvitesById(req, res) {
    throw new Error('getFriendInvitesById not implemented yet!');
  },
};
