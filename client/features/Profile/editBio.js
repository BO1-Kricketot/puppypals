import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function BioEditor({ dogBioCopy, setDogBioCopy }) {
  return (
    <View style={bioStyles.container}>
      <Text style={bioStyles.bioTitle}>
        Enter a new bio, or leave it the way it is:
      </Text>
      <View style={bioStyles.bioInput}>
        <TextInput
          editable
          multiline
          numberOfLines={8}
          onChangeText={(text) => setDogBioCopy(text)}
          value={dogBioCopy}
          placeholder={dogBioCopy}
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
  bioTitle: {
    fontStyle: 'italic',
    fontWeight: 600,
    marginLeft: '2%',
  },
  bioInput: {
    backgroundColor: 'lightgray',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
