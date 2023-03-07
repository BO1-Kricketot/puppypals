import { Button, StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Modal } from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function CreateEvent({ modal, toggleModal }) {
  return (
    <Modal animationType="slide">
      <View>
        <View style={styles.modalContainer}>
          <Text>Create Event</Text>
          <TouchableOpacity onPress={toggleModal}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: '#FFFFFF',
  },
});
