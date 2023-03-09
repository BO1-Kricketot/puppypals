import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MainImgEditor({ imgKey, mainPicCopy, setMainPicCopy }) {
  // const ext = mainPicCopy[0].match(/\.(jpg|jpeg|png|gif|bmp)$/i)[1];
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    if (!result.canceled) {
      setMainPicCopy([result.assets[0].uri]);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button title="Edit Main Pic" onPress={pickImage} />
      {mainPicCopy && (
        <Image
          source={{ uri: mainPicCopy[0] }}
          // uri: `data:image/${ext};base64, ${mainPicCopy[0].base64}`
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
