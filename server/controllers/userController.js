const UserModel = require('../models/UserModel');
const crypto = require('crypto');
const debug = require('../utils/debug');

module.exports = {

  registerUser(req, res) {
    // console.log(req)
    const newUser = new UserModel;
    newUser.email = req.body.email;
    // newUser.password = req.body.password;
    const salt = crypto.randomBytes(16).toString('hex');
    const newPassword = crypto.pbkdf2Sync(req.body.password, salt, 1000, 64, `sha512`).toString(`hex`);
    newUser.salt = salt;
    newUser.password = newPassword;
    // res.send('help me')
    // console.log(newUser)
    // newUser.save()
        // .then((result) => console.log(result))
        // .catch((e) => console.log(e))
    // throw new Error('registerUser not implemented yet!');
  },

  getUser(req, res) {
    throw new Error('getUser not implemented yet!');
  },
}