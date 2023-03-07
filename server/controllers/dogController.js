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
   * Returns a list of Dogs that a given user has yet to interact with within a
   * 50mi radius, sorted by distance descending. Get the list of dogs that user
   * has interacted with and the user's coordinates to filter out dogs that the
   * user has interacted with and dogs outside 50mi radius.
   *
   * Optionally has query params to add one additional filter (size, dfriendly,
   * hfriendly), or reduce the distance radius. 404 if more than one filter is
   * requested.
   *
   * Query: _id - Dog (user) _id
   *        dist - max distance from user
   *        size - small | medium | large
   *        dfriendly - true | false
   *        hfriendly - true | false
   * Example: /dogs/123?dist=25 | /dogs/123?size=small
   *
   * TODO: Implement
   */
  getDogs(req, res) {
    throw new Error('getDogs not implemented yet!');
  },

  /**
   * Returns one Dog by _id
   *
   * Route: /dogs/:_id/one
   * Example: /dogs/123/one
   *
   * TODO: Implement
   */
  getDogById(req, res) {
    throw new Error('getDogById not implemented yet!');
  },

  /**
   * Updates a single Dog by _id with new information
   *
   * Expects: body containing updated dog information
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