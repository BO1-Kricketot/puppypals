import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import InvitedInfo from './InvitedInfo.js';

export default function InvitedTile({ event, dog }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleModal} style={styles.row}>
        <View style={styles.hostContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: event.host_meta.mainImgPath }}
            />
          </View>
          <Text>{event.host_meta.name}</Text>
        </View>
        <View style={styles.eventDetails}>
          <Text>{event.dateTime}</Text>
          <Text>{event.title}</Text>
          <Text>{`${event.location.city}, ${event.location.state}`}</Text>
        </View>
      </TouchableOpacity>
      {modal && (
        <InvitedInfo
          modal={modal}
          toggleModal={toggleModal}
          event={event}
          dog={dog}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    backgroundColor: 'red',
    // height: 115,
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
  hostContainer: {
    backgroundColor: 'lightslategray',
    flex: 1,
    alignItems: 'center',
  },
  eventDetails: {
    backgroundColor: 'pink',
    flex: 3,
  },
  imageContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    margin: '2%',
    borderRadius: 25,
    width: '100%',
  },
});
