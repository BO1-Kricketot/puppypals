const DogRouter = require('express').Router();
const controller = require('../controllers').dog;

DogRouter.post('/', controller.registerDog);
DogRouter.get('/:_id', controller.getDogById);
DogRouter.get('/', controller.getNearbyDogs); // no query
DogRouter.get('/', controller.getDogsWithFilter); // query by distance, etc.
DogRouter.patch('/:_id', controller.updateDogById);
DogRouter.delete('/:_id', controller.deleteDogById);

module.exports = DogRouter;
