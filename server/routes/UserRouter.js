const UserRouter = require('express').Router();
const controller = require('../controllers').user;

UserRouter.post('/signup', controller.registerUser);
UserRouter.post('/login', controller.validateUser);

module.exports = UserRouter;