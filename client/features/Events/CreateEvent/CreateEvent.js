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
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

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
  const [dob, setDob] = useState(new Date());
  const [showDatePick, setShowDatePick] = useState(false);

  const resetForm = () => {
    setForm(initial);
  };

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

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePick(false);
    setDob(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    setForm({
      ...form,
      datetime: formattedDate,
    });
  };

  const handleCreateEvent = () => {
    axios
      .post('/', form) // update endpoint here
      .then((result) => {
        console.info(result.status);
        toggleModal();
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal animationType="slide">
      <View style={styles.modalContainer}>
        <Text style={styles.formTitle}>Create Event</Text>
        <Text>Event name</Text>
        <TextInput
          style={styles.input}
          placeholder="Event name"
          onChange={(text) => handleChange('title', text)}
          value={form.title}
        />

        <Text>Event date</Text>
        <TouchableOpacity onPress={() => setShowDatePick(true)}>
          <TextInput
            style={styles.input}
            placeholder="Event date"
            value={form.datetime}
            editable={false}
            onTouchStart={() => setShowDatePick(true)}
          />
        </TouchableOpacity>
        {showDatePick && (
          <DateTimePicker
            value={dob}
            mode="date"
            display="default"
            onChange={handleDateChange}
          />
        )}

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
        <TouchableOpacity onPress={handleCreateEvent}>
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
  formTitle: {
    backgroundColor: 'white',
  },
});
