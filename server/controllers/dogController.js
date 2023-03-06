const DogModel = require('../models/DogModel');
const debug = require('../utils/debug');

module.exports = {
  /**
   * Creates a new Dog document
   *
   * TODO: Implement
   */
  registerDog(req, res) {
    throw new Error('registerDog not implemented yet!');
  },

  /**
   * Returns one Dog by _id
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
   * @param {location} - the location of the user
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
   * TODO: Implement
   */
  getDogsWithFilter(req, res) {
    throw new Error('getDogsWithFilter not implemented yet!');
  },

  /**
   * Updates a single Dog by _id with new information
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
