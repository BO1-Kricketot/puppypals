import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  Button,
} from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import axios from 'axios';
import { dummyDogFriends } from '../sampleData.js';

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
    <Modal>
      <View style={styles.modalContainer}>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
        <Text>Invited</Text>
        <Text>Attending</Text>
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
});
