import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MainImagePicker({ mainImage, setMainImage }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setMainImage(result.assets[0].uri);
    }
  };

  return (
    <View style={imageStyles.mainContainer}>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
      />
      {mainImage && (
        <Image
          source={{ uri: mainImage.toString() }}
          style={imageStyles.mainImage}
        />
      )}
    </View>
  );
}

function MoreImagesPicker({ moreImages, setMoreImages }) {
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    // console.log(result);

    if (!result.canceled) {
      setMoreImages(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Button
        title="Pick an image from camera roll"
        onPress={pickImage}
        style={imageStyles.moreImgBtn}
      />
      {moreImages && (
        <Image
          source={{ uri: moreImages.toString() }}
          style={imageStyles.mainImage}
        />
      )}
    </View>
  );
}

const imageStyles = StyleSheet.create({
  mainContainer: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    flex: 1,
    width: 640,
    height: 640,
  },
  moreImgBtn: {
    flex: 1,
    padding: '5%'
  },
});

const pickImage = async () => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    base64: true,
    allowsEditing: true,
    aspect: [7, 10],
    quality: 1,
  });

  // console.log(result);

  if (!result.canceled) {
    setMainImage(result.assets[0].uri);
  }
};