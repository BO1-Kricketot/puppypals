import {
  Button,
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
  Alert,
} from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
const { width, height } = Dimensions.get('window');
import axios from 'axios';
import { API_URL } from '@env';

const CreateProfile = () => {
  const [dogName, setDogName] = useState();
  const [dogBreed, setDogBreed] = useState();
  const [dogProfPic, setDogProfPic] = useState();
  const [dogProfPic64, setDogProfPic64] = useState();
  const [dogPics, setDogPics] = useState([]);
  const [dogPics64, setDogPics64] = useState([]);
  const [energyLvl, setEnergyLvl] = useState();
  const [size, setSize] = useState();
  const [dogFriendliness, setDogFriendliness] = useState();
  const [humanFriendliness, setHumanFriendliness] = useState();
  const [bio, setBio] = useState();
  const [ownerName, setOwnerName] = useState();
  const [ownerPic, setOwnerPic] = useState();
  const [ownerPic64, setOwnerPic64] = useState();
  const [add1, setAdd1] = useState();
  const [add2, setAdd2] = useState('');
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [zip, setZip] = useState();
  const baseUrl = API_URL;

  const pickOwnerImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
      base64: true,
    });
    // console.log(result);
    if (!result.canceled) {
      setOwnerPic(result.assets[0].uri);
      setOwnerPic64(result.assets[0].base64);
    }
  };

  const pickDogProfImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
      base64: true,
    });
    // console.log(result);
    if (!result.canceled) {
      setDogProfPic(result.assets[0].uri);
      setDogProfPic64(result.assets[0].base64);
    }
  };
  const pickDogImages = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
      base64: true,
    });
    // console.log(result);
    if (!result.canceled && dogPics.length <= 5) {
      const picsCopy = dogPics.slice();
      const pics64Copy = dogPics64.slice();
      picsCopy.push(result.assets[0].uri);
      pics64Copy.push(result.assets[0].base64);
      setDogPics(picsCopy);
      setDogPics64(pics64Copy);
    }
  };
  const pressCreateProfile = () => {
    console.log('hit');
    if (
      !dogName ||
      !dogBreed ||
      !dogProfPic ||
      !bio ||
      !ownerName ||
      !ownerPic ||
      !add1 ||
      !city ||
      !state ||
      zip.length !== 5
    ) {
      Alert.alert('Please fill all fields');
    } else {
      let dogInfo = {
        dogId: 'bababababa',
        name: dogName,
        breed: dogBreed,
        mainImage: dogProfPic64,
        images: dogPics64,
        energy: energyLvl,
        size: size,
        isDogFriendly: dogFriendliness,
        isHumanFriendly: humanFriendliness,
        bio: bio,
        location: {
          address1: add1,
          address2: add2,
          city: city,
          state: state,
          postalCode: zip,
        },
        owner: {
          name: ownerName,
          image: ownerPic64,
        },
      };
      axios
        .post(`${baseUrl}/api/dogs`, dogInfo)
        .then((res) => null) // console.log(res))
        .catch((e) => console.log(e));
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <View>
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
            color="#7371FC"
          />
          {dogProfPic && (
            <Image
              source={{ uri: dogProfPic.toString() }}
              style={{ width: 140, height: 200 }}
            />
          )}
          <Text>Select up to 5 other pictures of your dog</Text>
          <Button
            title="Pick an image from camera roll"
            onPress={pickDogImages}
            color="#7371FC"
          />
          <View style={styles.picArrContainer}>
            {dogPics.length
              ? dogPics.map((pic, idx) => (
                  <Image
                    source={{ uri: pic.toString() }}
                    style={styles.picArr}
                    key={idx}
                  />
                ))
              : null}
          </View>
          <Picker
            selectedValue={energyLvl}
            onValueChange={(e) => setEnergyLvl(e)}>
            <Picker.Item label="Low" value="low" />
            <Picker.Item label="Medium" value="medium" />
            <Picker.Item label="High" value="high" />
          </Picker>
          <Picker selectedValue={size} onValueChange={(s) => setSize(s)}>
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
            color="#7371FC"
          />
          {ownerPic && (
            <Image
              source={{ uri: ownerPic.toString() }}
              style={{ width: 140, height: 200 }}
            />
          )}
          <Text>Enter Address Information</Text>
          <TextInput
            value={add1}
            onChangeText={setAdd1}
            placeholder="Enter Address Line 1"
            style={styles.inputs}
          />
          <TextInput
            value={add2}
            onChangeText={setAdd2}
            placeholder="Enter Address Line 2"
            style={styles.inputs}
          />
          <TextInput
            value={city}
            onChangeText={setCity}
            placeholder="Enter City"
            style={styles.inputs}
          />
          <TextInput
            value={state}
            onChangeText={setState}
            placeholder="Enter State"
            style={styles.inputs}
          />
          <TextInput
            value={zip}
            onChangeText={setZip}
            placeholder="Enter Zip Code"
            keyboardType="number-pad"
            style={styles.inputs}
          />
          <Button
            onPress={pressCreateProfile}
            style={styles.button}
            title="Create Profile"
            color="#7371FC"
            accessibilityLabel="Press here to create your profile"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: width,
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputs: {
    // width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#7371FC',
    padding: 3,
    margin: 3,
    alignItems: 'center',
  },
  dropdown: {
    // width: 'auto',
  },
  picArr: {
    flexDirection: 'row',
    width: 70,
    height: 100,
  },
  picArrContainer: {
    flexDirection: 'row',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
});

export default CreateProfile;
