import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button,TouchableWithoutFeedback,Image, Modal, Pressable,  SafeAreaView, Dimensions, Platform, StatusBar, Switch } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import Slider from "react-native-sliders";
import Profile from './ProfileView.jsx'
import api from '../../api';
import axios from 'axios';

const {width, height, fontScale} = Dimensions.get('window');

const dummyPics = [
  {
    default: true,
    url: 'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
  },
  {
    default: false,
    url: 'https://i.ytimg.com/vi/xEDP5N5SNQM/maxresdefault.jpg',
  },
  {
    default: false,
    url: 'http://2.bp.blogspot.com/-o1Nlm1LBxD0/UKpxdFESiuI/AAAAAAAAKQg/6FynR1gMNqU/s1600/cute-puppy-pictures-901.jpg',
  },
  {
    default: false,
    url: 'http://3.bp.blogspot.com/-90Yj9zzFtn4/Tp-4Ai23riI/AAAAAAAAAhc/AvNYsJxGuuQ/s1600/Cute-Puppy-Dog.jpg',
  },
  {
    default: false,
    url: 'https://4.bp.blogspot.com/-f_ubVt0YDqs/VkyD1uolD5I/AAAAAAAAAiA/X2VaFT6cE0M/s1600/Q9.jpg',
  },
  {
    default: false,
    url: 'https://wallpapercave.com/wp/wp2480956.jpg',
  },
];

const dummyInfo = {

  dogName: 'Billie',
  dogBreed: 'Poodle',
  location: 'Chicago, IL',
  photos : dummyPics,
  peopleFriendly: true,
  dogFriendly: true,
  dogBio:
    'Billie is a sweety little snookums that loves to sniff butts and stuff. Yay!',
  ownerPic:
  'https://cdn.vox-cdn.com/thumbor/Q73rxBmj9RGeTpqoaxIpBJX-yGo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24472321/1244630992.jpg',
  ownerName: 'Peppy',
};
const dummyUsers = [{...dummyInfo, id: 1}, {...dummyInfo, id: 2}, {...dummyInfo, id: 3}, {...dummyInfo, id: 4}]



const HomeLanding = ({id}) => {
  const [picClicked, setPicClicked] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(()=>{
    Promise.all([axios.get('http://10.0.0.4:3000/api/dogs/6408d66fec97eb3b6680290f'), axios.get('http://10.0.0.4:3000/api/dogs/6408d66fec97eb3b6680290f/one')])
    .then((res)=>{
      console.log(res[1]);
    })
    .catch(err=> {
      console.log(err)
    })
  })

  return (
    <>
      {picClicked ? <Profile picClicked= {picClicked} setPicClicked={setPicClicked}/> : <SafeAreaView style={styles.container}>
    <View style={styles.userInfoContainer}>
          <View style={{ width: 50, height: 50, marginLeft: 20 }}>
            <Image
              style={styles.userPicContainer}
              source={{ uri: dummyInfo.ownerPic }}
            />
          </View>
          <View style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 10 }}>
            <Button title="..." onPress={()=> {setFilterVisible(true)}}></Button>
          </View>
        </View>
        <Modal animationType='fade'
        transparent={true}
        visible={filterVisible}
        >
          <View style= {{flex: 1, justifyContent: 'center', alignItems:'center', backgroundColor:'black', opacity:0.5, }}>
          <View>
          <View style={{ backgroundColor: 'white', opacity: 1}}>
          <View>
            <Text>Distance</Text>
            <View>
              <Slider 
              value={0}
              maximumValue={50}></Slider>
            </View>
          </View>
          <View>
          <Text>Size</Text>
          <Pressable>
            
            <Text>S</Text>
            <Text>M</Text>
            <Text>L</Text>
            
          </Pressable>
          </View>
          <View>
          <Text>Dog Friendliness</Text>
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{console.log('witch')}}
        value={true}
        />
        </View>
        <View>
          <Text>Human Friendliness</Text>
          <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={true ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={()=>{console.log('witch')}}
        value={true}
        />
        </View>
            <Button title='Apply Filter' onPress={()=>{console.log('setting Filter');
              setFilterVisible(!filterVisible)
            }}></Button>
            <Button title='X' onPress={()=>{setFilterVisible(!filterVisible)}}></Button>
          </View>
          </View>
          </View>
        </Modal>
    <View style ={{width: '100%', height: '100%', flex: 1,position: 'absolute', top: 0.08* height}}>
    <Swiper
    cards={dummyUsers}
    containerStyle={{backgroundColor: 'transparent', }}
    stackSize ={5}
    cardIndex={0}
    animateCardOpacity
    verticalSwipe={false}
    onSwipedRight = {()=>{console.log("right swipe")}}
    onSwipedLeft = {()=> {console.log("left swipe")}}
    onTapCard={(r)=>{setPicClicked(!picClicked)}}
    overlayLabels={{
      left: {
        title: '👎',
        style:{
          label: {
            textAlign: 'right'
          }
        }
      },
      right: {
        title: '👍',
        style:{
          label: {
            textAlign: 'left'
          }
        }
      }
    }}
    renderCard = {(card) =>
      (<View key={card.id} style={{backgroundColor:'white', height: '85%', position:'relative', borderColor: 'gray', borderWidth: 1, borderRadius: 4}}>
        <Image style ={{height: '100%', width: '100%', position: 'absolute', top: 0}} source ={{uri: card.photos[0].url}}></Image>
        <View style={{position: 'absolute', bottom: 0, display: 'flex',flexDirection: 'row', justifyContent:'space-between', backgroundColor: 'white', width: '100%', height: '10%', paddingTop: 8, paddingLeft: 6, paddingRight: 6}}>
          <Text>{card.dogName}</Text>
          <Text>3 miles away</Text>
        </View>
      </View>)
      }/>
      </View>
    {/* <View style={styles.navBar}>
      <Button
      title="DELETE ME"
      onPress={async () => console.log(await api.getCoordinates({
        address1: '123 Main St',
        address2: '',
        city: 'Los Angeles',
        state: 'CA',
        postalCode: '90012',
      }))}></Button>
    <Text>navBar</Text></View> */}
  </SafeAreaView>}
    </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" && StatusBar.currentHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'yellow',
    position: 'relative'
  },
  userInfoContainer: {
    backgroundColor: 'lightgray',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
  },
  userPicContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
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



// header: {
//   width: width,
//   backgroundColor: 'green',
//   height: '10%'
// },
// imgView: {
//   backgroundColor: 'blue',
//   height: '80%',
// },
// img: {
//   width: width - 10,
//   height: '100%',
//   backgroundColor: 'black'
// },

