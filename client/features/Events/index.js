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
import { useAuth } from '../../context/Provider.js';

export default function Events() {
  // to be ({ dog })
  const [invited, setInvited] = useState(true);
  const [invitedEvents, setInvitedEvents] = useState(dummyInvited);
  const [attendingEvents, setAttendingEvents] = useState(dummyAttending);
  const [modal, setModal] = useState(false);
  const { user } = useAuth();

  // TO DELETE: dummy data

  const dog = dummyDog;

  // get event invites for the dog // getEventInvitesById returns array of event ids
  // then make request to getEventById?
  const updateInvitedList = () => {
    axios
      .get(`${API_URL}/einvites/${dog._id}`)
      .then((result) => setInvitedEvents(result.data))
      .catch((err) => console.error('Error getting invited events: ', err));
  };

  const updateAttendingList = () => {
    axios
      .get(`${API_URL}/events/dog/${dog._id}`)
      .then((results) => {
        setAttendingEvents(results.data);
        console.log('results', results.data);
      })
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
        <View style={styles.headerTabs}>
          <View style={styles.invitedTab}>
          <TouchableOpacity
            onPress={handleInvitedTab}
            style={[
              invited ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text style={styles.toggleText}>Invited</Text>
          </TouchableOpacity>
          </View>

          <TouchableOpacity
            onPress={handleAttendingTab}
            styles={[
              styles.AttendingTab,
              !invited ? styles.activeTab : styles.inactiveTab,
            ]}>
            <Text style={styles.toggleText}>Attending</Text>
          </TouchableOpacity>

        </View>

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
    backgroundColor: '#E6E6E9',
    alignItems: 'center',
  },
  eventHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 60,
    backgroundColor: '#FFFFFF',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  headerTabs: {
    backgroundColor: '#FFFFFF',
    borderColor: '#7371FC',
    borderWidth: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    borderRadius: 20,
    width: '50%',
  },
  activeTab: {
    // backgroundColor: '#7371FC',
  },
  toggleText: {
    color: '#7371FC',
  },
  plusText: {
    fontSize: 40,
  },
});
