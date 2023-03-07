import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function AttendingInfo({ modal, toggleModal, event }) {
  return (
    <Modal>
      <View style={styles.modalContainer}>
        <Text>{event.title}</Text>
        <Text>{event.description}</Text>
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
});
