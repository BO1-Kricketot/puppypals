import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../api';
import Constants from 'expo-constants';
import axios from 'axios';
import InvitedList from './Invited/InvitedList.js';
import AttendingList from './Attending/AttendingList.js';
import CreateEvent from './CreateEvent/CreateEvent.js';
import { API_URL } from '@env';
import { dummyAttending, dummyInvited, dummyDog } from './sampleData.js';

export default function Events() {
  // to be ({ dog })
  const [invited, setInvited] = useState(true);
  const [invitedEvents, setInvitedEvents] = useState(dummyInvited);
  const [attendingEvents, setAttendingEvents] = useState(dummyAttending);
  const [modal, setModal] = useState(false);

  // TO DELETE: dummy data
  const dog = dummyDog;

  const updateInvitedList = () => {
    axios
      .get(`${API_URL}/einvites/${dog._id}`)
      .then((result) => setInvitedEvents(result.data))
      .catch((err) => console.error('Error getting invited events: ', err));
  };

  const updateAttendingList = () => {
    axios
      .get(`${API_URL}/events/dog/${dog._id}`)
      .then((results) => setAttendingEvents(results.data))
      .catch((err) => console.error('Error getting attending events: ', err));
  };

  useEffect(() => {
    updateInvitedList();
    updateAttendingList();
  }, []);

  const handleInvitedTab = () => {
    setInvited(true);
    updateInvitedList();
  };

  const handleAttendingTab = () => {
    setInvited(false);
    updateAttendingList();
  };

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.eventHeader}>
        <TouchableOpacity onPress={handleInvitedTab}>
          <Text style={styles.text}>Invited</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAttendingTab}>
          <Text style={styles.text}>Attending</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Text style={styles.addEventText}>+</Text>
        </TouchableOpacity>
      </View>
      {modal && (
        <CreateEvent modal={modal} toggleModal={toggleModal} dog={dog} />
      )}
      {invited ? (
        <InvitedList invitedEvents={invitedEvents} dog={dog} />
      ) : (
        <AttendingList attendingEvents={attendingEvents} dog={dog} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
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
