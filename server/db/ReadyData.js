// eslint-disable-next-line no-unused-vars
const template = {
  name: 'String',
  breed: 'String',
  mainImage: 'base64String',
  images: ['base64String'],
  energy: 'low', // low, medium, high
  size: 'small', // small, medium, large
  isDogFriendly: true, // or false
  isHumanFriendly: true, // or false
  bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed neque nec turpis suscipit auctor. Nulla lorem eros, commodo sit amet pretium eget, convallis sit amet orci. Sed gravida lorem elit.',
  location: {
    address1: 'String',
    address2: 'String',
    city: 'String',
    state: 'String',
    postalCode: 'String',
  },
  owner: {
    name: 'String',
    image: 'base64String',
  },
};

// TODO feel free to add more dogs when time allows
module.exports = [
  // {
  //   name: 'Kiwi',
  //   breed: 'Golden Retriever',
  //   mainImage: ``,
  //   images: [],
  //   energy: 'high',
  //   size: 'large',
  //   isDogFriendly: true,
  //   isHumanFriendly: true,
  //   bio: "I'm a dog with a nose for trouble and a tongue for tasty treats. I'm not always a good boy, but when I am, it's because I'm plotting my next mischievous move. If you need me, you can find me napping in a sunbeam or sniffing butts at the dog park.",
  //   location: {
  //     address1: '2121 Cedar Dr',
  //     address2: '',
  //     city: 'San Francisco',
  //     state: 'CA',
  //     postalCode: '94109',
  //   },
  //   owner: {
  //     name: 'String',
  //     image: '',
  //   },
  // },
];
