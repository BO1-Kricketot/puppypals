import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example from './features/Example';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeLanding from './features/Home/HomeLanding.jsx';

import Profile from './features/Profile';

const Stack = createNativeStackNavigator();

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
