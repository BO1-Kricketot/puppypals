import React from 'react';
import { Button, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function MainImgEditor({
  imgKey,
  mainPicCopy,
  setMainPicCopy,
  mainPicBase64,
  setMainPicBase64,
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
      setMainPicBase64(result.assets[0].base64);
      setMainPicCopy([result.assets[0].uri]);
    }
  };

  return (
    <View style={imageStyles.container}>
      <Pressable
        style={{
          borderRadius: 10,
          padding: 4,
          elevation: 2,
          marginTop: '0.5%',

          marginBottom: '0.5%',

          backgroundColor: themePurple,
        }}
        onPress={pickImage}>
        <Text
          style={{
            color: themeOffWhite,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Edit Main Pic
        </Text>
      </Pressable>
      {mainPicCopy && (
        <Image source={{ uri: mainPicCopy[0] }} style={imageStyles.pickImage} />
      )}
    </View>
  );
}

const themeWhite = '#FFF';
const themeOffWhite = '#F4F4F6';
const themeNoPic = '#D9D9D9';
const themeViolet = '#E5D9F2';
const themePurple = '#7371FC';
const themeLtGrayText = '#66666E';
const themeDkGrayText = '#474747';

const imageStyles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    backgroundColor: themeWhite,
  },
  pickImage: {
    flex: 1,
    borderRadius: 10,
    width: '80%',
    height: '80%',
    marginBottom: '2%',
  },
});
