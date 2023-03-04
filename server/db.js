require('dotenv').config();
const mongoose = require('mongoose');

const {DB_HOST} = process.env;
const DB_COLL = 'puppypals_db';

async function main() {
  return mongoose.connect(`mongodb://${DB_HOST}/${DB_COLL}`);
}

const db = main()
  .then(() => console.log(`Connected to ${DB_HOST}/${DB_COLL}`))
  .catch((err) => console.error(err));

module.exports = db;
