const DogModel = require('../models/DogModel');
const debug = require('../utils/debug');
const api = require('../api');

module.exports = {
  /**
   * Creates a new Dog document
   * return a Dog _id
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
    // :_id
    // get pendingDogs rejectedDogs from that _id (user)
    // get location (user)
    // DogModel .find all dogs
    // filter out pending dogs rejected dogs and dogs outside radius
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
    const id = req.params;
    DogModel.findById(id)
      .then((profile) => res.status(200).send(profile))
      .catch((err) => res.status(500).send(err));
  },

  /**
   * Updates a single Dog by _id with new information
   *
   * Expects: body containing updated dog information
   *
   * TODO: Implement
   */
  async updateDogById(req, res) {
    const id = req.params;
    const update = req.body;
    const coordinates = await api.getCoordinates(update.location);
    update.location.coordinates = coordinates;

    DogModel.findByIdAndUpdate(id, update)
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(500).send(err));
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
