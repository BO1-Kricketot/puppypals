import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MainImgEditor({
  imgKey,
  mainPic,
  setMainPic,
}) {
  console.log('mainPic: ', mainPic);
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
        setMainPic([result.assets[0].uri]);
        console.log('mainPic is NOW: ', mainPic);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button
        title='Edit Main Pic'
        onPress={pickImage}
      />
      {mainPic && (
        <Image
          source={{ uri: mainPic[0] }}
            // uri: `data:image/png;base64,${mainPic[0].base64}`
            // uri: `data:image/png;base64,${mainPic[0].toString()}`
            // uri: mainPic[0].toString()
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
    borderRadius: 10,
    width: '80%',
    height: '80%',
    margin: '2%',
  },
});
