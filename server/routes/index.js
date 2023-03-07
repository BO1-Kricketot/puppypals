const router = require('express').Router();
const ExampleRouter = require('./ExampleRouter');
const DogRouter = require('./DogRouter');
const FriendInviteRouter = require('./FriendInviteRouter');
const MessagesRouter = require('./MessagesRouter');
const EventInviteRouter = require('./EventInviteRouter');

router.use('/examples', ExampleRouter);
router.use('/dogs', DogRouter);
router.use('/finvites', FriendInviteRouter);
router.use('/messages', MessagesRouter);
router.use('/einvites', EventInviteRouter);

module.exports = router;
