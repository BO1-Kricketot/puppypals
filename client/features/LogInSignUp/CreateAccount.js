import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  Platform,
  StatusBar,
  Image,
} from 'react-native';
import React, { useState, useContext, createContext } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
import { API_URL } from '@env';
import { useRouter } from 'expo-router';
import DogLogo from '../../assets/dog.png';

export let id = null;

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePick, setShowDatePick] = useState(false);
  const baseUrl = API_URL;
  const router = useRouter();

  const pressCreateAccount = () => {
    // shows amout of time since 1/1/1970
    const age_dt = new Date(Date.now() - dob.getTime());
    if (email === '' || password === '' || password2 === '') {
      Alert.alert('Please fill all fields to continue');
    } else if (password !== password2) {
      Alert.alert('Passwords do not match!');
    } else if (age_dt.getFullYear() < 1988) {
      Alert.alert('Users must be over the age of 18!');
    } else {
      //submit info
      let userInfo = {
        email: email,
        password: password,
      };
      axios
        .post(`${baseUrl}/api/user/signup`, userInfo)
        .then((res) => {
          // console.log(res.data);
          id = res.data.id;
          router.push({
            pathname: '/createprofile',
            params: { id: res.data.id },
          });
        })
        .catch((e) => console.log('error in react', e));
    }
  };

  const changeDate = (e, selectedDate) => {
    setDob(selectedDate);
    setShowDatePick(false);
  };

  return (
    <View style={styles.root}>
      <Image source={DogLogo} alt="Doggy Logo" style={styles.logo} />
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          inputMode="email"
          keyboardType="email-address"
          style={styles.inputs}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          secureTextEntry={true}
          style={styles.inputs}
        />
        <TextInput
          value={password2}
          onChangeText={setPassword2}
          placeholder="Enter same password again"
          secureTextEntry={true}
          style={styles.inputs}
        />
        <Button
          onPress={() => setShowDatePick(true)}
          title="Set Date of Birth"
          color="#7371FC"
          style={styles.button}
        />
        {showDatePick ? (
          <DateTimePicker
            mode="date"
            value={dob}
            display="spinner"
            onChange={changeDate}
          />
        ) : null}
        <View style={{ height: 2 }}></View>
        <Button
          onPress={pressCreateAccount}
          style={styles.button}
          title="Create Account"
          color="#7371FC"
          accessibilityLabel="Press here to create your account"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    width: width,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'space-around',
  },
  logo: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
    maxHeight: 233.25,
    margin: 10,
  },
  inputs: {
    borderWidth: 1,
    borderRadius: 7,
    borderColor: '#7371FC',
    backgroundColor: 'white',
    padding: 3,
    marginVertical: 1,
    paddingHorizontal: 10,
  },
  inputContainer: {
    width: '80%',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
  },
});

export default CreateAccount;
