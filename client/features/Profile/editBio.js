import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function BioEditor() {
  const [bio, setBio] = useState('current bio');

  return (
    <View style={bioStyles.container}>
      <View style={bioStyles.bioInput}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={40}
          onChangeText={(text) => setBio(text)}
          value={bio}
          style={{ padding: 10 }}
        />
      </View>
    </View>
  );
}

const bioStyles = StyleSheet.create({
  container: {
    backgroundColor: 'darkcyan',
    flex: 1,
  },
  bioInput: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
