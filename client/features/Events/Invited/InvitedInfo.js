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
import { useAuth } from '../../../context/Provider';
// TO DELETE: dummy data
// import { dummyDogFriends } from '../sampleData.js';

export default function InvitedInfo({ modal, toggleModal, event, dog }) {
  // TO DELETE: dummy data
  // let friends = dummyDogFriends; // dog.friends
  const { user } = useAuth();

  const formattedDate = format(
    parseISO(event.datetime),
    'EEEE, MMMM dd, yyyy, ha',
  );

  const handleAttendanceYes = async () => {
    const eventId = event._id;
    await axios.delete(`${API_URL}/api/einvites/${eventId}`);
    await axios.patch(`${API_URL}/api/events/attend/${eventId}/${user._id}`);
  };

  // event that responded no to is still showing up on list;
  const handleAttendanceNo = async () => {
    const eventId = event._id;
    await axios.delete(`${API_URL}/api/einvites/${eventId}`);
    await axios.patch(`${API_URL}/api/events/reject/${eventId}/${user._id}`);
  };

  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.infoHeader}>Event Info</Text>

        <View style={styles.infoContainer}>
          <View style={styles.eventDetails}>
            <Text style={styles.eventTitle}>{event.title}</Text>
            <Text style={styles.dateText}>{formattedDate}</Text>
            {/* <Fontiso name="map-marker-alt" /> */}
            <View style={styles.locationDetails}>
              {/* <Text>{event.location.address1}</Text> */}
              <Text>{`${event.location.address1}, ${event.location.city}, ${event.location.state}`}</Text>
            </View>
            <Text style={styles.descriptionText}>{event.description}</Text>
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
            {/* <Text>De-Tails</Text> */}
          </View>

          <View style={styles.rsvpCard}>
            <Text style={styles.rsvpHeader}>Paw-lease RSVP!</Text>
            <View style={styles.hostDetails}>
              <View style={styles.hostCard}>
                <View style={styles.imageContainer}>
                  <Image
                    style={styles.image}
                    source={{ uri: event.hostMeta.mainImgPath }}
                  />
                </View>
                <Text
                  style={
                    styles.hostName
                  }>{`${event.hostMeta.name} invited you`}</Text>
              </View>
            </View>
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
    backgroundColor: '#E6E6E9',
    flex: 1,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
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
  eventDetails: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#66666E',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  rsvpCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#66666E',
    shadowOpacity: 0.5,
    elevation: 2,
  },
  eventTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 600,
    color: '#474747',
  },
  dateText: {
    marginBottom: 10,
  },
  locationDetails: {
    marginBottom: 10,
  },
  hostCard: {
    backgroundColor: '#E5D9F2',
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    paddingVertical: 10,
    borderRadius: 15,
    marginBottom: 20,
    alignSelf: 'center',
  },
  hostName: {
    marginLeft: 8,
    color: '#66666E',
    fontWeight: '600',
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
  attendanceText: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  descriptionText: {
    marginBottom: 10,
  },
  rsvpHeader: {
    textAlign: 'center',
    margin: 10,
    marginTop: 20,
    fontSize: 18,
    fontWeight: 600,
    color: '#474747',
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
