import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingTile from './AttendingTile.js';

export default function InvitedList({ attendingEvents }) {
  const [attendingList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(attendingEvents);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {attendingList.map((event) => (
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
