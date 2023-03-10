const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const mongoose = require('mongoose');
const DogModel = require('../models/DogModel');
const FriendInviteModel = require('../models/FriendInviteModel');

const { DB_HOST } = process.env;
const DB_COLL = 'puppypals_db';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// gets a random date a week in advance but no more than a month in advance
function getRandomDate() {
  const now = new Date();
  const weekInMs = 7 * 24 * 60 * 60 * 1000; // 1 week in milliseconds
  const monthInMs = 30 * 24 * 60 * 60 * 1000; // 1 month in milliseconds
  const randomDate = new Date(
    now.getTime() - weekInMs + Math.random() * (monthInMs - weekInMs),
  );
  return randomDate.toISOString();
}

function getRandomItem(array) {
  return array[getRandomInt(array.length)];
}

async function generateRandomFriends() {
  const dogs = await DogModel.find();
  const sender = dogs[getRandomInt(dogs.length)];
  let recipient = getRandomItem(dogs);
  // Ensure that the recipient is not the sender
  while (recipient._id === sender._id) {
    recipient = getRandomItem(dogs);
  }
  const statusOptions = ['pending', 'accepted', 'rejected'];
  const status = getRandomItem(statusOptions);
  const creationDate = getRandomDate();
  return {
    senderId: sender._id,
    recipientId: '640aa6430e40837844e598ae',
    status,
    creationDate,
  };
}

async function main(numInvites) {
  await mongoose.connect(`mongodb://${DB_HOST}/${DB_COLL}`);
  const promises = [];
  for (let i = 0; i < numInvites; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const friendInvite = await generateRandomFriends();
    promises.push(FriendInviteModel.create(friendInvite));
  }
  Promise.all(promises).then(() => console.log('done! press ctrl+c to exit'));
}

main(50);