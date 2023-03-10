const DogRouter = require('express').Router();
const controller = require('../controllers').dog;

DogRouter.post('/', controller.registerDog);
DogRouter.get('/:_id', controller.getDogs);
DogRouter.get('/:_id/one', controller.getDogById);
DogRouter.patch('/:_id', controller.updateDogById);
DogRouter.patch('/:_id/profile', controller.updateDogProfile);
DogRouter.delete('/:_id', controller.deleteDogById);

module.exports = DogRouter;
