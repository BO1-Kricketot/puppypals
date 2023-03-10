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

  const formattedDate = format(parseISO(event.datetime), 'EEE, MMM d, yyyy h:mm a');

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
              source={{ uri: event.hostMeta.mainImgPath }}
            />
          </View>
          <Text style={styles.hostName}>{event.hostMeta.name}</Text>
        </View>
        <View style={styles.eventDetails}>
          <Text style={styles.eventTime}>{formattedDate}</Text>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.eventLocation}>
            {`${event.location.city}, ${event.location.state}`}
          </Text>
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
    backgroundColor: 'white',
    flex: 1,
    // height: 115,
  },
  row: {
    flexDirection: 'row',
  },
  hostContainer: {
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
    paddingVertical: 10,
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
  eventTime: {
    fontSize: 13,
    color: '#66666E',
    fontWeight: 500,
  },
  eventTitle: {
    fontSize: 17,
    fontWeight: 500,
    marginTop: 4,
    marginBottom: 4,
    color: '#474747',
  },
  eventLocation: {
    fontSize: 12,
    color: '#66666E',
  },
  hostName: {
    fontSize: 12,
  },
});
