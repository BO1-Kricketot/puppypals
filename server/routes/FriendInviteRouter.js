const FriendInviteRouter = require('express').Router();
const controller = require('../controllers').friendInvite;

FriendInviteRouter.post('/', controller.sendFriendInvite);
FriendInviteRouter.get('/:recipientId', controller.getFriendInvitesById);
FriendInviteRouter.patch('/:_id', controller.updateFriendInviteById);

module.exports = FriendInviteRouter;
