const router = require('express').Router();
const ExampleRouter = require('./ExampleRouter');
const DogRouter = require('./DogRouter');

router.use('/examples', ExampleRouter);
router.use('/dogs', DogRouter);

module.exports = router;
