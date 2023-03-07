import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Example from './features/Example';
import HomeLanding from './features/Home/HomeLanding.jsx';
import ProfileView from './features/Home/ProfileView.jsx';
import NewPorfile from './features/Home/NewPorfile.jsx';
import Profile from './features/Profile';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Example /> */}
      <HomeLanding/>
      {/* <NewPorfile/> */}
      {/* <ProfileView/> */}
      <StatusBar style="auto" />
    </View>
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
