import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import api from '../../api';
import Constants from 'expo-constants';
import InvitedList from './Invited/InvitedList.js';
import AttendingList from './Attending/AttendingList.js';
import CreateEvent from './CreateEvent/CreateEvent.js';

export default function Events({ dog }) {
  const [invited, setInvited] = useState(true);
  const [invitedEvents, setInvitedEvents] = useState([]);
  const [attendingEvents, setAttendingEvents] = useState([]);
  const [modal, setModal] = useState(false);

  const handleInvited = () => {
    setInvited(true);
  };

  const handleAttending = () => {
    setInvited(false);
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.eventHeader}>
        <TouchableOpacity onPress={handleInvited}>
          <Text style={styles.text}>Invited</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAttending}>
          <Text style={styles.text}>Attending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.addEventText}>+</Text>
        </TouchableOpacity>
      </View>
      {modal && <CreateEvent modal={modal} toggleModal={toggleModal} />}
      {invited ? (
        <InvitedList invitedEvents={invitedEvents} />
      ) : (
        <AttendingList attendingEvents={attendingEvents} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F4F4F6',
    alignItems: 'center',
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
  },
  plusText: {
    fontSize: 40,
  },
});
