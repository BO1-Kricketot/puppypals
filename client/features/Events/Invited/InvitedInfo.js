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

import { dummyDogFriends } from '../sampleData.js';
// console.log(dummyDogFriends[0].mainImageUrl);

export default function InvitedInfo({ modal, toggleModal, event, dog }) {
  let friends = dummyDogFriends;

  // // PLACEHOLDERS FOR FE TO BE HOOKUP:
  // const handleAttendanceUpdate = (eventId, dogId, isAttending) => {
  //   console.log('isAttending?', isAttending);
  //   axios
  //     .patch(`/events/${eventId}/attendance`, { dogId, isAttending })
  //     .then((response) => {
  //       console.log(response.data);
  //       // need to update on close, to update invitedlist
  //     })
  //     .catch((error) => console.error(error));
  // };

  const handleAttendanceYes = () => {
    console.log('I am attending');
    // handleAttendanceUpdate(event._id, dog._id, true);
  };

  const handleAttendanceNo = () => {
    console.log('I am not attending');
    // handleAttendanceUpdate(event._id, dog._id, false);
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
