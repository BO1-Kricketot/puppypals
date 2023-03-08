import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MoreImgsEditor({
  imgKey,
  moreImages,
  setMoreImages,
}) {
  console.log('moreImages: ', moreImages);
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
      setMoreImages(moreImages[imgKey] = result.assets[0].uri);
      console.log('moreImages is NOW: ', moreImages);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button
        title={imgKey > 4 ? 'Edit Main Pic' : 'Edit This Pic'}
        onPress={pickImage}
        style={{ width: 100, height: 100 }}
      />
      {moreImages && (
        <Image
          source={{ uri: moreImages[imgKey] }}
            // uri: `data:image/png;base64, ${moreImages[imgKey].toString()}`
            // uri: moreImages[imgKey].toString()
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
    width: 640,
    height: 640,
  },
});
