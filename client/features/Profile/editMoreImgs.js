import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MoreImgsEditor({
  imgKey,
  morePicsCopy,
  setMorePicsCopy,
  morePicsBase64,
  setMorePicsBase64,
}) {
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

      const newBase64List = morePicsBase64.slice();
      newBase64List[imgKey] = result.assets[0].base64;
      setMorePicsBase64([...newBase64List]);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Button title="Edit Pic" onPress={pickImage} />
      {morePicsCopy && (
        <Image
          source={{ uri: morePicsCopy[imgKey] }}
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
