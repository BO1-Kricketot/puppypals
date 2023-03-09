/* eslint-disable no-underscore-dangle */
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const ProxyData = require('./ProxyData');
const DogModel = require('../models/DogModel');
const EventModel = require('../models/EventModel');

const { DB_HOST } = process.env;
const DB_COLL = 'puppypals_db';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomItem(array) {
  return array[getRandomInt(array.length)];
}

// gets a random date a week in advance but no more than a month in advance
function getRandomDate() {
  const now = new Date();
  const weekInMs = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  const monthInMs = 30 * 24 * 60 * 60 * 1000; // 1 month in milliseconds
  const randomDate = new Date(
    now.getTime() + weekInMs + Math.random() * (monthInMs - weekInMs),
  );
  return randomDate.toISOString();
}

function generateRandomEvent() {
  const { eventNames, eventDescriptions, locations } = ProxyData;
  return {
    title: getRandomItem(eventNames),
    datetime: getRandomDate(),
    description: getRandomItem(eventDescriptions),
    location: getRandomItem(locations),
  };
}

// generates random num events with 3 random invitees
// ! invitees may include the host dog
// attendees are omitted
async function main(numEvents) {
  await mongoose
    .connect(`mongodb://${DB_HOST}/${DB_COLL}`)
    .then(() => console.log('connected'));
  const dogs = await DogModel.find();
  const promises = [];
  for (let i = 0; i < numEvents; i += 1) {
    const {
      _id: dogId,
      name,
      mainImageUrl: mainImgPath,
    } = dogs[getRandomInt(dogs.length)];
    const invitees = [
      getRandomItem(dogs)._id,
      getRandomItem(dogs)._id,
      getRandomItem(dogs)._id,
    ];
    const event = {
      ...generateRandomEvent(),
      hostMeta: {
        dogId,
        name,
        mainImgPath,
      },
      invitees,
    };
    promises.push(EventModel.create(event));
  }
  Promise.all(promises).then(() => console.log('done!'));
}

main(5);
