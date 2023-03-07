import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  useWindowDimensions,
} from 'react-native';
import DummyLogo from '../../assets/icon.png';
import Constants from 'expo-constants';

const LandingPage = () => {
  const goToLogIn = () => {
    console.log('go to log in');
  };
  const goToSignUp = () => {
    console.log('go to sign up');
  };

  return (
    <SafeAreaView>
      <Image Source={DummyLogo} alt="Doggy Logo hehe" />
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
    </SafeAreaView>
  );
};

export default LandingPage;
