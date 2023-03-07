import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import InvitedTile from './InvitedTile.js';
import { eventsData, hostMeta } from '../sampleData.js';

export default function InvitedList({ invitedEvents }) {
  const [filteredEvents, setFilteredEvents] = useState([]);

  const filterEvents = () => {
    const filtered = eventsData.filter(
      (invitedEvent) => invitedEvent.status === 'pending',
    );
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    filterEvents();
  }, []);

  return (
    <View style={styles.container}>
      {filteredEvents.map((event) => (
        <InvitedTile key={event._id} event={event} hostMeta={hostMeta} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    margin: '1%',
  },
});
