
const CurrentUser1 = {
  _id: 63,
  name: 'Josh',
};

const CurrentUser2 = {
  _id: 201,
  name: 'Aimee',
}

const Chats = {
  _id: 5,
  members: [63,201],
  messages: [
    {
      _id: 1,
      userId: 63,
      body: 'Hello how are you?',
      timestamp: '2023-02-05T10:00:00.000Z',
      reactions: []
    },
    {
      _id: 2,
      userId: 201,
      body: 'Hello I am doing fine, what name of your dog?',
      timestamp: '2023-02-05T10:01:00.000Z',
      reactions: []
    },
    {
      _id: 3,
      userId: 63,
      body: 'Her name is Kiwi',
      timestamp: '2023-02-05T11:10:00.000Z',
      reactions: []
    },
    {
      _id: 4,
      userId: 63,
      body: 'what is your dog\'s name?',
      timestamp: '2023-02-05T10:11:00.000Z',
      reactions: []
    },
    {
      _id: 5,
      userId: 201,
      body: 'her name is meow',
      timestamp: '2023-03-08T10:12:00.000Z',
      reactions: []
    },
  ]
}

export default {
  CurrentUser1: {
    _id: 63,
    name: 'Josh',
  },
  CurrentUser2: {
    _id: 201,
    name: 'Aimee',
  },
  Chats: {
    _id: 5,
    members: [63,201],
    messages: [
      {
        _id: 1,
        userId: 63,
        body: 'Hello how are you?',
        timestamp: '2023-02-05T10:00:00.000Z',
        reactions: []
      },
      {
        _id: 2,
        userId: 201,
        body: 'Hello I am doing fine, what name of your dog?',
        timestamp: '2023-02-05T10:01:00.000Z',
        reactions: []
      },
      {
        _id: 3,
        userId: 63,
        body: 'Her name is Kiwi',
        timestamp: '2023-02-05T11:10:00.000Z',
        reactions: []
      },
      {
        _id: 4,
        userId: 63,
        body: 'what is your dog\'s name?',
        timestamp: '2023-02-05T10:11:00.000Z',
        reactions: []
      },
      {
        _id: 5,
        userId: 201,
        body: 'her name is meow',
        timestamp: '2023-03-08T10:12:00.000Z',
        reactions: []
      },
    ]
  },
}