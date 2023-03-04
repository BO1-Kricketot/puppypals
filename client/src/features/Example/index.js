import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import api from '../../api';
import Config from 'react-native-config';

export default function Example() {
  return (
    <View>
      <Text>Test Log</Text>
      <Button
        onPress={() => console.log(`Test successful! ${Config.API_URL}`)}
        title="TEST"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>GET</Text>
      <Button
        onPress={() =>
          api.getExample(
            {
              _id: 'example',
            },
            {
              column1: 'stuff1',
              column2: 3,
              column3: false,
            },
          )
        }
        title="GET"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>POST</Text>
      <Button
        onPress={() =>
          api.postToExample(
            {
              _id: 'example',
            },
            {
              column1: 'stuff1',
              column2: 3,
              column3: false,
            },
          )
        }
        title="POST"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
