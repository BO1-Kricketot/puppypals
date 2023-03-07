import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback,Image,  SafeAreaView, Dimensions, Platform, StatusBar } from 'react-native';

const {width, height, fontScale} = Dimensions.get('window');

const Dummy_Data = {
  uno : {
    id: 1,
    ownername : 'Yolo',
    url : ''
       
  }

}
const dummyInfo = {
  dogName: 'Billie',
  dogBreed: 'Poodle',
  location: 'Chicago, IL',
  peopleFriendly: true,
  dogFriendly: true,
  dogBio:
    'Billie is a sweety little snookums that loves to sniff butts and stuff. Yay!',
  ownerPic:
  'https://cdn.vox-cdn.com/thumbor/Q73rxBmj9RGeTpqoaxIpBJX-yGo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24472321/1244630992.jpg',
  ownerName: 'Peppy',
};

const HomeLanding = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}><Text>Hello darkness my old friend</Text></View>
      <View style= {styles.imgView}>
        <Image source = {require('../../assets/adaptive-icon.png')} style ={styles.img}/>
        <Text>Doggo Name</Text>
        <Text>Doggo Distance</Text>
      </View>
      <View style={styles.navBar}>
      <Text>navBar</Text></View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow'
  }, 
  header: {
    width: width,
    backgroundColor: 'green',
    height: '10%'
  },
  imgView: {
    backgroundColor: 'blue',
    height: '80%',
  },
  img: {
    width: width - 10,
    height: '100%',
    backgroundColor: 'black'
  }, 
  navBar: {
    height: '10%',
    position: 'absolute',
    bottom: 0,
    width: width,
    backgroundColor: 'red'
  }
})
export default HomeLanding;


// const profileStyles = StyleSheet.create({
//   container: {
//     backgroundColor: 'yellow',
//     flex: 1,
//     paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
//   },
//   mainPicContainer: {
//     backgroundColor: 'darkblue',
//     flex: 4,
//   },
//   mainPic: {
//     flex: 1,
//     margin: '2%',
//   },
//   morePicsContainer: {
//     backgroundColor: 'dodgerblue',
//     flex: 1,
//     flexDirection: 'row',
//   },
//   morePics: {
//     flex: 1,
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     margin: '2%',
//   },
//   dogInfoContainer: {
//     backgroundColor: 'lightslategray',
//     flex: 2,
//   },
//   userInfoContainer: {
//     backgroundColor: 'darkslategray',
//     flex: 1,
//   },
//   phNavContainer: {
//     backgroundColor: 'violet',
//     flex: 1,
//   },
// });