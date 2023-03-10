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
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import api from '../../../api';
import Constants from 'expo-constants';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { API_URL } from '@env';
import { parseISO, format } from 'date-fns';
import { dummyDogFriends } from '../sampleData.js';

export default function CreateEvent({ modal, toggleModal, dog }) {
  const initial = {
    title: '',
    datetime: '',
    description: '',
    invitees: [],
    attendees: [],
    hostMeta: {
      dogId: '1',
      name: 'Kiwi', // to update to dog.name
      mainImgPath: 'thiswillbeaURL', // to update to dog.mainImagePath
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
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedTime, setSelectedTime] = useState(new Date());
  const [showTimePicker, setShowTimePicker] = useState(false);

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
    setShowDatePicker(false);
    setSelectedDate(currentDate);
    const formattedDate = currentDate.toLocaleDateString();
    setForm({
      ...form,
      datetime: formattedDate,
    });
  };

  const handleTimeChange = (event, newTime) => {
    setShowTimePicker(false);
    if (newTime) {
      setSelectedTime(newTime);
      const formattedTime = newTime.toLocaleTimeString([], {
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
    axios
      .post(`${API_URL}/events`, form)
      .then((result) => {
        const eventId = result._id;
        axios
          .post(`${API_URL}/einvites`, { ...form, eventId })
          .then(() => console.info('Event posted'))
          .catch((err) => console.error(err));
        toggleModal();
        resetForm();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal animationType="slide">
      <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <SafeAreaView style={styles.modalContainer}>
        <Text style={styles.formHeader}>Create Event</Text>

        <View style={styles.formContainer}>
          <Text style={styles.formText}>Event name</Text>
          <TextInput
            style={styles.inputs}
            placeholder="  Event name"
            onChange={(text) => handleChange('title', text)}
            value={form.title}
          />

          <Text style={styles.formText}>Event date</Text>
          <TouchableOpacity onPress={() => setShowDatePicker(true)}>
            <TextInput
              style={styles.inputs}
              placeholder="  Event date"
              value={form.datetime}
              editable={false}
              onTouchStart={() => setShowDatePicker(true)}
            />
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display="default"
              onChange={handleDateChange}
            />
          )}

          <Text style={styles.formText}>Event start time</Text>
          <TouchableOpacity onPress={() => setShowTimePicker(true)}>
            <TextInput
              style={styles.inputs}
              placeholder="  Event start time"
              value={form.datetime}
              editable={false}
              onTouchStart={() => setShowTimePicker(true)}
            />
          </TouchableOpacity>

          {showTimePicker && (
            <DateTimePicker
              value={selectedTime}
              mode="time"
              display="default"
              onChange={handleTimeChange}
            />
          )}

          <Text style={styles.formText}>Event location</Text>
          <TextInput
            style={styles.inputs}
            placeholder="  Address 1"
            onChange={(text) => handleLocationChange('address1', text)}
            value={form.location.address1}
          />
          {/* <TextInput
            style={styles.inputs}
            placeholder="  Address 2"
            onChange={(text) => handleLocationChange('address2', text)}
            value={form.location.address2}
          /> */}
          <TextInput
            style={styles.inputs}
            placeholder="  City"
            onChange={(text) => handleLocationChange('city', text)}
            value={form.location.city}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  State"
            onChange={(text) => handleLocationChange('state', text)}
            value={form.location.state}
          />
          <TextInput
            style={styles.inputs}
            placeholder="  Zip Code"
            onChange={(text) => handleLocationChange('postalCode', text)}
            value={form.location.postalCode}
          />

          <Text style={styles.formText}>Event description</Text>
          <TextInput
            style={styles.inputs}
            placeholder="  Event description"
            onChange={(text) => handleChange('description', text)}
            value={form.description}
          />
          {/* <Text>Add Friends: </Text> */}
          {/* <TouchableOpacity style={styles.imageContainer}>
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
        </TouchableOpacity> */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleCreateEvent}>
              <Text style={styles.buttonText}>Create event</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={toggleModal}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      </ScrollView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  modalContainer: {
    backgroundColor: 'white',
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  formContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
  },
  formHeader: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    justifyContent: 'space-between',
    padding: 15,
    backgroundColor: 'white',
    fontSize: 20,
    fontWeight: 600,
    color: '#474747',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  formText: {
    margin: 3,
    marginLeft: 5,
    color: '#474747',
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#E6E6E9',
    backgroundColor: '#E6E6E9',
    padding: 3,
    margin: 3,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 25,
  },
  button: {
    width: '80%',
    borderRadius: 20,
    backgroundColor: '#7371FC',
    paddingHorizontal: 20,
    paddingVertical: 8,
    margin: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#7371FC',
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
