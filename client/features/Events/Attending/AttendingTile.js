import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingInfo from './AttendingInfo.js';
import { parseISO, format } from 'date-fns';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AttendingTile({ event }) {
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
            {event.hostMeta.dogId === 1 ? (
              <Image
                style={styles.hostImage}
                source={{ uri: event.hostMeta.mainImgPath }}
              />
            ) : (
              <Image
                style={styles.image}
                source={{ uri: event.hostMeta.mainImgPath }}
              />
            )}
          </View>
          {event.hostMeta.dogId === 1 ? (
            <View style={styles.hostDesignation}>
              <Ionicons name="ios-paw" size={10} color="#7371FC" />
              <Text style={styles.userHost}>HOST</Text>
              <Ionicons name="ios-paw" size={10} color="#7371FC" />
            </View>
          ) : (
            <Text style={styles.hostName}>{event.hostMeta.name}</Text>
          )}
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
        <AttendingInfo modal={modal} toggleModal={toggleModal} event={event} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    backgroundColor: '#FFFFFF',
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
    borderRadius: 25,
    width: '100%',
  },
  hostImage: {
    flex: 1,
    margin: '2%',
    borderRadius: 25,
    width: '100%',
    borderWidth: 3,
    borderColor: '#7371FC',
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
    color: '#66666E',
    fontWeight: 500,
  },
  hostDesignation: {
    flex: 1,
    flexDirection: 'row',
    padding: 2,
    alignItems: 'center',
    justifyItems: 'center',
  },
  userHost: {
    fontSize: 12,
    fontStyle: 'italic',
    fontWeight: '700',
    color: '#7371FC',
    marginHorizontal: 2,
  },
});
