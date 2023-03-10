const DogModel = require('../models/DogModel');
const debug = require('../utils/debug');

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
    const dogInfo = JSON.parse(JSON.stringify(req.body));
    delete dogInfo.dogId;
    console.log(dogInfo);
    const newDog = DogModel.findOneAndUpdate({_id: req.body.dogId}, dogFormatter(dogInfo))
    // console.log(newDog)
    // newDog.save()
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
    const distance = (lat1,
      lat2, lon1, lon2) => {

    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 =  lon1 * Math.PI / 180;
    lon2 = lon2 * Math.PI / 180;
    lat1 = lat1 * Math.PI / 180;
    lat2 = lat2 * Math.PI / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a = Math.pow(Math.sin(dlat / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(dlon / 2),2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 3956;

    // calculate the result
    return(c * r);
    }
    DogModel.find()
    .exec()
    .then((result) => {
        const currentDog = result.find(dog => dog['id'].toString() === id);
        const currentDogLattitude = currentDog.location.coordinates.lat;
        const currentDogLongitude = currentDog.location.coordinates.lng;
        const calculatedDistance = [];
        let dogsNearMe = result.filter((dog) => {
          if (dog !== currentDog && dog.location !== undefined) {
            let dogLat = dog.location.coordinates.lat || 0;
            let dogLng = dog.location.coordinates.lng || 0;
            let distanceBetween = distance(currentDogLattitude, dogLat, currentDogLongitude, dogLng)
            if (distanceBetween <= dist) {
              calculatedDistance.push(Math.trunc(distanceBetween))
             return dog;
            }
          }
        })
        const resultDogs = dogsNearMe.map((dog, index)=> {
          let modObj = {...dog, _doc: {...dog._doc, distanceFrom: calculatedDistance[index]}}
          return modObj._doc;
        })

        res.status(200).send(resultDogs);
        })
    .catch(err => {
      console.log(err)
    })
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
    DogModel.findById(req.params['_id'])
    .exec()
    .then((result)=> {
      res.status(200).send(result)
    })
    .catch(err => {
      console.log(err)
    })
  },

  /**
   * Updates a single Dog by _id with new information
   *
   * Expects: body containing updated dog information
   *
   * TODO: Implement
   */
  updateDogById(req, res) {
    const updateObj = {pendingDogs: req.body.pendingDogs};
    DogModel.findByIdAndUpdate(req.params['_id'], updateObj)
    .exec()
    .then((result)=>{
      res.status(200).send(result);
    })


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
