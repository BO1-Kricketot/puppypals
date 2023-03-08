import React from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView, Dimensions, Platform, StatusBar} from 'react-native';

const {width, height} = Dimensions.get('window');
const ProfileView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text>Owner Info goes here</Text>
      </View>
      <View style={{backgroundColor:'blue', height: '40%'}}>
        <Image style={styles.img} source = {require('../../assets/adaptive-icon.png')}></Image>
      </View>
      <View style={styles.imageList}>
        
        <Image source = {require('../../assets/adaptive-icon.png')} style = {{height: '100%', width: '20%'}}></Image>
        <Image source = {require('../../assets/adaptive-icon.png')}  style = {{height: '100%', width: '20%'}}></Image>
        <Image source = {require('../../assets/adaptive-icon.png')} style = {{height: '100%', width: '20%'}}></Image>
        <Image source = {require('../../assets/adaptive-icon.png')}  style = {{height: '100%', width: '20%'}}></Image>
        <Image source = {require('../../assets/adaptive-icon.png')}  style = {{height: '100%', width: '20%'}}></Image>
      </View>
      <View style={{textAlign: 'left', backgroundColor: 'red', width: width - 20}}>
        <Text style={{fontSize: 20}}>Doggo name <Text style={{fontSize: 15}}>Doggo Breed</Text></Text>
        <Text style={{fontSize: 15}}>Doggo Location</Text>
      </View>
      <View style= {{height: 0.1 * height}}>
        <Text>Conditionally render stuff</Text>
      </View>
      <View><Text>Doggo Description</Text></View>
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
  img: {
    width: width - 20,
    height: '100%',
  },
  imageList: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    height: '10%',
    width: width - 20, 
    gap: 5
  },
  header: {
    width: width,
    backgroundColor: 'green',
    height: '8%'},
    navBar: {
      height: '10%',
      position: 'absolute',
      bottom: 0,
      width: width,
      backgroundColor: 'red'
    }
})
export default ProfileView;