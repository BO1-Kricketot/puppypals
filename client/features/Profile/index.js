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

export default function Profile({ dogId }) {
  const [info, setInfo] = useState({});
  const [mainPic, setMainPic] = useState([]);
  const [morePics, setMorePics] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [profileChanged, setProfileChanged] = useState(false);

  const dummyMainPic = [
    'http://3.bp.blogspot.com/-GfiMn3VSfnc/VigKnxj9x5I/AAAAAAAA9zI/CXLjzRlI2yA/s1600/boo2.jpg',
  ];

  const dummyMorePics = [
    'https://i.ytimg.com/vi/xEDP5N5SNQM/maxresdefault.jpg',
    'http://2.bp.blogspot.com/-o1Nlm1LBxD0/UKpxdFESiuI/AAAAAAAAKQg/6FynR1gMNqU/s1600/cute-puppy-pictures-901.jpg',
    'http://3.bp.blogspot.com/-90Yj9zzFtn4/Tp-4Ai23riI/AAAAAAAAAhc/AvNYsJxGuuQ/s1600/Cute-Puppy-Dog.jpg',
    'https://4.bp.blogspot.com/-f_ubVt0YDqs/VkyD1uolD5I/AAAAAAAAAiA/X2VaFT6cE0M/s1600/Q9.jpg',
    'https://wallpapercave.com/wp/wp2480956.jpg',
  ];

  const dummyInfo = {
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
    peopleFriendly: true,
    dogFriendly: true,
    dogBio:
      "Billie is a sweety little snookums that loves to sniff butts and stuff. Yay! Billie is a poodle and likes long walks on the beach. Or the treadmill. Billie is a silly billie, lulz. Do you like Billie's bio? Billie likes your bio, too!",
    ownerPic:
      'https://www.essence.com/wp-content/uploads/2014/01/images/2013/11/11/steve-harvey-show.jpg',
    ownerName: 'Peppy',
  };

  const {
    container,
    dogInfoContainer,
    editButton,
    friendlyContainer,
    friendlyItem,
    mainPicContainer,
    morePicsAndNavContainer,
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
    // GET the profile by id
    api
      .getUserProfile(dogId)
      .then((profile) => {
        setInfo({ ...profile });
        setMainPic([profile.mainImageUrl]);
        setMorePics([...profile.imageUrls]);
      })
      .catch((err) => console.error(err));
  }, [profileChanged]);

  return (
    <>
      <SafeAreaView style={container}>
        <View style={userInfoContainer}>
          <Text style={{ marginLeft: 10 }}>{info?.owner?.name}</Text>
          <View style={{ width: 50, height: 50, marginLeft: 20 }}>
            <Image
              style={userPicContainer}
              source={{ uri: info?.owner?.imageUrl }}
            />
          </View>
          <View style={editButton}>
            <Pressable onPress={() => setModalVisible(true)}>
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
        <View style={morePicsAndNavContainer}>
          {morePics.length < 5 && addImgBlanks(5 - morePics.length)}
          {renderPics(morePics, false)}
        </View>
        <View style={dogInfoContainer}>
          <Text>
            {dummyInfo.dogName} ({dummyInfo.dogBreed})
          </Text>
          <Text>
            {dummyInfo.location.city}, {dummyInfo.location.state}
          </Text>
          {dummyInfo.peopleFriendly || dummyInfo.dogFriendly ? (
            <View style={friendlyContainer}>
              {dummyInfo.peopleFriendly && (
                <Text style={friendlyItem}>I'm people friendly!</Text>
              )}
              {dummyInfo.dogFriendly && (
                <Text style={friendlyItem}>I'm dog friendly!</Text>
              )}
            </View>
          ) : null}
          <Text>{dummyInfo.dogBio}</Text>
        </View>
        {isAndroid && !modalVisible && (
          <View style={morePicsAndNavContainer}>{renderNav(dummyNav)}</View>
        )}
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
      {!isAndroid && !modalVisible && (
        <View style={morePicsAndNavContainer}>{renderNav(dummyNav)}</View>
      )}
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
    backgroundColor: 'darkblue',
    flex: 4,
  },
  mainPic: {
    flex: 1,
    margin: '2%',
    borderRadius: 10,
  },
  morePicsAndNavContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    flexDirection: 'row',
  },
  morePicsAndNav: {
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

const dummyNav = Array(5).fill('https://reactnative.dev/img/tiny_logo.png');
const { width, height } = Dimensions.get('window');
const isAndroid = Platform.OS === 'android';

const renderPics = (picList, isDefault) => {
  const { mainPic, morePicsAndNav } = profileStyles;
  return picList.map((url, i) => {
    return (
      <Image
        key={i}
        style={isDefault ? mainPic : morePicsAndNav}
        default={isDefault}
        src={url}
      />
    );
  });
};

const renderNav = (icons) => {
  const { morePicsAndNav } = profileStyles;
  return icons.map((icon, i) => (
    <Image key={i} src={icon} style={morePicsAndNav} />
  ));
};
