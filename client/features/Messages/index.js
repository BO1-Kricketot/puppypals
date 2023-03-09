import React, { useState } from 'react';
import { View, Platform, StatusBar } from 'react-native';
import ChatList from './ChatList';
import HeaderBar from './HeaderBar';

const Messages = () => {
  const [sortOption, setSortOption] = useState('pending');
  const styles = {
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    container: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      paddingTop: 8,
      paddingBottom: 0,
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
    },
    oneChatContainer: {
      backgroundColor: '#FFFFFF',
      padding: 10,
      paddingTop: 0,
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
