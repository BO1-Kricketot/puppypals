import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MainImgEditor({
  imgKey,
  mainImage,
  setMainImage,
}) {
  console.log('mainImage: ', mainImage);
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
        setMainImage([result.assets[0].uri]);
        console.log('mainImage is NOW: ', mainImage);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button
        title='Edit Main Pic'
        onPress={pickImage}
        style={{ width: 100, height: 100 }}
      />
      {mainImage && (
        <Image
          source={{ uri: mainImage[0] }}
            // uri: `data:image/png;base64,${mainImage[0].base64}`
            // uri: `data:image/png;base64,${mainImage[0].toString()}`
            // uri: mainImage[0].toString()
          style={imageStyles.pickImage}
        />
      )}
    </View>
  );
}

const imageStyles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pickImage: {
    flex: 1,
    width: 640,
    height: 640,
  },
});
