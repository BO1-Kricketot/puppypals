const attendingEventsList = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 1,
      name: 'Kiwi',
      mainImgPath: 'this is just a test',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 2,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 2,
      name: 'Kiwi',
      mainImgPath: 'this is just a test',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 3,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 3,
      name: 'Kiwi',
      mainImgPath: 'this is just a test',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
  {
    _id: 4,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 4,
      name: 'Kiwi',
      mainImgPath: 'this is just a test',
    },
    location: {
      city: 'Las Vegas',
      state: 'NV',
    },
  },
];

const eventsData = [
  {
    _id: 1,
    status: 'pending',
    timestamp: 'May 6, 2023',
  },
  {
    _id: 2,
    status: 'pending',
    timestamp: 'May 6, 2023',
  },
  {
    _id: 3,
    status: 'pending',
    timestamp: 'May 6, 2023',
  },
  {
    _id: 4,
    status: 'accepted',
    timestamp: 'May 6, 2023',
  },
];

const hostMeta = {
  _id: 1,
  name: 'Kiwi',
  mainImgPath: 'this is just a test',
};

export { attendingEventsList, eventsData, hostMeta };
