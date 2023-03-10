import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import axios from 'axios';
import { API_URL } from '@env';
import { parseISO, format } from 'date-fns';
import Ionicons from 'react-native-vector-icons/Ionicons';
// TO DELETE: dummy data
// import { dummyDogFriends } from '../sampleData.js';

export default function InvitedInfo({ modal, toggleModal, event, dog }) {
  // TO DELETE: dummy data
  // let friends = dummyDogFriends; // dog.friends

  const formattedDate = format(parseISO(event.datetime), 'EEEE, MMMM dd, yyyy, ha');

  const handleAttendanceYes = async () => {
    const eventId = event._id;
    await axios.delete(`${API_URL}/einvites/${eventId}`);
    await axios.patch(`${API_URL}/events/attend/${eventId}/${dog._id}`);
  };

  const handleAttendanceNo = async () => {
    const eventId = event._id;
    await axios.delete(`${API_URL}/einvites/${eventId}`);
    await axios.patch(`${API_URL}/events/reject/${eventId}/${dog._id}`);
  };

  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.infoHeader}>Event Info</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.eventTitle}>{event.title}</Text>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <View style={styles.locationDetails}>
            <Text>{event.location.address1}</Text>
            <Text>{`${event.location.city}, ${event.location.state}`}</Text>
          </View>

          <View style={styles.attendanceText}>
            <Text>{`${event.invitees.length} Invited  · `} </Text>
            <Text>{`${event.attendees.length} Attending`}</Text>
          </View>

          <Text style={styles.descriptionText}>{event.description}</Text>

          <Text>Paw-lease RSVP!</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAttendanceYes} >
              <Text style={styles.buttonText}>YES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleAttendanceNo} >
              <Text style={styles.buttonText}>NO</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  // headerContainer: {
  //   backgroundColor: 'purple',
  // },
  infoHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingTop: 18,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 600,
    color: '#474747',
  },
  infoContainer: {
    backgroundColor: 'pink',
    flex: 1,
    padding: 15,
  },
  eventTitle: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  dateText: {
    marginBottom: 10,
  },
  locationDetails: {
    backgroundColor: 'white',
    marginBottom: 10,
  },
  attendanceText: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  descriptionText: {
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 20,
  },
  button: {
    width: '25%',
    borderRadius: 10,
    backgroundColor: '#7371FC',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
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
});
