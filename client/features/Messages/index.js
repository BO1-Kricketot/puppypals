import React from 'react';
import { View } from 'react-native';
import ChatList from './components/ChatList';


const Messages = () => {

  const exampleData = [
    {
      id: 1,
      name: 'John Doe',
      timestamp: '10:30 AM',
      dogName: 'Buddy',
      dogImage: 'https://via.placeholder.com/150',
      pending: true,
      seen: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      timestamp: '1:45 PM',
      dogName: 'Max',
      dogImage: 'https://via.placeholder.com/150',
      pending: false,
      seen: true,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      timestamp: '6:15 PM',
      dogName: 'Charlie',
      dogImage: 'https://via.placeholder.com/150',
      pending: false,
      seen: false,
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ChatList chatData={exampleChatData} />
    </View>
  );
};

export default App;