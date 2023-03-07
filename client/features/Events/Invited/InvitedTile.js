import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import InvitedInfo from './InvitedInfo.js';

export default function InvitedTile({ event, hostMeta }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>{hostMeta.mainImgPath}</Text>
        <Text>{hostMeta.name}</Text>
        <Text>{event.timestamp}</Text>
        <Text>{event.title}</Text>
        <Text>{event.city}</Text>
        <Text>{event.state}</Text>
      </TouchableOpacity>
      {modal && (
        <InvitedInfo modal={modal} toggleModal={toggleModal} event={event} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    backgroundColor: 'red',
    height: 100,
  },
});
