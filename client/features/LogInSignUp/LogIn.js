import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  TextInput,
  Dimensions,
  StatusBar,
  Alert,
} from 'react-native';
import DogLogo from '../../assets/dog.png';
import axios from 'axios';
import api from '../../api';
const { width, height } = Dimensions.get('window');
import { API_URL } from '@env';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/Provider.js';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl = API_URL;
  const router = useRouter();
  const { signIn } = useAuth();

  const signInPress = () => {
    // console.log('send login info');
    let logInData = {
      email: email,
      password: password,
    };
    axios
      .post(`${baseUrl}/api/user/login`, logInData)
      .then((res) => {
        signIn();
        router.replace('/home');
      }) // use navigator to send user to app or alert w/ message if not
      .catch((e) => {
        // console.log(e.response.data);
        if (e.response.data.message === 'User not found.') {
          Alert.alert('User not found');
        } else if (e.response.data.message === 'Wrong Password') {
          Alert.alert('Wrong Password');
        }
      });
  };

  return (
    <View style={styles.root}>
      {/* <Text>Log In</Text> */}
      <Image
        source={DogLogo}
        // alt="Dog Logo Here"
        style={styles.logo}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          inputMode="email"
          keyboardType="email-address"
          style={styles.inputs}
        />
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={true}
          style={styles.inputs}
        />
        <Button
          onPress={signInPress}
          style={styles.button}
          title="Sign In"
          color="#7371FC"
          accessibilityLabel="Press here to log in"
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
    marginBottom: 52,
  },
  inputs: {
    // width: '80%',
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
    // borderWidth: 1,
    borderRadius: 9999,
    padding: 3,
  },
});

export default LogIn;
