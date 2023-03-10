const DogModel = require('../models/DogModel');
const dogFormatter = require('../utils/formatDog');
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
  async registerDog(req, res) {
    const dogInfo = JSON.parse(JSON.stringify(req.body));
    delete dogInfo.dogId;
    // console.log(dogInfo);
    DogModel.findOneAndUpdate(
      { _id: req.body.dogId },
      await dogFormatter(dogInfo),
    )
      .then((result) => res.status(200).send(result))
      .catch((e) => console.log(e));
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
    const id = req.params['_id'];
    const dist = req.query.dist || 50;
    const distance = (lat1, lat2, lon1, lon2) => {
      // The math module contains a function
      // named toRadians which converts from
      // degrees to radians.
      lon1 = (lon1 * Math.PI) / 180;
      lon2 = (lon2 * Math.PI) / 180;
      lat1 = (lat1 * Math.PI) / 180;
      lat2 = (lat2 * Math.PI) / 180;

      // Haversine formula
      let dlon = lon2 - lon1;
      let dlat = lat2 - lat1;
      let a =
        Math.pow(Math.sin(dlat / 2), 2) +
        Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

      let c = 2 * Math.asin(Math.sqrt(a));

      // Radius of earth in kilometers. Use 3956
      // for miles
      let r = 3956;

      // calculate the result
      return c * r;
    };
    DogModel.find()
      .exec()
      .then((result) => {
        const currentDog = result.find((dog) => dog['id'].toString() === id);
        const currentDogLattitude = currentDog.location.coordinates.lat;
        const currentDogLongitude = currentDog.location.coordinates.lng;
        const calculatedDistance = [];
        let dogsNearMe = result.filter((dog) => {
          if (dog !== currentDog && dog.location !== undefined) {
            let dogLat = dog.location.coordinates.lat || 0;
            let dogLng = dog.location.coordinates.lng || 0;
            let distanceBetween = distance(
              currentDogLattitude,
              dogLat,
              currentDogLongitude,
              dogLng,
            );
            if (distanceBetween <= dist) {
              calculatedDistance.push(Math.trunc(distanceBetween));
              return dog;
            }
          }
        });

        const resultDogs = dogsNearMe.map((dog, index) => {
          let modObj = {
            ...dog,
            _doc: { ...dog._doc, distanceFrom: calculatedDistance[index] },
          };
          return modObj._doc;
        });
        if (
          Object.keys(req.query).length > 0 &&
          Object.keys(req.query)[0] !== dist
        ) {
          // console.log(Object.keys(req.query)[0])
          const filterProp = Object.keys(req.query)[0];
          const filterValue = req.query[filterProp];
          // console.log(filterValue)
          const filteredResult = resultDogs.filter((dog) => {
            // console.log(filterProp)
            // console.log(dog[filterProp])
            // console.log(filterValue)
            // console.log(typeof filterValue)
            console.log(
              dog[filterProp],
              filterValue,
              typeof filterValue,
              typeof dog[filterProp],
            );
            return dog[filterProp] === filterValue;
          });
          console.log(filteredResult);

          res.status(200).send(filteredResult);
        } else {
          // res.status(200).send(resultDogs);
          res.status(200).send(resultDogs);
        }

        // console.log(Object.keys(req.query))
      })
      .catch((err) => {
        console.log(err);
      });
    // :_id
    // get pendingDogs rejectedDogs from that _id (user)
    // get location (user)
    // DogModel .find all dogs
    // filter out pending dogs rejected dogs and dogs outside radius
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
  updateDogById(req, res) {
    let updateObj = {};
    if (req.body.pendingDogs) {
      updateObj = { pendingDogs: req.body.pendingDogs };
    } else if (req.body.friendsList) {
      updateObj = { friendsList: req.body.friendsList };
    }
    DogModel.findByIdAndUpdate(req.params['_id'], updateObj)
      .exec()
      .then((result) => {
        res.status(200).send(result);
      });
  },

  async updateDogProfile(req, res) {
    const id = req.params;
    const update = { ...req.body };
    const isLink = /^https:\/\//g;
    const { mainImageUrl, imageUrls, location } = update;

    if (!isLink.test(mainImageUrl)) {
      const newPic = await api.uploadPhotoNoPrefix(mainImageUrl);
      update.mainImageUrl = newPic;
    }

    const promises = [];
    const urls = [];

    imageUrls.forEach((url) => {
      if (!isLink.test(url)) {
        promises.push(api.uploadPhotoNoPrefix(url));
      } else {
        urls.push(url);
      }
    });

    const result = await Promise.all(promises);
    update.imageUrls = urls.concat(result);

    const coordinates = await api.getCoordinates(location);
    location.coordinates = coordinates;

    DogModel.findByIdAndUpdate(id, update)
      .then(() => res.sendStatus(204))
      .catch((err) => {
        console.error(err);
        res.status(500).send(err);
      });
  },

  async deleteDogById(req, res) {
    try {
      const dogId = req.params._id;
      await DogModel.deleteOne({ _id: dogId });
      res.status(204).send();
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
};
