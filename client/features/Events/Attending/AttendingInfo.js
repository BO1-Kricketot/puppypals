import { StyleSheet, Text, View, TouchableOpacity, Modal, SafeAreaView } from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function AttendingInfo({ modal, toggleModal, event }) {
  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <View style={styles.headerContainer}>
        <Text style={styles.infoHeader}>Event Info</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text>{event.title}</Text>
          <Text>{`${event.location.city}, ${event.location.state}`}</Text>
          <Text>{event.dateTime}</Text>
          <Text>{event.description}</Text>
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
  infoHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
});
