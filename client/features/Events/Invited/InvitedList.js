import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import InvitedTile from './InvitedTile.js';

const eventsData = [
  {
    _id: 1,
    status: 'pending',
  },
  {
    _id: 2,
    status: 'pending',
  },
  {
    _id: 3,
    status: 'accepted',
  },
  {
    _id: 4,
    status: 'accepted',
  },
];

export default function InvitedList({ invitedEvents }) {
  const [filteredEvents, setFilteredEvents] = useState([]);

  console.log('eventsData', eventsData);
  const filterEvents = () => {
    const filtered = eventsData.filter(
      (invitedEvent) => invitedEvent.status === 'pending',
    );
    // console.log('filtered', filtered);
    setFilteredEvents(filtered);
  };

  useEffect(() => {
    filterEvents();
  }, []);

  return (
    <View>
      <Text>Invited List goes here</Text>
      {filteredEvents.map((event) => (
        <InvitedTile key={event._id} event={event} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
