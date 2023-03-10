/* eslint-disable no-console -- seed script not part of app */
require('dotenv').config();
const mongoose = require('mongoose');
const ProxyData = require('./ProxyData');
const ReadyData = require('./ReadyData');
const DogModel = require('../models/DogModel');
const formatDog = require('../utils/formatDog');

const { DB_HOST } = process.env;
const DB_COLL = 'puppypals_db';

mongoose.connect(`mongodb://${DB_HOST}/${DB_COLL}`);

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomItem(array) {
  return array[getRandomInt(array.length)];
}

function generateRandomDog() {
  const {
    ownerNames,
    dogNames,
    dogBreeds,
    bios,
    locations,
    dogImages,
    ownerImages,
  } = ProxyData;

  const numImages = getRandomInt(4);
  const images = [];
  for (let i = 0; i < numImages; i += 1) {
    images.push(getRandomItem(dogImages));
  }

  return {
    name: getRandomItem(dogNames),
    breed: getRandomItem(dogBreeds),
    mainImage: getRandomItem(dogImages),
    images,
    energy: getRandomItem(['low', 'medium', 'high']),
    size: getRandomItem(['small', 'medium', 'large']),
    isDogFriendly: getRandomItem([true, false]),
    isHumanFriendly: getRandomItem([true, false]),
    bio: getRandomItem(bios),
    location: getRandomItem(locations),
    owner: {
      name: getRandomItem(ownerNames),
      image: getRandomItem(ownerImages),
    },
  };
}

async function registerGeneratedDog() {
  const { _id } = await DogModel.create({});
  const dog = generateRandomDog();
  await DogModel.findOneAndUpdate({ _id }, await formatDog(dog));
}

async function main(size) {
  console.log(`seeding ${size} generated dogs...`);
  const promises = [];
  for (let i = 0; i < size; i += 1) {
    promises.push(registerGeneratedDog());
  }
  if (ReadyData.length) {
    console.log(`also seeding ${ReadyData?.length} ready made dogs...`);
    for (let i = 0; i < ReadyData.length; i += 1) {
      promises.push(DogModel.create(formatDog(ReadyData[i])));
    }
  }
  await Promise.all(promises);
  console.log('done! press ctrl+c to exit.');
}

main(20);
