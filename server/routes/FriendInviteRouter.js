const FriendInviteRouter = require('express').Router();
const controller = require('../controllers').friendInvite;

FriendInviteRouter.post('/', controller.sendFriendInvite);
FriendInviteRouter.get('/:recipientId', controller.getFriendInvitesById);

module.exports = FriendInviteRouter;
