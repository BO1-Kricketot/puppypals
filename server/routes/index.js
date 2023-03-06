const router = require('express').Router();
const ExampleRouter = require('./ExampleRouter');

router.use('/example', ExampleRouter);

module.exports = router;
