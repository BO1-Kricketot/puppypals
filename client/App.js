import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example from './features/Example';
import Profile from './features/Profile';
import Chat from './features/Chat'

export default function App() {
  return (
    // <Profile />
    <Chat />
    // <View style={styles.container}>
    //   <Example />
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    //   <Profile />
    // </View>
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
