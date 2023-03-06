import { Button, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import React, { useState } from 'react';
import api from '../../api';
import Constants from 'expo-constants';

export default function CreateEvent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerText}>Create Event</Text>
        </View>
      </View>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderColor: '#E6E6E9',
    // shadowColor: '#000000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 4,
    // elevation: 5,
  },
  headerText: {
    fontSize: 24,
  },
  plusText: {
    fontSize: 40,
  },
});
