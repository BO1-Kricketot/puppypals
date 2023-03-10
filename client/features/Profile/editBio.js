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
          style={{
            margin: '2%',
            textAlignVertical: 'top',
            color: themeLtGrayText,
          }}
        />
      </View>
    </View>
  );
}

const themeWhite = '#FFF';
const themeLtGrayText = '#66666E';

const bioStyles = StyleSheet.create({
  container: {
    flex: 2,
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
  bioTitle: {
    marginLeft: '2%',
    marginTop: '2%',
    fontStyle: 'italic',
    fontWeight: 600,
    fontSize: 15,
    color: themeLtGrayText,
  },
  bioInput: {
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
});
