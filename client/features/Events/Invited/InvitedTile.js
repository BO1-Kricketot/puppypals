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
import { parseISO, format } from 'date-fns';

export default function InvitedTile({ event, dog }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const formattedDate = format(parseISO(event.datetime), 'EEE, MMM d, yyyy h:mm a');

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
          <Text style={styles.hostName}>{event.host_meta.name}</Text>
        </View>
        <View style={styles.eventDetails}>
          <Text>{formattedDate}</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventLocation}>{`${event.location.city}, ${event.location.state}`}</Text>
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
    marginTop: '3%',
    backgroundColor: 'white',
    flex: 1,
    // height: 115,
  },
  row: {
    flexDirection: 'row',
  },
  hostContainer: {
    // backgroundColor: 'lightslategray',
    // backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
    marginLeft: 10,
  },
  eventDetails: {
    // backgroundColor: 'pink',
    // backgroundColor: 'white',
    flex: 3,
    justifyContent: 'center',
    marginLeft: 10,
  },
  imageContainer: {
    width: 52,
    height: 52,
    justifyContent: 'center',
    margin: '1%',
  },
  image: {
    flex: 1,
    margin: '2%',
    borderRadius: 30,
    width: '100%',
  },
  eventTitle: {
    // backgroundColor: 'white',
    fontSize: 17,
    marginTop: 3,
    marginBottom: 3,
  },
  eventLocation: {
    // backgroundColor: 'white',
    fontSize: 12,
  },
  hostName: {
    fontSize: 12,
  },
});
