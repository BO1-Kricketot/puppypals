const DogRouter = require('express').Router();
const controller = require('../controllers').dog;

DogRouter.post('/', controller.registerDog);
DogRouter.get('/:_id', controller.getDogById);
DogRouter.get('/', controller.getNearbyDogs); // /dogs?lat=40.7418&long=-73.9893
DogRouter.get('/', controller.getDogsWithFilter); // /dogs?user=_id&dist=25
DogRouter.patch('/:_id', controller.updateDogById);
DogRouter.delete('/:_id', controller.deleteDogById);

module.exports = DogRouter;
