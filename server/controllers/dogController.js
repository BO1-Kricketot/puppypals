const DogModel = require('../models/DogModel');
// maybe need to import locationSchema?
const dogFormatter = require('../utils/formatDog');
const debug = require('../utils/debug');

module.exports = {
  registerDog(req, res) {
    const dogInfo = JSON.parse(JSON.stringify(req.body));
    delete dogInfo.dogId;
    console.log(dogInfo);
    const newDog = DogModel.findOneAndUpdate({_id: req.body.dogId}, dogFormatter(dogInfo))
    console.log(newDog)
    newDog.save()
  },


  async getDogs(req, res) {
    const userId = req.params._id;
    const user = await DogModel.findById(userId).populate('pendingDogs').populate('rejectedDogs').populate('location');
    const userLoc = user.location.coordinates;
    const maxDist = parseInt(req.query.dist || 50);
    const filter = {};
    if (req.query.size) {
      filter.size = req.query.size;
    }
    if (req.query.dfriendly) {
      filter.isDogFriendly = req.query.dfriendly === 'true';
    }
    if (req.query.hfriendly) {
      filter.isHumanFriendly = req.query.hfriendly === 'true';
    }
    const dogs = await DogModel.find(filter)
      .where('_id')
      .nin([...user.pendingDogs.map((d) => d._id), ...user.rejectedDogs.map((d) => d._id), user._id])
      .where('location.coordinates')
      .near({
        center: { latitude: userLoc[1], longitude: userLoc[0] },
        maxDistance: maxDist * 1609.34,
      })
      .exec();
    const sortedDogs = geolib.orderByDistance({ latitude: userLoc[1], longitude: userLoc[0] }, dogs);
    res.status(200).send(sortedDogs);
  },

  async getDogById(req, res) {
    try {
      const dogId = req.params._id;
      const dog = await DogModel.findById(dogId);
      res.status(200).send(dog);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },

  async updateDogById(req, res) {
    try {
      const dogId = req.params._id;
      const updatedDog = await DogModel.findOneAndUpdate(
        { _id: dogId },
        req.body,
        { new: true }
      );
      res.status(200).send(updatedDog);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
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

