const DogModel = require('../models/DogModel');
const FriendInviteModel = require('../models/FriendInviteModel');
const debug = require('../utils/debug');

module.exports = {
  async sendFriendInvite(req, res) {
    const { senderId, recipientId } = req.body;
    const newFriendInvite = new FriendInviteModel({
      senderId,
      recipientId,
      status: 'pending',
      creationDate: new Date(),
    });
    try {
      await newFriendInvite.save();
      res.status(201).json(newFriendInvite);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to create friend invite.' });
    }
  },

  async getFriendInvitesById(req, res) {
    const { recipientId } = req.params;
    try {
      const friendInvites = await FriendInviteModel.find({
        recipientId,
      }).sort('-creationDate');
      res.json(friendInvites);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to get friend invites.' });
    }
  },

  async updateFriendInviteById(req, res) {
    const { _id } = req.params;
    const { status } = req.body;
    try {
      const friendInvite = await FriendInviteModel.findByIdAndUpdate(
        _id,
        { status },
        { new: true }
      );
      res.json(friendInvite);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to update friend invite.' });
    }
  },
};
