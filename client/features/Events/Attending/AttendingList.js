import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingTile from './AttendingTile.js';
// dummy data
import { attendingEventsList } from '../sampleData.js';

export default function InvitedList({ attendingEvents }) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(attendingEventsList);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {eventList.map((event) => (
        <AttendingTile key={event._id} event={event} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
