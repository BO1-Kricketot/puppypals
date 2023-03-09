import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
  Image,
} from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import axios from 'axios';
import { API_URL } from '@env';
// TO DELETE: dummy data
import { dummyDogFriends } from '../sampleData.js';

export default function InvitedInfo({ modal, toggleModal, event, dog }) {
  // TO DELETE: dummy data
  let friends = dummyDogFriends;

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
      <View style={styles.modalContainer}>
        <Text>{event.title}</Text>
        <Text>{`${event.location.city}, ${event.location.state}`}</Text>
        <Text>{event.dateTime}</Text>
        <Text>{event.description}</Text>
        <Text>Invited</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[0].mainImageUrl }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[1].mainImageUrl }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[2].mainImageUrl }}
          />
        </View>
        <Text>Attending</Text>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[0].mainImageUrl }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[1].mainImageUrl }}
          />
        </View>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[2].mainImageUrl }}
          />
        </View>
        <Text>Are you joining, pal?</Text>
        <View style={styles.buttonContainer}>
          <Button
            title="Yes"
            style={styles.button}
            onPress={handleAttendanceYes}
          />
          <Button
            title="No"
            style={styles.button}
            onPress={handleAttendanceNo}
          />
        </View>
        <TouchableOpacity onPress={toggleModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    margin: '10%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    width: '40%',
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
