const dummyInvited = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:00:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: 1,
      name: 'Rocky',
      mainImgPath:
        'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
    },
    location: {
      address1: '212 E Everett Ave',
      address2: '',
      city: 'Fresno',
      state: 'CA',
      postalCode: '93720',
      coordinates: { lat: 36.8479987, lng: -119.7634271 },
    },
  },
  {
    _id: '640a4f853747a59c304539cc',
    title: 'Doggone Good Time',
    datetime: '2023-03-26T18:28:00.733Z',
    description:
      'Canine Cuisine: Treat your pup to some delicious food and make new furry friends!',
    invitees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    attendees: [
      '6408d8bf86d58cca24571b22',
      '6408d8bf86d58cca24571b30',
      '6408d8bf86d58cca24571b24',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b20',
      name: 'Ace',
      mainImgPath: 'https://i.ibb.co/QvMHWtt/89c0c293399c.jpg',
    },
    location: {
      address1: '212 E Everett Ave',
      address2: '',
      city: 'Fresno',
      state: 'CA',
      postalCode: '93720',
      coordinates: { lat: 36.8479987, lng: -119.7634271 },
    },
  },
  {
    _id: '640a4f863747a59c304539ce',
    title: 'Puppy Prom',
    datetime: '2023-03-20T23:50:28.642Z',
    description:
      'Dogtoberfest: Enjoy some German-style brews and plenty of canine companions!',
    invitees: [
      '6408d8bf86d58cca24571b3b',
      '6408d8bf86d58cca24571b35',
      '6408d8bf86d58cca24571b2b',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b22',
      name: 'Tucker',
      mainImgPath: 'https://i.ibb.co/q98bFYn/20de60804614.jpg',
    },
    location: {
      address1: '1626 Scott St',
      address2: '',
      city: 'San Francisco',
      state: 'CA',
      postalCode: '94115',
      coordinates: { lat: 37.7848475, lng: -122.4379783 },
    },
  },
  {
    _id: '640a4f873747a59c304539d0',
    title: 'Bark in the Dark',
    datetime: '2023-03-20T19:45:00.154Z',
    description:
      'Dog Days of Summer: Beat the heat with some cool treats and lots of pups!',
    invitees: [
      '6408d8bf86d58cca24571b22',
      '6408d8bf86d58cca24571b30',
      '6408d8bf86d58cca24571b24',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b3b',
      name: 'Athena',
      mainImgPath: 'https://i.ibb.co/SJmFGdv/444daef022e8.jpg',
    },
    location: {
      address1: '40 4th St',
      address2: '',
      city: 'Petaluma',
      state: 'CA',
      postalCode: '94952',
      coordinates: { lat: 38.2324399, lng: -122.6391529 },
    },
  },
  {
    _id: '640a4f883747a59c304539d2',
    title: 'Howl-o-ween Hound Hangout',
    datetime: '2023-04-03T22:53:08.610Z',
    description: 'Pup-tail Hour: Relax with your dog and enjoy a cocktail!',
    invitees: [
      '6408d8bf86d58cca24571b25',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b33',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b26',
      name: 'Buddy',
      mainImgPath: 'https://i.ibb.co/QvMHWtt/89c0c293399c.jpg',
    },
    location: {
      address1: '26524 Pepita Dr',
      address2: '',
      city: 'Mission Viejo',
      state: 'CA',
      postalCode: '92691',
      coordinates: { lat: 33.5946857, lng: -117.6668418 },
    },
  },
  {
    _id: '640a4f893747a59c304539d4',
    title: 'Puppy Promenade',
    datetime: '2023-04-01T18:28:39.571Z',
    description: 'Doggy Dip Day: Take a dip with your furry best friend!',
    invitees: [
      '6408d8bf86d58cca24571b36',
      '6408d8bf86d58cca24571b24',
      '6408d8bf86d58cca24571b21',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b24',
      name: 'Bo',
      mainImgPath: 'https://i.ibb.co/QvMHWtt/89c0c293399c.jpg',
    },
    location: {
      address1: '2222 Maple St',
      address2: '',
      city: 'Palo Alto',
      state: 'CA',
      postalCode: '94303',
      coordinates: { lat: 37.4558105, lng: -122.1495488 },
    },
  },
  {
    _id: '640a4f8b3747a59c304539d6',
    title: 'Puppy Playtime Picnic',
    datetime: '2023-04-02T11:33:39.242Z',
    description:
      'Paws & Pints: Grab a beer and hang out with some furry friends!',
    invitees: [
      '6408d8bf86d58cca24571b2a',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b3a',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b30',
      name: 'Ruby',
      mainImgPath: 'https://i.ibb.co/x7QtS5F/769657881405.jpg',
    },
    location: {
      address1: '1650 Los Gamos Dr',
      address2: '',
      city: 'San Rafael',
      state: 'CA',
      postalCode: '94903',
      coordinates: { lat: 38.0212517, lng: -122.5414692 },
    },
  },
  {
    _id: '640a4f8b3747a59c304539d8',
    title: 'Pup-tastic Picnic',
    datetime: '2023-03-27T22:18:32.888Z',
    description:
      'Paws & Pints: Grab a beer and hang out with some furry friends!',
    invitees: [
      '6408d8bf86d58cca24571b24',
      '6408d8bf86d58cca24571b21',
      '6408d8bf86d58cca24571b35',
    ],
    attendees: [
      '6408d8bf86d58cca24571b28',
      '6408d8bf86d58cca24571b20',
      '6408d8bf86d58cca24571b26',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b26',
      name: 'Buddy',
      mainImgPath: 'https://i.ibb.co/QvMHWtt/89c0c293399c.jpg',
    },
    location: {
      address1: '26524 Pepita Dr',
      address2: '',
      city: 'Mission Viejo',
      state: 'CA',
      postalCode: '92691',
      coordinates: { lat: 33.5946857, lng: -117.6668418 },
    },
  },
  {
    _id: '640a4f8c3747a59c304539da',
    title: 'Doggie Date Night',
    datetime: '2023-03-18T07:17:33.216Z',
    description: 'Puppy Playtime: Let your dog run wild and make new friends!',
    invitees: [
      '6408d8bf86d58cca24571b36',
      '6408d8bf86d58cca24571b3b',
      '6408d8bf86d58cca24571b3a',
    ],
    hostMeta: {
      dogId: '6408d8bf86d58cca24571b22',
      name: 'Tucker',
      mainImgPath: 'https://i.ibb.co/q98bFYn/20de60804614.jpg',
    },
    location: {
      address1: '333 Pine St',
      address2: '',
      city: 'Berkeley',
      state: 'CA',
      postalCode: '94704',
      coordinates: { lat: 37.858781, lng: -122.248554 },
    },
  },
  {
    _id: 10,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      _id: 10,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
];

const dummyAttending = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 1,
      name: 'Kiwi',
      mainImgPath:
        'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 2,
    title: 'Puppies in the Park',
    datetime: '2013-10-17T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 1,
      name: 'Kiwi',
      mainImgPath:
        'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 3,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 2,
      name: 'Kiwi',
      mainImgPath:
        'http://2.bp.blogspot.com/-o1Nlm1LBxD0/UKpxdFESiuI/AAAAAAAAKQg/6FynR1gMNqU/s1600/cute-puppy-pictures-901.jpg',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 4,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 4,
      name: 'Kiwi',
      mainImgPath:
        'http://3.bp.blogspot.com/-90Yj9zzFtn4/Tp-4Ai23riI/AAAAAAAAAhc/AvNYsJxGuuQ/s1600/Cute-Puppy-Dog.jpg',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 5,
    title: 'Puppies in the Park',
    datetime: '2013-11-22T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 5,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 6,
    title: 'Puppies in the Park',
    datetime: '2013-12-1T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 6,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 7,
    title: 'Puppies in the Park',
    datetime: '2013-12-12T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 7,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 8,
    title: 'Puppies in the Park',
    datetime: '2013-12-30T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 8,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 9,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 9,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 10,
    title: 'Puppies in the Park',
    datetime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    hostMeta: {
      dogId: 10,
      name: 'Kiwi',
      mainImgPath:
        'https://repository-images.githubusercontent.com/260096455/47f1b200-8b2e-11ea-8fa1-ab106189aeb0',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
];

const dummyDog = {
  _id: '1',
  __v: 0,
  bio: "Yip yip! I'm a small dog with a big personality. I'm always the life of the party, making everyone laugh and smile. I'm outgoing, vivacious, and always ready to have a good time!",
  breed: 'Lhasa Apso',
  energy: 'high',
  imageUrls: ['https://i.ibb.co/x7QtS5F/769657881405.jpg'],
  isDogFriendly: true,
  isHumanFriendly: true,
  location: {
    address1: '1102 E Chapman Ave',
    address2: '',
    city: 'Fullerton',
    state: 'CA',
    postalCode: '92831',
    coordinates: { lat: 33.8738489, lng: -117.9084788 },
  },
  mainImageUrl: 'https://i.ibb.co/SJmFGdv/444daef022e8.jpg',
  name: 'Finn',
  owner: {
    name: 'Martin Gupta',
    imageUrl: 'https://i.ibb.co/ZxVkbKS/c04c76344970.jpg',
  },
  size: 'small',
  friendsList: ['2', '3', '4'], // dog
  eventsAttending: ['1', '2', '3', '4', '5', '6', '7'],
  eventsPending: ['1', '2', '3', '4', '5', '6', '7'],
};

const dummyDogFriends = [
  {
    _id: '2',
    __v: 0,
    bio: "Yip yip! I'm a small dog with a big personality. I'm always the life of the party, making everyone laugh and smile. I'm outgoing, vivacious, and always ready to have a good time!",
    breed: 'Pekingese',
    energy: 'high',
    imageUrls: [],
    isDogFriendly: false,
    isHumanFriendly: true,
    location: {
      address1: '24354 Valle del Oro',
      address2: '',
      city: 'Newhall',
      state: 'CA',
      postalCode: '91321',
      coordinates: { lat: 34.3718041, lng: -118.5139913 },
    },
    mainImageUrl: 'https://i.ibb.co/q98bFYn/20de60804614.jpg',
    name: 'Minnie',
    owner: {
      name: 'Travis Patel',
      imageUrl: 'https://i.ibb.co/106hvp4/5876b5bde435.jpg',
    },
    size: 'medium',
  },
  {
    _id: '3',
    __v: 0,
    bio: "Bark bark! I'm a curious dog who loves to learn new things. I'm always trying to figure out how things work and exploring my surroundings. I'm intelligent, inquisitive, and always eager to learn.",
    breed: 'Old English Sheepdog',
    energy: 'low',
    imageUrls: [],
    isDogFriendly: true,
    isHumanFriendly: true,
    location: {
      address1: '1733 S El Camino Real',
      address2: '',
      city: 'San Mateo',
      state: 'CA',
      postalCode: '94402',
      coordinates: { lat: 37.551594, lng: -122.313355 },
    },
    mainImageUrl: 'https://i.ibb.co/QvMHWtt/89c0c293399c.jpg',
    name: 'Harley',
    owner: {
      name: 'Kasey Khan',
      imageUrl: 'https://i.ibb.co/tZNCj6G/29d49aacbd00.jpg',
    },
    size: 'large',
  },
  {
    _id: '4',
    __v: 0,
    bio: "Bow wow! I'm a cute and cuddly dog who loves snuggling up with my favorite humans. I'm playful, affectionate, and always eager to please. I may be small, but I've got a big heart!",
    breed: 'French Bulldog',
    energy: 'high',
    imageUrls: ['https://i.ibb.co/QvMHWtt/89c0c293399c.jpg'],
    isDogFriendly: true,
    isHumanFriendly: true,
    location: {
      address1: '1515 Cedar St',
      address2: '',
      city: 'San Diego',
      state: 'CA',
      postalCode: '92101',
      coordinates: { lat: 33.0549183, lng: -116.8845669 },
    },
    mainImageUrl: 'https://i.ibb.co/QHQ81LQ/e2bd11bd051b.jpg',
    name: 'Milo',
    owner: {
      name: 'Angela Rodriguez',
      imageUrl: 'https://i.ibb.co/DzzWq6b/6a6f403c1196.jpg',
    },
    size: 'medium',
  },
];

export { dummyInvited, dummyAttending, dummyDog, dummyDogFriends };
