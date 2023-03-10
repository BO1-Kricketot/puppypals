import React, { useState, useEffect } from 'react';

import {
  Image,
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from '../../api';
import { useAuth } from '../../context/Provider.js';
import ModalContainer from './editProfile.js';

export default function Profile() {
  const [info, setInfo] = useState({});
  const [mainPic, setMainPic] = useState([]);
  const [morePics, setMorePics] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);

  // for testing dogs explicitly
  const dogId = '640953de8561912677bd1167';
  // const dogId = '640953de8561912677bd115b';

  // for reals
  // const { user } = useAuth();

  const {
    container,
    dogInfoContainer,
    editButton,
    friendlyContainer,
    friendlyItem,
    mainPicContainer,
    morePicsContainer,
    userInfoContainer,
    userPicContainer,
  } = profileStyles;

  const addImgBlanks = (blanks) => {
    const noImgPic = '../../assets/noPic1.png';
    const morePicsCopy = morePics.slice();
    const morePicsBlanks = Array(blanks).fill(noImgPic);
    setMorePics(morePicsCopy.concat(morePicsBlanks));
  };

  useEffect(() => {
    api
      .getUserProfile(dogId) //dogId for explicit testing, user for 'real'
      .then((profile) => {
        setInfo({ ...profile });
        setMainPic([profile?.mainImageUrl]);
        setMorePics([...profile.imageUrls]);
      })
      .catch((err) => console.error(err));
  }, [profileChanged]);

  return (
    <>
      <SafeAreaView style={container}>
        <View style={userInfoContainer}>
          <View style={{ width: 50, height: 50, marginLeft: 10 }}>
            <Image
              style={userPicContainer}
              source={{ uri: info?.owner?.imageUrl }}
            />
          </View>
          <Text style={{ marginLeft: 5, fontSize: 20, color: themeOffWhite }}>
            {info?.owner?.name}
          </Text>
          <View style={editButton}>
            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Image
                style={userPicContainer}
                source={{
                  uri: 'http://cdn.onlinewebfonts.com/svg/img_397968.png',
                }}
              />
            </Pressable>
          </View>
        </View>
        <View style={mainPicContainer}>{renderPics(mainPic, true)}</View>
        <View style={morePicsContainer}>
          {morePics.length < 5 && addImgBlanks(5 - morePics.length)}
          {renderPics(morePics, false)}
        </View>
        <View style={dogInfoContainer}>
          <ScrollView
            persistentScrollbar={true}
            style={{ marginTop: 12 }}
            removeClippedSubviews={true}>
            <Text
              style={{
                flex: 1,
                flexDirection: 'row',
                paddingLeft: 10,
                paddingBottom: 6,
                fontWeight: 600,
                fontSize: 30,
                color: themePurple,
              }}>
              {info.name}{' '}
              <Text
                style={{
                  paddingTop: 10,
                  fontWeight: 500,
                  fontSize: 20,
                  color: themeDkGrayText,
                }}>
                ({info.breed})
              </Text>
            </Text>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 500,
                paddingLeft: 10,
                paddingBottom: 6,
                color: themeLtGrayText,
              }}>
              {info?.location?.city}, {info?.location?.state}
            </Text>
            {info?.isHumanFriendly || info?.isDogFriendly ? (
              <View style={friendlyContainer}>
                {info.isHumanFriendly && (
                  <Text style={friendlyItem}>PEOPLE FRIENDLY</Text>
                )}
                {info.isDogFriendly && (
                  <Text style={friendlyItem}>DOG FRIENDLY</Text>
                )}
              </View>
            ) : null}
            <Text
              style={{
                fontSize: 15,
                paddingLeft: 10,
                paddingRight: 10,
                paddingTop: 6,
                color: themeLtGrayText,
              }}>
              {info?.bio}
            </Text>
          </ScrollView>
        </View>
        {modalVisible && (
          <ModalContainer
            info={info}
            setInfo={setInfo}
            mainPic={mainPic}
            setMainPic={setMainPic}
            morePics={morePics}
            setMorePics={setMorePics}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            profileChanged={profileChanged}
            setProfileChanged={setProfileChanged}
            profileStyles={profileStyles}
          />
        )}
      </SafeAreaView>
    </>
  );
}

const themeWhite = '#FFF';
const themeOffWhite = '#F4F4F6';
const themeNoPic = '#D9D9D9';
const themeViolet = '#E5D9F2';
const themePurple = '#7371FC';
const themeLtGrayText = '#66666E';
const themeDkGrayText = '#474747';

const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: themeOffWhite,
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  mainPicContainer: {
    flex: 4,
    marginTop: '2%',
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
  mainPic: {
    flex: 1,
    margin: '2%',
    borderRadius: 10,
  },
  morePicsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: '2%',
    marginLeft: '2%',
    marginRight: '2%',
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
  morePics: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2%',
    borderRadius: 10,
  },
  dogInfoContainer: {
    flex: 2,
    margin: '2%',
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
  userInfoContainer: {
    flex: 0.75,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
    backgroundColor: themePurple,
  },
  userPicContainer: {
    width: '95%',
    height: '95%',
    borderRadius: 75,
    marginTop: 1.5,
  },
  editButton: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
  },
  friendlyContainer: {
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  friendlyItem: {
    padding: 4,
    width: '40%',
    textAlign: 'center',
    backgroundColor: themeViolet,
    borderRadius: 8,
  },
  phNavContainer: {
    backgroundColor: 'violet',
    flex: 1,
    flexDirection: 'row',
  },
});

const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

const renderPics = (picList, isDefault) => {
  const { mainPic, morePics } = profileStyles;
  return picList.map((url, i) => {
    return (
      <Image
        key={i}
        style={isDefault ? mainPic : morePics}
        default={isDefault}
        src={url}
      />
    );
  });
};

const dummies = {
  dummyMainPic: [
    'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
  ],
  dummyMorePics: [
    'https://i.ytimg.com/vi/xEDP5N5SNQM/maxresdefault.jpg',
    'http://2.bp.blogspot.com/-o1Nlm1LBxD0/UKpxdFESiuI/AAAAAAAAKQg/6FynR1gMNqU/s1600/cute-puppy-pictures-901.jpg',
    'http://3.bp.blogspot.com/-90Yj9zzFtn4/Tp-4Ai23riI/AAAAAAAAAhc/AvNYsJxGuuQ/s1600/Cute-Puppy-Dog.jpg',
    'https://4.bp.blogspot.com/-f_ubVt0YDqs/VkyD1uolD5I/AAAAAAAAAiA/X2VaFT6cE0M/s1600/Q9.jpg',
    'https://wallpapercave.com/wp/wp2480956.jpg',
  ],
  dummyInfo: {
    dogName: 'Billie',
    dogBreed: 'Poodle',
    location: {
      // address1,
      // address2,
      city: 'Skagway',
      state: 'AK',
      // postalCode,
      // coordinates: {
      // lat,
      // lng,
      // },
    },
  },
};
