const crypto = require('crypto');
const UserModel = require('../models/UserModel');
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
    // newUser.save()
        // .then((result) => console.log(result))
        // .catch((e) => console.log(e))
    // throw new Error('registerUser not implemented yet!');
  },

  validateUser(req, res) {
    UserModel.findOne({email: req.body.email})
      .then((user) => {
        if (!user) {
          // return user not found
        } else {
          const hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64, `sha512`).toString(`hex`);
          if (hash === user.password) {
            // allow user to log in
          } else {
            // return incorrect password
          }
        }
      })
      .catch((e) => {console.log(e)})
        // const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, `sha512`).toString(`hex`);
        // return this.hash === hash;
      };
    // throw new Error('getUser not implemented yet!');
  },
}