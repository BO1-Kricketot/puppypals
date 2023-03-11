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
import Ionicons from 'react-native-vector-icons/Ionicons';
import { API_URL } from '@env';
import { dummyAttending, dummyDog } from './sampleData.js';
import { useAuth } from '../../context/Provider.js';

export default function Events() {
  const [invited, setInvited] = useState(true);
  const [invitedEvents, setInvitedEvents] = useState([]);
  const [attendingEvents, setAttendingEvents] = useState(dummyAttending);
  const [modal, setModal] = useState(false);
  const { user } = useAuth();

  // TO DELETE: dummy data
  const dog = dummyDog;

  const updateInvitedList = () => {
    axios
      // .get(`${API_URL}/api/einvites/${dog._id}`)
      .get(`${API_URL}/api/events/dog/${user._id}/invited`)
      .then((result) => setInvitedEvents(result.data))
      .catch((err) => console.error('Error getting invited events: ', err));
  };

  const updateAttendingList = () => {
    axios
      .get(`${API_URL}/api/events/dog/${user._id}/attending`)
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
          <TouchableOpacity
            onPress={handleInvitedTab}
            style={[invited ? styles.activeTab : styles.inactiveTab]}>
            <Text style={[invited ? styles.activeText : styles.inactiveText]}>
              Invited
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAttendingTab}
            style={[!invited ? styles.activeTab : styles.inactiveTab]}>
            <Text style={[!invited ? styles.activeText : styles.inactiveText]}>
              Attending
            </Text>
          </TouchableOpacity>
        </View>
        <View styles={styles.iconStyle}>
          <TouchableOpacity onPress={toggleModal}>
            <Ionicons
              name="add-circle-outline"
              size={27}
              color="#7371FC"
              // display="flex"
              // flexDirection="row-reverse"
              marginLeft={40}
              // marginRight={10}
            />
          </TouchableOpacity>
        </View>
      </View>
      {modal && (
        <CreateEvent
          modal={modal}
          toggleModal={toggleModal}
          dog={dog}
          updateAttendingList={updateAttendingList}
        />
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
    position: 'relative',
  },
  headerTabs: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    borderRadius: 20,
    width: '50%',
    marginLeft: 70,
  },
  activeTab: {
    flex: 1,
    backgroundColor: '#7371FC',
    borderColor: '#7371FC',
    borderWidth: 1,
    padding: 1,
  },
  inactiveTab: {
    flex: 1,
    borderColor: '#7371FC',
    borderWidth: 1,
    padding: 1,
  },
  activeText: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 2,
  },
  inactiveText: {
    color: '#7371FC',
    textAlign: 'center',
    padding: 2,
  },
});
