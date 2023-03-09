import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import ChatList from './ChatList';
import HeaderBar from './HeaderBar';

const Messages = () => {
  const styles = {
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    container: {
      backgroundColor: '#FFFFFF',
      padding: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
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
    <View style={styles}>
      <HeaderBar exampleData={exampleData} styles={styles} />
      <ChatList exampleData={exampleData} styles={styles} />
    </View>
  );
};

export default Messages;
