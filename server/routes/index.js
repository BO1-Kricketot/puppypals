const router = require('express').Router();
const DogRouter = require('./DogRouter');
const FriendInviteRouter = require('./FriendInviteRouter');
const MessagesRouter = require('./MessagesRouter');
const EventInviteRouter = require('./EventInviteRouter');
const EventRouter = require('./EventRouter');

router.use('/dogs', DogRouter);
router.use('/finvites', FriendInviteRouter);
router.use('/messages', MessagesRouter);
router.use('/einvites', EventInviteRouter);
router.use('/events', EventRouter);

module.exports = router;
