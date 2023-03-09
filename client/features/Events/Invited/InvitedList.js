import { Button, StyleSheet, Text, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import InvitedTile from './InvitedTile.js';

export default function InvitedList({ invitedEvents, dog }) {
  const [invitedList, setInvitedList] = useState([]);

  useEffect(() => {
    setInvitedList(invitedEvents);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {invitedList.map((event) => (
        <InvitedTile key={event._id} event={event} dog={dog} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
