const DogRouter = require('express').Router();
const controller = require('../controllers').dog;

DogRouter.post('/', controller.registerDog);
DogRouter.get('/:_id', controller.getDogById);
DogRouter.get('/', controller.getNearbyDogs);
DogRouter.get('/', controller.getDogsWithFilter);
DogRouter.patch('/:_id', controller.updateDogById);
DogRouter.delete('/:_id', controller.deleteDogById);

module.exports = DogRouter;
