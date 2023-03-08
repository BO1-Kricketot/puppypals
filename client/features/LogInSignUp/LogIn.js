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
} from 'react-native';
import DummyLogo from '../../assets/icon.png';
import axios from 'axios';
import api from '../../api';
const { width, height } = Dimensions.get('window');
import Constants from 'expo-constants';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const baseUrl = Constants.expoConfig.extra.apiUrl;

  const signInPress = () => {
    console.log('send login info');
    let logInData = {
      email: email,
      password: password,
    };
    axios
      .get(`${baseUrl}/api/user/login`)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  };

  return (
    <View style={styles.root}>
      <Text>Log In</Text>
      <Image
        Source={DummyLogo}
        alt="Dog Logo Here"
        style={[styles.logo, { height: height * 0.3 }]}
      />
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

export default LogIn;
