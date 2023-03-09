import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MoreImgsEditor({
  imgKey,
  morePicsCopy,
  setMorePicsCopy,
}) {
  // const ext = morePicsCopy[imgKey].match(/\.(jpg|jpeg|png|gif|bmp)$/i)[1];
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    if (!result.canceled) {
      const newPicList = morePicsCopy.slice();
      newPicList[imgKey] = result.assets[0].uri;
      setMorePicsCopy([...newPicList]);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button title="Edit Pic" onPress={pickImage} />
      {morePicsCopy && (
        <Image
          source={{ uri: morePicsCopy[imgKey] }}
          // uri: `data:image/${ext};base64,${morePicsCopy[imgKey].base64}`
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