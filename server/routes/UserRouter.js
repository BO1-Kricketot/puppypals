const UserRouter = require('express').Router();
const controller = require('../controllers').user;

UserRouter.post('/signup', controller.registerUser);
UserRouter.get('/login', controller.getUser);

module.exports = UserRouter;