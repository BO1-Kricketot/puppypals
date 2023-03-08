import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Example from './features/Example';
import Profile from './features/Profile';
import React from 'react';
// import Example from './features/Example';
import LogIn from './features/LogInSignUp/LogIn.js';
import CreateAccount from './features/LogInSignUp/CreateAccount.js';
import CreateProfile from './features/LogInSignUp/CreateProfile.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <CreateAccount />
    </SafeAreaView>
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
