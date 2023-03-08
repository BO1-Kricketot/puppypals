import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Link href="/home">Home</Link>
      <Link href="/profile">Profile</Link>
    </>
  );
};

export default NavBar;
