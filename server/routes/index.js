const router = require('express').Router();
const ExampleRouter = require('./ExampleRouter');
const DogRouter = require('./DogRouter');
const FriendInviteRouter = require('./FriendInviteRouter');

router.use('/examples', ExampleRouter);
router.use('/dogs', DogRouter);
router.use('/finvites', FriendInviteRouter);

module.exports = router;
