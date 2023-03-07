const DogModel = require('../models/DogModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Dog document
   *
   * Expects: body containing Dog information
   *
   * TODO: Implement
   */
  registerDog(req, res) {
    throw new Error('registerDog not implemented yet!');
  },

  /**
   * Returns one Dog by _id
   *
   * Route: /dogs/123
   *
   * TODO: Implement
   */
  getDogById(req, res) {
    throw new Error('getDogById not implemented yet!');
  },

  /**
   * Returns a list of Dogs that a given user has yet to interact with within a
   * 50mi radius, sorted by distance descending
   *
   * Route: /dogs?lat=40.7418&long=-73.9893
   *
   * TODO: Implement
   */
  getNearbyDogs(req, res) {
    throw new Error('getNearbyDogs not implemented yet!');
  },

  /**
   * Returns a list of Dogs that a given user has yet to interract with AND is
   * filtered by either: distance (< default 50 mi), size, dog friendliness, and
   * human friendliness
   *
   * Route: /dogs/id=123&dist=25 OR /dogs/id=123&size=small
   *
   * TODO: Implement
   */
  getDogsWithFilter(req, res) {
    throw new Error('getDogsWithFilter not implemented yet!');
  },

  /**
   * Updates a single Dog by _id with new information
   *
   * Expects: body containing updated/new dog information
   *
   * TODO: Implement
   */
  updateDogById(req, res) {
    throw new Error('updateDogById not implemented yet!');
  },

  /**
   * Deletes a single Dog by _id
   *
   * TODO: Implement
   */
  deleteDogById(req, res) {
    throw new Error('deleteDogById not implemented yet!');
  },
};
