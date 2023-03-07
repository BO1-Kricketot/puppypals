import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function AttendingTile({ event, hostMeta }) {
  return (
    <View style={styles.container}>
      <Text>{hostMeta.mainImgPath}</Text>
      <Text>{hostMeta.name}</Text>
      <Text>{event.timestamp}</Text>
      <Text>{event.title}</Text>
      <Text>{event.city}</Text>
      <Text>{event.state}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: '1%',
    backgroundColor: 'blue',
    height: 100,
  },
});
