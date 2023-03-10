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
import { useRouter } from 'expo-router';
import { id } from './CreateAccount.js';
import { useAuth } from '../../context/Provider.js';

const CreateProfile = (props) => {
  const [dogName, setDogName] = useState();
  const [dogBreed, setDogBreed] = useState();
  const [dogProfPic, setDogProfPic] = useState();
  const [dogProfPic64, setDogProfPic64] = useState();
  const [dogPics, setDogPics] = useState([]);
  const [dogPics64, setDogPics64] = useState([]);
  const [energyLvl, setEnergyLvl] = useState('low');
  const [size, setSize] = useState('small');
  const [dogFriendliness, setDogFriendliness] = useState(true);
  const [humanFriendliness, setHumanFriendliness] = useState(true);
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
  const router = useRouter();
  const { signIn } = useAuth();
  // console.log(id);

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
    // console.log('hit');
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
        dogId: id,
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
        .then((res) => {
          // console.log(res.data);
          delete dogInfo.dogId;
          const newDog = { ...dogInfo, _id: res.data._id };
          signIn(newDog);
          router.push('/home');
        }) // console.log(res))
        .catch((e) => console.log(e));
    }
  };

  return (
    <ScrollView>
      <View style={styles.root}>
        <StatusBar
          backgroundColor="#F4F4F6"
          // barStyle="light-content"
        />
        <View style={styles.inputContainer}>
          <View style={{ height: 30 }} />
          <Text style={styles.text}>Enter your Dog's Information</Text>
          <View style={{ height: 25 }} />
          <View style={styles.inputSplit}>
            <TextInput
              value={dogName}
              onChangeText={setDogName}
              placeholder="Dog Name"
              style={[styles.inputs, { width: 150 }]}
            />
            <TextInput
              value={dogBreed}
              onChangeText={setDogBreed}
              placeholder="Dog Breed"
              style={[styles.inputs, { width: 150 }]}
            />
          </View>
          <TextInput
            // editable
            multiline
            numberOfLines={3}
            value={bio}
            onChangeText={setBio}
            placeholder="Dog Bio"
            style={[styles.inputs, { textAlignVertical: 'top' }]}
          />
          <View style={{ height: 10 }} />
          <Text style={{ fontSize: 16 }}>
            Select your dog's profile picture
          </Text>
          <View style={{ height: 3 }} />
          {dogProfPic ? (
            <>
              <View style={{ height: 3 }} />
              <Image
                source={{ uri: dogProfPic.toString() }}
                style={{ width: 140, height: 200, alignSelf: 'center' }}
                onPress={pickDogProfImage}
              />
            </>
          ) : (
            <Button
              title="Pick an image from camera roll"
              onPress={pickDogProfImage}
              color="#7371FC"
            />
          )}
          <View style={{ height: 10 }} />
          <Text style={{ fontSize: 16 }}>
            Select up to 5 other pictures of your dog
          </Text>
          <View style={{ height: 3 }} />
          <Button
            title="Pick an image from camera roll"
            onPress={pickDogImages}
            color="#7371FC"
          />
          <View style={{ height: 3 }} />
          <View style={styles.picArrContainer}>
            {dogPics.length
              ? dogPics.map((pic, idx) => (
                  <Image
                    source={{ uri: pic.toString() }}
                    style={[styles.picArr, { alignSelf: 'center' }]}
                    key={idx}
                  />
                ))
              : null}
          </View>
          <View style={{ height: 10 }} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Energy Level</Text>
            <Text>Size</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Picker
              selectedValue={energyLvl}
              onValueChange={(e) => setEnergyLvl(e)}
              style={[styles.dropdown, { width: 125 }]}
              dropdownIconColor="#7371FC">
              <Picker.Item label="Low" value="low" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="High" value="high" />
            </Picker>
            <Picker
              selectedValue={size}
              onValueChange={(s) => setSize(s)}
              style={[styles.dropdown, { width: 125 }]}
              dropdownIconColor="#7371FC">
              <Picker.Item label="Small" value="small" />
              <Picker.Item label="Medium" value="medium" />
              <Picker.Item label="Large" value="large" />
            </Picker>
          </View>
          <View style={{ height: 5 }} />
          <Text>Is your dog friendly with other dogs?</Text>
          <Picker
            selectedValue={dogFriendliness}
            onValueChange={(e) => setDogFriendliness(e)}
            style={[styles.dropdown]}>
            <Picker.Item label="Not Friendly" value={false} />
            <Picker.Item label="Friendly" value={true} />
          </Picker>
          <View style={{ height: 5 }} />
          <Text>Is your dog friendly with people?</Text>
          <Picker
            selectedValue={humanFriendliness}
            onValueChange={(e) => setHumanFriendliness(e)}
            style={styles.dropdown}>
            <Picker.Item label="Not Friendly" value={false} />
            <Picker.Item label="Friendly" value={true} />
          </Picker>
          <View style={{ height: 25 }} />
          <Text style={styles.text}>Enter your Information</Text>
          <View style={{ height: 25 }} />
          <TextInput
            value={ownerName}
            onChangeText={setOwnerName}
            placeholder="Your Name"
            style={styles.inputs}
          />
          <View style={{ height: 5 }} />
          <Text>Select your profile picture</Text>
          <View style={{ height: 3 }} />
          {ownerPic ? (
            <>
              <View style={{ height: 3 }} />
              <Image
                source={{ uri: ownerPic.toString() }}
                style={{ width: 140, height: 200, alignSelf: 'center' }}
              />
            </>
          ) : (
            <Button
              title="Pick an image from camera roll"
              onPress={pickOwnerImage}
              color="#7371FC"
            />
          )}
          <View style={{ height: 25 }}></View>
          <Text style={styles.text}>Enter Address Information</Text>
          <View style={{ height: 25 }}></View>
          <TextInput
            value={add1}
            onChangeText={setAdd1}
            placeholder="Address Line 1"
            style={styles.inputs}
          />
          <TextInput
            value={add2}
            onChangeText={setAdd2}
            placeholder="Address Line 2"
            style={styles.inputs}
          />
          <View style={styles.inputSplit}>
            <TextInput
              value={city}
              onChangeText={setCity}
              placeholder="City"
              style={[styles.inputs, { width: 90 }]}
            />
            <TextInput
              value={state}
              onChangeText={setState}
              placeholder="State"
              style={[styles.inputs, { width: 90 }]}
            />
            <TextInput
              value={zip}
              onChangeText={setZip}
              maxLength={5}
              placeholder="Zip Code"
              keyboardType="number-pad"
              style={styles.inputs}
            />
          </View>
          <View style={{ height: 30 }} />
          <Button
            onPress={pressCreateProfile}
            style={styles.button}
            title="Create Profile"
            color="#7371FC"
            accessibilityLabel="Press here to create your profile"
          />
          <View style={{ height: 50 }} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    width: width,
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    // justifyContent: 'space-around',
  },
  logo: {
    width: '50%',
    maxWidth: 300,
    maxHeight: 200,
  },
  inputs: {
    // width: '80%',
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#7371FC',
    padding: 3,
    margin: 2,
    alignItems: 'center',
    backgroundColor: 'white',
    paddingLeft: 10,
  },
  inputSplit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'space-between',
  },
  dropdown: {
    // width: 'auto',
    borderWidth: 1,
    borderRadius: 7,
    backgroundColor: 'white',
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
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default CreateProfile;
