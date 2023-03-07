import {
  Button,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  useWindowDimensions,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

const CreateProfile = () => {
  const { height } = useWindowDimensions();
  const [dogName, setDogName] = useState('');
  const [dogBreed, setDogBreed] = useState('');
  const [dogProfPic, setDogProfPic] = useState();
  const [dogPics, setDogPics] = useState([]);
  const [energyLvl, setEnergyLvl] = useState();
  const [size, setSize] = useState();
  const [dogFriendliness, setDogFriendliness] = useState();
  const [humanFriendliness, setHumanFriendliness] = useState();
  const [bio, setBio] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [ownerPic, setOwnerPic] = useState();

  const pickOwnerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
      // base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      setOwnerPic(result.assets[0].uri);
    }
  };

  const pickDogProfImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
      // base64: true,
    });

    console.log(result);

    if (!result.canceled) {
      setDogProfPic(result.assets[0].uri);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <TextInput
          value={dogName}
          onChangeText={setDogName}
          placeholder="Enter Dog Name"
          style={styles.inputs}
        />
        <TextInput
          value={dogBreed}
          onChangeText={setDogBreed}
          placeholder="Enter Dog Breed"
          style={styles.inputs}
        />
        {/* insert pic upload here after finding out how */}
        <Text>Select your dog's profile picture</Text>
        <Button
          title="Pick an image from camera roll"
          onPress={pickDogProfImage}
        />
        {dogProfPic && (
          <Image
            source={{ uri: dogProfPic.toString() }}
            style={{ width: 200, height: 200 }}
          />
        )}
        <Picker
          selectedValue={energyLvl}
          onValueChange={(e) => setEnergyLvl(e)}>
          <Picker.Item label="Low" value="low" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="High" value="high" />
        </Picker>
        <Picker selectedValue={size} onValueChange={(e) => setSize(e)}>
          <Picker.Item label="Small" value="small" />
          <Picker.Item label="Medium" value="medium" />
          <Picker.Item label="Large" value="large" />
        </Picker>
        <Picker
          selectedValue={dogFriendliness}
          onValueChange={(e) => setDogFriendliness(e)}
          style={styles.dropdown}>
          <Picker.Item label="Not Friendly" value={false} />
          <Picker.Item label="Friendly" value={true} />
        </Picker>
        <Picker
          selectedValue={humanFriendliness}
          onValueChange={(e) => setHumanFriendliness(e)}>
          <Picker.Item label="Not Friendly" value={false} />
          <Picker.Item label="Friendly" value={true} />
        </Picker>
        <TextInput
          value={bio}
          onChangeText={setBio}
          placeholder="Enter Dog Bio"
          style={styles.inputs}
        />
        <TextInput
          value={ownerName}
          onChangeText={setOwnerName}
          placeholder="Enter Your Name"
          style={styles.inputs}
        />
        <Text>Select your profile picture</Text>
        <Button
          title="Pick an image from camera roll"
          onPress={pickOwnerImage}
        />
        {ownerPic && (
          <Image
            source={{ uri: ownerPic.toString() }}
            style={{ width: 200, height: 200 }}
          />
        )}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    // alignItems: 'center',
    width: '100%',
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputs: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginVertical: 3,
    alignItems: 'center',
  },
  dropdown: {
    // width: 'auto',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
});

export default CreateProfile;
