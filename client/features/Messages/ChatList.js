import React from 'react';
import { View } from 'react-native';
import OneChat from './OneChat';

const ChatList = () => {
  const onAccept = (id) => {
    console.log(`Accepted chat with ID ${id}`);
  };

  const onReject = (id) => {
    console.log(`Rejected chat with ID ${id}`);
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
        />
      ))}
    </View>
  );
};

export default ChatList;