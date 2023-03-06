const ExampleModel = require('../models/ExampleModel');
const debug = require('../utils/debug');

module.exports = {
  getHandler(req, res) {
    res.status(200).send('Hello World!');
  },

  postHandler(req, res) {
    debug.logRequest(req);
    ExampleModel.findOneAndUpdate(req.query, req.body, { upsert: true })
      .exec()
      .then((result) => {
        // console.log('result: ', result);
        res.status(200).send(result);
      })
      .catch((err) => {
        console.error("Couldn't update collection: ", err);
        res.status(400).send(err);
      });
  },
};
