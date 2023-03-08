import React from 'react';
import { View } from 'react-native';
import OneChat from './OneChat';

const ChatList = () => {
  const onAccept = (id) => {
    console.log(`Accepted chat with ID ${id}`);
    //axios call when controllers updated
  };

  const onReject = (id) => {
    console.log(`Rejected chat with ID ${id}`);
    //axios call when controllers updated
  };

  const styles = {
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
  }
  };


  return (
    <View>
      {exampleData.map((data) => (
        <OneChat
          key={data.id}
          name={data.name}
          timestamp={data.timestamp}
          dogName={data.dogName}
          dogImage={data.dogImage}
          pending={data.pending}
          seen={data.seen}
          onAccept={() => onAccept(data.id)}
          onReject={() => onReject(data.id)}
          styles={styles}
        />
      ))}
    </View>
  );
};

export default ChatList;