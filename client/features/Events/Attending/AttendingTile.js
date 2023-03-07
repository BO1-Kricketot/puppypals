import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingInfo from './AttendingInfo.js';

export default function AttendingTile({ event }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <Text>{event.host_meta.mainImgPath}</Text>
        <Text>{event.host_meta.name}</Text>
        <Text>{event.timestamp}</Text>
        <Text>{event.title}</Text>
        <Text>{`${event.location.city}, ${event.location.state}`}</Text>
      </TouchableOpacity>
      {modal && (
        <AttendingInfo modal={modal} toggleModal={toggleModal} event={event} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    backgroundColor: 'blue',
    height: 100,
  },
});
