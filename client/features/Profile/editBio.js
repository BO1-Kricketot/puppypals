import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

export default function BioEditor({ bio, setBio }) {

  return (
    <View style={bioStyles.container}>
      <View style={bioStyles.bioInput}>
        <TextInput
          editable
          multiline
          numberOfLines={4}
          maxLength={80}
          onChangeText={(text) => setBio(text)}
          value={bio}
          placeholder={bio}
          style={{ margin: '2%' }}
        />
      </View>
    </View>
  );
}

const bioStyles = StyleSheet.create({
  container: {
    backgroundColor: 'darkcyan',
    flex: 2,
  },
  bioInput: {
    backgroundColor: 'lightgray',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
