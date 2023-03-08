/* eslint-disable no-unused-vars */
const api = require('../api');

const dogTemplate = {
  name: 'String',
  breed: 'String',
  mainImage: 'base64String',
  images: ['base64String'],
  energy: 'low', // low, medium, high
  size: 'small', // small, medium, large
  isDogFriendly: true, // or false
  isHumanFriendly: true, // or false
  bio: 'String',
  location: {
    address1: 'String',
    address2: 'String',
    city: 'String',
    state: 'String',
    postalCode: 'String',
  },
  owner: {
    name: 'String',
    image: 'String',
  },
};

/**
 * To be used to generate a dog fitting the DogModel given a submitted dog form.
 * Should probably be used in create/update methods.
 *
 * @param {object} dog - see dogTemplate
 * @returns a dog object that matches DogModel schema
 */
module.exports = async function formatDog(dog) {
  const mainImageUrl = await api.uploadPhoto(dog?.mainImage);
  const imageUrls = await api.uploadPhotos(dog?.images);
  const ownerImage = await api.uploadPhoto(dog?.owner?.image);
  return {
    ...dog,
    mainImageUrl,
    imageUrls,
    location: {
      ...dog.location,
      coordinates: await api.getCoordinates(dog.location),
    },
    owner: { ...dog.owner, imageUrl: ownerImage },
  };
};
