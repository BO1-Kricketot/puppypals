import React from 'react';
import { View } from 'react-native';
import OneChat from './OneChat';

const ChatList = ({ styles, data }) => {
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
      {data.map((oneData) => (
        <OneChat
          key={oneData.id}
          name={oneData.name}
          timestamp={oneData.timestamp}
          dogName={oneData.dogName}
          dogImage={oneData.dogImage}
          status={oneData.status}
          seen={oneData.seen}
          onAccept={() => onAccept(oneData.id)}
          onReject={() => onReject(oneData.id)}
          styles={styles}
        />
      ))}
    </View>
  );
};

export default ChatList;
