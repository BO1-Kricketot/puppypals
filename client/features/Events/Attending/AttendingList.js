import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import AttendingTile from './AttendingTile.js';

const attendingEventsList = [
  {
    _id: 1,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
  },
  {
    _id: 2,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
  },
  {
    _id: 3,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
  },
  {
    _id: 4,
    title: 'Puppies in the Park',
    dateTime: 'May 6, 2023',
    description:
      'A meet-up of the puppies in the area! We can run around on the grass, or swim around in the water. Make sure your owners are prepared!',
    invitees: ['kiwi', 'bella', 'finn', 'dax', 'shepherd'],
    attendees: ['kiwi', 'bella', 'finn'],
  },
];

const hostMeta = {
  _id: 1,
  name: 'Kiwi',
  mainImgPath: 'this is just a test',
};

export default function InvitedList({ attendingEvents }) {
  const [eventList, setEventList] = useState([]);

  useEffect(() => {
    setEventList(attendingEventsList);
  }, []);

  return (
    <View style={styles.container}>
      {eventList.map((event) => (
        <AttendingTile key={event._id} event={event} hostMeta={hostMeta} />
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
