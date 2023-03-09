import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingInfo from './AttendingInfo.js';

export default function AttendingTile({ event }) {
  const [modal, setModal] = useState(false);
  const dogID = 2;

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.hostContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: event.host_meta.mainImgPath }}
            />
          </View>
          {event.host_meta._id === 1 && <Text>HOST</Text>}
          <Text>{event.host_meta.name}</Text>
        </View>
        <View style={styles.eventDetails}>
          <Text>{event.datetime}</Text>
          <Text>{event.title}</Text>
          <Text>{`${event.location.city}, ${event.location.state}`}</Text>
        </View>
      </TouchableOpacity>
      {modal && (
        <AttendingInfo modal={modal} toggleModal={toggleModal} event={event} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '1%',
    backgroundColor: 'blue',
    height: 115,
    // flexDirection: 'row',
  },
  hostContainer: {
    backgroundColor: 'lightslategray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
  },
  image: {
    flex: 1,
    margin: '2%',
    borderRadius: 25,
    width: '100%',
  },
  // eventDetails: {
  //   flex: 2,
  // },
});
