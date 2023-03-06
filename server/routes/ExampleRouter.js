const ExampleRouter = require('express').Router();
const controller = require('../controllers').example;

ExampleRouter.get('/', controller.getHandler);
ExampleRouter.post('/', controller.postHandler);

module.exports = ExampleRouter;
