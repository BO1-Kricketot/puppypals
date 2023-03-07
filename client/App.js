import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import React from 'react';
// import Example from './features/Example';
import LogIn from './features/LogInSignUp/LogIn.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <LogIn />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
