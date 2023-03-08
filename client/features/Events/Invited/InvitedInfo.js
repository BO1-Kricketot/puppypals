import { StyleSheet, Text, View, TouchableOpacity, Modal, Button } from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function InvitedInfo({ modal, toggleModal, event }) {
  return (
    <Modal>
      <View style={styles.modalContainer}>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
        <Text>Attending?</Text>
        <View style={styles.buttonContainer}>
          <Button title="Yes" style={styles.button} />
          <Button title="No" style={styles.button} />
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
