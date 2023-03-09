import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../api';
import Constants from 'expo-constants';
import axios from 'axios';
import InvitedList from './Invited/InvitedList.js';
import AttendingList from './Attending/AttendingList.js';
import CreateEvent from './CreateEvent/CreateEvent.js';
import { dummyAttending, dummyInvited, dummyDog } from './sampleData.js';
//console.log('dummyInvited', dummyInvited);

export default function Events() {
  // to be ({ dog })
  const [invited, setInvited] = useState(true);
  const [invitedEvents, setInvitedEvents] = useState(dummyInvited);
  const [attendingEvents, setAttendingEvents] = useState(dummyAttending);
  const [modal, setModal] = useState(false);

  const dog = dummyDog;

  // // PLACEHOLDERS FOR FE TO BE HOOKUP:
  // const updateInvitedList = () => {
    // setInvitedEvents(dummyInvited);
    // axios
    //   .get(`/events/dog/${dog._id}?filter=invited`)
    //   .then((results) => setInvitedEvents(results.data))
    //   .catch((err) => console.error('Error getting invited events: ', err));
  // };

  // const updateAttendingList = () => {
    // setAttendingEvents(dummyAttending);
    // axios
    //   .get(`/events/dog/${dog._id}?filter=attending`)
    //   .then((results) => setAttendingEvents(results.data))
    //   .catch((err) => console.error('Error getting attending events: ', err));
  // };

  // useEffect(() => {
    // updateInvitedList();
    // updateAttendingList();
  // }, []);

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
