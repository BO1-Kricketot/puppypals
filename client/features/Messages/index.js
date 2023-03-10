import React, { useState } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import ChatList from './ChatList';
import HeaderBar from './HeaderBar';
// const axios = require('axios');

const Messages = () => {
  const [sortOption, setSortOption] = useState('pending');
  // const [chatListData, setChatListData] = useState([]);
  const styles = {
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    container: {
      backgroundColor: '#FFFFFF',
      padding: 0,
      paddingTop: 8,
      paddingBottom: 8,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    oneChatContainer: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      paddingLeft: 20,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
    },
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    unseenIndicator: {
      width: 10,
      height: 10,
      borderRadius: 5,
      marginRight: 8,
    },
    unseenIndicatorSeen: {
      backgroundColor: 'black',
    },
    unseenIndicatorUnseen: {
      backgroundColor: 'green',
    },
    name: {
      color: 'green',
      fontSize: 16,
      fontWeight: 'bold',
      marginRight: 8,
    },
    timestamp: {
      color: 'green',
      fontSize: 14,
    },
    dogContainer: {
      alignItems: 'center',
      marginRight: 16,
    },
    dogPicture: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 8,
    },
    dogName: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    pendingText: {
      fontSize: 12,
      color: 'grey',
    },
    message: {
      flex: 1,
      width: '80%',
      fontSize: 14,
      color: 'grey',
    },
    rightAction: {
      backgroundColor: '#00C853',
      justifyContent: 'center',
    },
  };
  const exampleData = [
    {
      id: 1,
      name: 'John Doe',
      timestamp: '10:30 AM',
      dogName: 'Buddy',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: false,
    },
    {
      id: 2,
      name: 'Jane Smith',
      timestamp: '1:45 PM',
      dogName: 'Max',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: true,
    },
    {
      id: 3,
      name: 'Bob Johnson',
      timestamp: '6:15 PM',
      dogName: 'Charlie',
      dogImage: 'https://via.placeholder.com/150',
      status: 'accepted',
      seen: false,
    },
    {
      id: 4,
      name: 'Kourtney Rory',
      timestamp: '1:30 AM',
      dogName: 'Henry',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: false,
    },
    {
      id: 5,
      name: 'Amir Patel',
      timestamp: '9:45 PM',
      dogName: 'Lola',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: true,
    },
    {
      id: 6,
      name: 'Natalie Singh',
      timestamp: '1:15 PM',
      dogName: 'Jack',
      dogImage: 'https://via.placeholder.com/150',
      status: 'accepted',
      seen: false,
    },
    {
      id: 7,
      name: 'Vivian Kim',
      timestamp: '10:30 AM',
      dogName: 'Goldie',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: false,
    },
    {
      id: 8,
      name: 'Seb Gupta',
      timestamp: '11:45 AM',
      dogName: 'Oscar',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: true,
    },
    {
      id: 9,
      name: 'Kobe Khan',
      timestamp: '6:52 PM',
      dogName: 'Duke',
      dogImage: 'https://via.placeholder.com/150',
      status: 'accepted',
      seen: false,
    },
    {
      id: 10,
      name: 'Shawn Kim',
      timestamp: '10:30 PM',
      dogName: 'Hunter',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: true,
    },
    {
      id: 11,
      name: 'Kyle Kim',
      timestamp: '2:54 PM',
      dogName: 'Layla',
      dogImage: 'https://via.placeholder.com/150',
      status: 'pending',
      seen: true,
    },
    {
      id: 12,
      name: 'Logan Lee',
      timestamp: '8:45 PM',
      dogName: 'Blue',
      dogImage: 'https://via.placeholder.com/150',
      status: 'accepted',
      seen: false,
    },
  ];
  const handleSort = (option) => {
    setSortOption(option);
  };
  const filteredData = exampleData.filter((data) => {
    if (sortOption === 'pending') {
      return data.status === 'pending';
    } else {
      return data.status === 'accepted';
    }
  });

  return (
    <View style={styles.container}>
      <HeaderBar
        styles={styles}
        onSort={handleSort}
        exampleData={exampleData}
      />
      <ChatList data={filteredData} styles={styles} />
    </View>
  );
};

export default Messages;
