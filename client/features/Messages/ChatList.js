import React from 'react';
import { View } from 'react-native';
import OneChat from './OneChat';

const ChatList = ({ styles, exampleData }) => {
  const onAccept = (id) => {
    console.log(`Accepted chat with ID ${id}`);
    //axios call when controllers updated
  };

  const onReject = (id) => {
    console.log(`Rejected chat with ID ${id}`);
    //axios call when controllers updated
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
