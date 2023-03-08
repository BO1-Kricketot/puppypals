import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';

export default function CreateEvent({ modal, toggleModal, dog }) {
  const initial = {
    title: '',
    datetime: '',
    description: '',
    invitees: [],
    attendees: [],
    hostMeta: {
      name: 'Kiwi', // to update to dog.name
      mainImgPath: 'thiswillbeaURL', // to update to dog.mainImgPath
    },
    location: {
      address1: '',
      address2: '',
      city: '',
      state: '',
      postalCode: '',
    },
  };

  const [form, setForm] = useState(initial);

  const handleChange = (name, event) => {
    const { text } = event.nativeEvent;
    setForm({
      ...form,
      [name]: text,
    });
  };

  const handleLocationChange = (name, event) => {
    const { text } = event.nativeEvent;
    setForm({
      ...form,
      location: {
        ...form.location,
        [name]: text,
      },
    });
  };

  return (
    <Modal animationType="slide">
      <View style={styles.modalContainer}>
        <Text>Create Event</Text>
        <Text>Event name</Text>
        <TextInput
          style={styles.input}
          placeholder="Event name"
          onChange={(text) => handleChange('title', text)}
          value={form.title}
        />

        <Text>Event location</Text>
        <TextInput
          style={styles.input}
          placeholder="Address 1"
          onChange={(text) => handleLocationChange('address1', text)}
          value={form.location.address1}
        />
        <TextInput
          style={styles.input}
          placeholder="Address 2"
          onChange={(text) => handleLocationChange('address2', text)}
          value={form.location.address2}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          onChange={(text) => handleLocationChange('city', text)}
          value={form.location.city}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          onChange={(text) => handleLocationChange('state', text)}
          value={form.location.state}
        />
        <TextInput
          style={styles.input}
          placeholder="Zip Code"
          onChange={(text) => handleLocationChange('postalCode', text)}
          value={form.location.postalCode}
        />

        <Text>Event description</Text>
        <TextInput
          style={styles.input}
          placeholder="Event description"
          onChange={(text) => handleChange('description', text)}
          value={form.description}
        />
        <TouchableOpacity onPress={toggleModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
});
