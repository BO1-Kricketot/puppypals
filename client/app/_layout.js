import { Tabs, Stack } from 'expo-router';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="home" options={{ href: '/home' }} />
      <Tabs.Screen name="profile" options={{ href: '/profile' }} />
    </Tabs>
  );
}
