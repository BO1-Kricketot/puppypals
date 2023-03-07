import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';

const CreateProfile = () => {
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogPics, setDogPics] = useState([]);
  const [energyLvl, setEnergyLvl] = useState();
  const [size, dogSize] = useState();
  const [dogFriendliness, setDogFriendliness] = useState();
  const [humanFriendliness, setHumanFriendliness] = useState();
  const [bio, setBio] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPic, setOwnerPic] = useState({});

  return (
    <ScrollView>
      <SafeAreaView>
        <TextInput
          value={dogName}
          onChangeText={setDogName}
          placeholder="Enter Dog Name"
          inputMode="default"
          keyboardType="default"
          style={styles.inputs}
        />
        <TextInput
          value={dogBreed}
          onChangeText={setDogBreed}
          placeholder="Enter Dog Breed"
          inputMode="default"
          keyboardType="default"
          style={styles.inputs}
        />
        {/* insert pic upload here after finding out how */}
        {/* insert dropdown menus after finding out how */}
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Enter Dog Bio"
          inputMode="default"
          keyboardType="default"
          style={styles.inputs}
        />
        <TextInput
          value={ownerName}
          onChangeText={setOwnerName}
          placeholder="Enter Your Name"
          inputMode="default"
          keyboardType="default"
          style={styles.inputs}
        />
        {/* insert owner pic upload here */}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputs: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
});

export default CreateProfile;
