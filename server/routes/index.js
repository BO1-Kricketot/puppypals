const router = require('express').Router();
const ExampleRouter = require('./ExampleRouter');
const DogRouter = require('./DogRouter');
const FriendInviteRouter = require('./FriendInviteRouter');
const MessagesRouter = require('./MessagesRouter');

router.use('/examples', ExampleRouter);
router.use('/dogs', DogRouter);
router.use('/finvites', FriendInviteRouter);
router.use('/messages', MessagesRouter);

module.exports = router;
