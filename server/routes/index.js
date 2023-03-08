const router = require('express').Router();
const DogRouter = require('./DogRouter');
const FriendInviteRouter = require('./FriendInviteRouter');
const MessagesRouter = require('./MessagesRouter');
const EventInviteRouter = require('./EventInviteRouter');
const EventRouter = require('./EventRouter');
const UserRouter = require('./UserRouter')

router.use('/dogs', DogRouter);
router.use('/finvites', FriendInviteRouter);
router.use('/messages', MessagesRouter);
router.use('/einvites', EventInviteRouter);
router.use('/events', EventRouter);
router.use('/user', UserRouter);

module.exports = router;
