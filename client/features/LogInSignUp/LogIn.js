import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  // View,
  Image,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import DummyLogo from '../../assets/icon.png';
// import Constants from 'expo-constants';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { height } = useWindowDimensions();

  const signInPress = () => {
    console.log('send login info');
  };

  return (
    <SafeAreaView style={styles.root}>
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

export default LogIn;
