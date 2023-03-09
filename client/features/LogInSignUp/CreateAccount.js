import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Dimensions,
  Alert,
  Platform,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
const { width, height } = Dimensions.get('window');
import Constants from 'expo-constants';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [dob, setDob] = useState(new Date());
  const [showDatePick, setShowDatePick] = useState(false);
  const baseUrl = Constants.expoConfig.extra.apiUrl;

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
        .then((res) => console.log(res))
        .catch((e) => console.log('error in react', e));
    }
  };

  const changeDate = (e, selectedDate) => {
    setDob(selectedDate);
    setShowDatePick(false);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text>Create an Account</Text>
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
      {showDatePick ? (
        <DateTimePicker
          mode="date"
          value={dob}
          display="spinner"
          onChange={changeDate}
        />
      ) : (
        <Button
          onPress={() => setShowDatePick(true)}
          title="Set Date of Birth"
          color="#7371FC"
          style={styles.button}
        />
      )}
      <Button
        onPress={pressCreateAccount}
        style={styles.button}
        title="Create Account"
        color="#7371FC"
        accessibilityLabel="Press here to create your account"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: width,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
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
    borderColor: '#7371FC',
    padding: 3,
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  button: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginVertical: 10,
  },
});

export default CreateAccount;
