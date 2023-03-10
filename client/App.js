import { StatusBar } from 'expo-status-bar';
import Example from './features/Example';
import { StyleSheet, Text, View } from 'react-native';
import Profile from './features/Profile';
import Events from './features/Events';
import Messages from './features/Messages';

export default function App() {
  // GET the user's id to pass along to various pages
  // using this to test
  const simbaDog = '640953de8561912677bd1167';

  return (
    // <Events />
    <Messages />
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
