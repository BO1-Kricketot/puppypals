import React, { useState, useEffect } from 'react';
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
import DogLogo from '../../assets/dog.png';
import TextLogo from '../../assets/transpbgshadow.png';
import Constants from 'expo-constants';
const { width, height } = Dimensions.get('window');
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/Provider';

const LandingPage = () => {
  const router = useRouter();

  const goToLogIn = () => router.push('/login');
  const goToSignUp = () => router.push('/signup');

  const { user } = useAuth();

  useEffect(() => {
    // console.log(user);
  }, []);

  return (
    <View style={styles.root}>
      <Image source={DogLogo} alt="Doggy Logo" style={styles.logo} />
      {/* <Image source={TextLogo} alt="Puppy Pals" style={styles.textlogo} /> */}
      <View style={styles.buttonContainer}>
        <Button
          title="Log In"
          onPress={goToLogIn}
          color="#7371FC"
          accessibilityLabel="Press here to go to the log in page"
          style={styles.button}
        />
        <View style={{ height: 2 }}></View>
        <Button
          title="Sign Up"
          onPress={goToSignUp}
          color="#7371FC"
          accessibilityLabel="Press here to go to the sign up page"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    width: width,
    backgroundColor: '#F4F4F6',
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'space-around',
  },
  logo: {
    width: '100%',
    height: '100%',
    maxWidth: 300,
    maxHeight: 233.25,
    marginBottom: 82,
    // marginBottom: -100,
  },
  // textlogo: {
  //   maxWidth: 200,
  //   maxHeight: 112.5,
  // },
  logoContainer: {
    // justifyContent: 'space-between',
  },
  inputs: {
    width: '80%',
    borderWidth: 1,
    borderRadius: 5,
    padding: 3,
    marginVertical: 3,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    justifyContent: 'space-between',
    margin: 5,
    borderRadius: 10,
    width: '80%',
  },
  button: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 10,
    padding: 3,
    margin: 10,
    flex: 1,
  },
});

export default LandingPage;
