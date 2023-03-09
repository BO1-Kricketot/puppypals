const crypto = require('crypto');
const UserModel = require('../models/UserModel');
const DogModel = require('../models/DogModel');
const debug = require('../utils/debug');

module.exports = {

  registerUser(req, res) {
    // console.log(req)
    const newUser = new UserModel;
    const newDog = new DogModel;
    newUser.userId = newDog._id;
    newUser.email = req.body.email;
    const salt = crypto.randomBytes(16).toString('hex');
    const newPassword = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);
    newUser.salt = salt;
    newUser.password = newPassword;
    res.send('asdf')
    // newDog.save()
    // newUser.save()
    //   .then((result) => console.log(result))
    //   .catch((e) => console.log(e))
    // throw new Error('registerUser not implemented yet!');
  },

  validateUser(req, res) {
    UserModel.findOne({email: req.body.email})
      .then((user) => {
        if (!user) {
          res.status(400).send({
            message : "User not found."
        })
        } else {
          const hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, `sha512`).toString(`hex`);
          if (hash === user.password) {
            res.status(201).send({
              message : "User Logged In",
          })
          } else {
            res.status(400).send({
              message : "Wrong Password"
          });
          }
        }
      })
      .catch((e) => {console.log(e)})
    // throw new Error('getUser not implemented yet!');
  },
}