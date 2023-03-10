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

  const formattedDate = format(
    parseISO(event.datetime),
    'EEEE, MMMM dd, yyyy, ha',
  );

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
        <Text style={styles.infoHeader}>Event Info</Text>

        <View style={styles.infoContainer}>
          <View>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
            <View style={styles.locationDetails}>
              <Text>{event.location.address1}</Text>
              <Text>{`${event.location.city}, ${event.location.state}`}</Text>
            </View>
            <View style={styles.attendanceText}>
              {event.invitees !== undefined && (
                <Text>{`${event.invitees.length} Invited`} </Text>
              )}
              {event.attendees === undefined ? (
                <Text>{'· 0 Attending'}</Text>
              ) : (
                <Text>{`· ${event.attendees.length} Attending`}</Text>
              )}
            </View>
            <Text style={styles.descriptionText}>{event.description}</Text>
          </View>

          <View>
            <Text style={styles.rsvpHeader}>Paw-lease RSVP!</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleAttendanceYes}>
                <Text style={styles.buttonText}>YES</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={handleAttendanceNo}>
                <Text style={styles.buttonText}>NO</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={toggleModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 30,
  },
  infoHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 600,
    color: '#474747',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  eventTitle: {
    fontSize: 17,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#474747',
  },
  dateText: {
    marginBottom: 10,
  },
  locationDetails: {
    marginBottom: 10,
  },
  attendanceText: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  descriptionText: {
    marginBottom: 30,
  },
  rsvpHeader: {
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  button: {
    width: '40%',
    borderRadius: 20,
    backgroundColor: '#7371FC',
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#7371FC',
    marginBottom: 20,
  },
});
