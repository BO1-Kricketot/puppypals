import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { dummyDogFriends } from '../sampleData.js';

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
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

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

  const handleDateChange = (event, newDate) => {
    const currentDate = newDate || selectedDate;
    setSelectedDate(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    setForm({
      ...form,
      datetime: formattedDate,
    });
  };

  const handleTimeChange = (event, selectedTime) => {
    if (selectedTime) {
      setTime(selectedTime);
      const formattedTime = selectedTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
      setForm({
        ...form,
        datetime: `${form.datetime} ${formattedTime}`,
      });
    }
  };

  const handleCreateEvent = () => {
    console.log('data saved');
    toggleModal();
    resetForm();
    // axios
    //   .post('/', form) // update endpoint here
    //   .then((result) => {
    //     console.info(result.status);
    //     toggleModal();
    //     resetForm();
    //   })
    //   .catch((err) => console.error(err));
  };

  return (
    <Modal animationType="slide">
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.formTitle}>Create Event</Text>
        <Text>Event name</Text>
        <TextInput
          style={styles.input}
          placeholder="Event name"
          onChange={(text) => handleChange('title', text)}
          value={form.title}
        />

        <Text>Event date</Text>
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />

        <Text>Event start time</Text>
        <DateTimePicker
          value={time}
          mode="time"
          display="default"
          onChange={handleTimeChange}
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
        <Text>Add Friends: </Text>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[0].mainImageUrl }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[1].mainImageUrl }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{ uri: dummyDogFriends[2].mainImageUrl }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleCreateEvent}>
          <Text>Create event</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleModal}>
          <Text>Close</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'purple',
    flex: 1,
  },
  formTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
  },
  image: {
    flex: 1,
    margin: '2%',
    borderRadius: 25,
    width: '100%',
  },
});
