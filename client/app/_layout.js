/* eslint-disable react/no-unstable-nested-components */
import { Tabs } from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'ios-paw' : 'ios-paw-outline';
          } else if (route.name === 'messages') {
            iconName = focused
              ? 'ios-chatbubble-ellipses'
              : 'ios-chatbubble-ellipses-outline';
          } else if (route.name === 'events') {
            iconName = focused ? 'ios-calendar' : 'ios-calendar-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#7371FC',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tabs.Screen
        name="index"
        options={{
          href: null,
          tabBarStyle:
            process.env.NODE_ENV === 'development'
              ? { display: 'flex' }
              : { display: 'none' },
        }}
      />
      <Tabs.Screen name="home" options={{ href: '/home' }} />
      <Tabs.Screen name="profile" options={{ href: '/profile' }} />
      <Tabs.Screen
        name="login"
        options={{ href: null, tabBarStyle: { display: 'none' } }}
      />
      <Tabs.Screen
        name="signup"
        options={{ href: null, tabBarStyle: { display: 'none' } }}
      />
      <Tabs.Screen
        name="createprofile"
        options={{ href: null, tabBarStyle: { display: 'none' } }}
      />
      <Tabs.Screen name="messages" options={{ href: '/messages' }} />
      <Tabs.Screen name="events" options={{ href: '/events' }} />
    </Tabs>
  );
}
