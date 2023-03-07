import {
  Button,
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
// import api from '../../api';
// import Constants from 'expo-constants';

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [dob, setDob] = useState('');

  const pressCreateAccount = () => {
    console.log('create account');
  };

  return (
    <SafeAreaView>
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
      {/* Find way to enter date */}
      <TextInput
        value={dob}
        onChangeText={setDob}
        placeholder="Enter your date of birth"
        style={styles.inputs}
      />
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

export default CreateAccount;
