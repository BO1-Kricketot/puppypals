import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MoreImgsEditor({
  imgKey,
  morePics,
  setMorePics,
}) {
  console.log('morePics: ', morePics);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      // base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    console.log('pic is: ', result);

    if (!result.canceled) {
      const newPicList = morePics.slice();
      newPicList[imgKey] = result.assets[0].uri;
      console.log('newPicList is: ', newPicList);
      setMorePics([...newPicList]);
      console.log('morePics is NOW: ', morePics);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button
        title='Edit Pic'
        onPress={pickImage}
      />
      {morePics && (
        <Image
          source={{ uri: morePics[imgKey] }}
            // uri: `data:image/png;base64, ${morePics[imgKey].toString()}`
            // uri: morePics[imgKey].toString()
          style={imageStyles.pickImage}
        />
        )}
    </View>
  );
}

const imageStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickImage: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 10,
    width: '90%',
    height: '90%',
    margin: '2%',
  },
});
