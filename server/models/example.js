const mongoose = require('mongoose');

const exampleSchema = new mongoose.Schema({
  _id: String,
  column1: String,
  column2: Number,
  column3: Boolean,
});

const ExampleModel = mongoose.model('Example', exampleSchema);

module.exports = ExampleModel;
