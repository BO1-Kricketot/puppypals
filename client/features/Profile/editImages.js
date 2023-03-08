import React, { useState } from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImageEditor({
  imgKey,
  mainImage,
  setMainImage,
  moreImages,
  setMoreImages,
}) {
  console.log('mainImage: ', mainImage);
  console.log('moreImages: ', moreImages);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      base64: true,
      allowsEditing: true,
      aspect: [7, 10],
      quality: 1,
    });

    console.log('pic is: ', result);

    if (!result.canceled) {
      if (imgKey > 4) {
        setMainImage(result.assets[0].uri);
        console.log('mainImage is NOW: ', mainImage);
      }
      else {
        setMoreImages(moreImages[imgKey] = result.assets[0].uri);
        console.log('moreImages is NOW: ', moreImages);
      }
    }
  };

  return (
    <View style={imageStyles.mainContainer}>
      <Button
        title={imgKey > 4 ? 'Edit Main Pic' : 'Edit This Pic'}
        onPress={pickImage}
        style={{ width: 100, height: 100 }}
      />
      {mainImage || moreImages && (
        <Image
          source={
            mainImage ? {
              // uri: `data:image/png;base64, ${mainImage[0].toString()}`
              // uri: mainImage[0].toString()
              uri: mainImage[0]
            }
            : {
              // uri: `data:image/png;base64, ${moreImages[imgKey].toString()}`
              // uri: moreImages[imgKey].toString()
              uri: moreImages[imgKey]
            }
          }
          style={imageStyles.pickImage}
        />
      )}
    </View>
  );
}

// function MoreImagesPicker({ moreImages, setMoreImages }) {
//   const pickImage = async () => {
//     // No permissions request is necessary for launching the image library
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       base64: true,
//       allowsEditing: true,
//       aspect: [7, 10],
//       quality: 1,
//     });

//     // console.log(result);

//     if (!result.canceled) {
//       setMoreImages(result.assets[0].uri);
//     }
//   };

//   return (
//     <View>
//       <Button
//         title="Replace Pic"
//         onPress={pickImage}
//         style={imageStyles.moreImgBtn}
//       />
//       {moreImages && (
//         <Image
//           source={{ uri: moreImages.toString() }}
//           style={imageStyles.mainImage}
//         />
//       )}
//     </View>
//   );
// }

const imageStyles = StyleSheet.create({
  mainContainer: {
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
