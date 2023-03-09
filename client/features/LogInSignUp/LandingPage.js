import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  Dimensions,
  Platform,
  StatusBar,
} from 'react-native';
import DummyLogo from '../../assets/icon.png';
import Constants from 'expo-constants';
const { width, height } = Dimensions.get('window');
import { useRouter } from 'expo-router';

const LandingPage = () => {
  const router = useRouter();

  const goToLogIn = () => router.push('/login');
  const goToSignUp = () => router.push('/signup');

  return (
    <View>
      <Image Source={DummyLogo} alt="Doggy Logo" />
      <Button
        title="Log In"
        onPress={goToLogIn}
        color="#7371FC"
        accessibilityLabel="Press here to go to the log in page"
      />
      <Button
        title="Sign Up"
        onPress={goToSignUp}
        color="#7371FC"
        accessibilityLabel="Press here to go to the sign up page"
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

export default LandingPage;
