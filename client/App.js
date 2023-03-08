import Example from './features/Example';
import { StyleSheet, Text, View } from 'react-native';
// import Profile from './features/Profile';
import Events from './features/Events';

export default function App() {
  return (
    <Events />
    // <Profile />
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
