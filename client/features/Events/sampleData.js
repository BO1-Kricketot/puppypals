const attendingEventsList = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    dateTime: '2012-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 1,
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
    dateTime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 2,
      name: 'Kiwi',
      mainImgPath: 'https://i.ytimg.com/vi/xEDP5N5SNQM/maxresdefault.jpg',
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
      _id: 2,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 4,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 5,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 6,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 7,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 8,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 9,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
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

const eventsData = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    dateTime: '2012-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 1,
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
    dateTime: '2013-10-15T21:26:17Z',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 2,
      name: 'Kiwi',
      mainImgPath: 'https://i.ytimg.com/vi/xEDP5N5SNQM/maxresdefault.jpg',
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
      _id: 2,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 4,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 5,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 6,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 7,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 8,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
      _id: 9,
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
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
    host_meta: {
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

export { attendingEventsList, eventsData };
