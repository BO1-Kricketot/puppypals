import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Example from './features/Example';
import HomeLanding from './features/Home/HomeLanding.jsx';

import Profile from './features/Profile';



export default function App() {
  return (
    <><HomeLanding/></>
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
