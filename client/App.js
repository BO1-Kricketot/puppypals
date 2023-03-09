import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Example from './features/Example';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeLanding from './features/Home/HomeLanding.jsx';

import Profile from './features/Profile';
import React from 'react';
// import Example from './features/Example';
import LandingPage from './features/LogInSignUp/LandingPage.js';
import LogIn from './features/LogInSignUp/LogIn.js';
import CreateAccount from './features/LogInSignUp/CreateAccount.js';
import CreateProfile from './features/LogInSignUp/CreateProfile.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
    <><HomeLanding/></>
    
=======
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CreateProfile />
    </SafeAreaView>
>>>>>>> origin/auth
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
