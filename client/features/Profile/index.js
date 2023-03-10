import React, { useState, useEffect } from 'react';

import {
  Image,
  Dimensions,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from '../../api';

import ModalContainer from './editProfile.js';

export default function Profile() {
  const [info, setInfo] = useState({});
  const [mainPic, setMainPic] = useState([]);
  const [morePics, setMorePics] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);

  // for testing dogs explicitly
  // const dogId = '640953de8561912677bd1167';
  const dogId = '640953de8561912677bd115b';

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
    const noImgPic = '../assets/noPic1.png';
    const morePicsCopy = morePics.slice();
    const morePicsBlanks = Array(blanks).fill(noImgPic);
    setMorePics(morePicsCopy.concat(morePicsBlanks));
  };

  useEffect(() => {
    api
      .getUserProfile(dogId)
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
          <Text style={{ marginLeft: 10, fontSize: 20, color: '#FAFAFA' }}>
            {info?.owner?.name}
          </Text>
          <View style={{ width: 50, height: 50, marginLeft: 20 }}>
            <Image
              style={userPicContainer}
              source={{ uri: info?.owner?.imageUrl }}
            />
          </View>
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
          <Text>
            {info.name} ({info.breed})
          </Text>
          <Text>
            {info?.location?.city}, {info?.location?.state}
          </Text>
          {info?.isHumanFriendly || info?.isDogFriendly ? (
            <View style={friendlyContainer}>
              {info.isHumanFriendly && (
                <Text style={friendlyItem}>I'm people friendly!</Text>
              )}
              {info.isDogFriendly && (
                <Text style={friendlyItem}>I'm dog friendly!</Text>
              )}
            </View>
          ) : null}
          <Text>{info?.bio}</Text>
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
          />
        )}
      </SafeAreaView>
    </>
  );
}

const profileStyles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  mainPicContainer: {
    backgroundColor: '#F4F4F6',
    flex: 4,
  },
  mainPic: {
    flex: 1,
    margin: '2%',
    borderRadius: 10,
  },
  morePicsContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    flexDirection: 'row',
  },
  morePics: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2%',
    borderRadius: 10,
  },
  dogInfoContainer: {
    backgroundColor: 'lightslategray',
    flex: 2,
    marginLeft: '2%',
    marginRight: '2%',
  },
  userInfoContainer: {
    backgroundColor: 'lightgray',
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
  },
  userPicContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
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
    backgroundColor: 'white',
    borderRadius: 8,
  },
  phNavContainer: {
    backgroundColor: 'violet',
    flex: 1,
    flexDirection: 'row',
  },
  editButton: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 10,
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
