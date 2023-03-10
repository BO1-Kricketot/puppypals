import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Pressable,
  Platform,
  StatusBar,
  Dimensions,
  ScrollView,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height } = Dimensions.get('window');
//if you need to use the width and height for some reason

//pass in a dog object

export default function Profile({ picClicked, setPicClicked, currentUser }) {
  const isAndroid = Platform.OS === 'android';

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
    peopleFriendly: true,
    dogFriendly: true,
    dogBio:
      "Billie is a sweety little snookums that loves to sniff butts and stuff. Yay! Billie is a poodle and likes long walks on the beach. Or the treadmill. Billie is a silly billie, lulz. Do you like Billie's bio? Billie likes your bio, too!",
    ownerPic:
      'https://www.essence.com/wp-content/uploads/2014/01/images/2013/11/11/steve-harvey-show.jpg',
    ownerName: 'Peppy',
  };

  let dummyNav = [0, 0, 0, 0, 0];
  dummyNav = dummyNav.fill('https://reactnative.dev/img/tiny_logo.png', 0);

  const mainPhoto = renderPics(dummyPics, true);
  const otherPhotos = renderPics(dummyPics, false);
  const {
    mainPicContainer,
    morePicsAndNavContainer,
    imageContainer,
    userInfoContainer,
    userPicContainer,
  } = profileStyles;

  return (
    <>
      {currentUser && (
        <SafeAreaView style={profileStyles.container}>
          <View style={userInfoContainer}>
            <Text style={{ marginLeft: 10, fontSize: 20, color: '#FAFAFA' }}>
              {currentUser.owner.name}
            </Text>
            <View style={{ width: 50, height: 50, marginLeft: 20 }}>
              <Image
                style={userPicContainer}
                source={{ uri: currentUser.owner.imageUrl }}
              />
            </View>

            <Pressable
              style={{
                width: 40,
                height: 40,
                marginLeft: 'auto',
                marginRight: 10,
                borderRadius: 50,
                backgroundColor: '#F4F4F6',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                setPicClicked(!picClicked);
              }}>
              <Ionicons name={'close'} size={36} color={'#474747'} />
            </Pressable>
          </View>
          <View style={imageContainer}>
            <Swiper showsButtons={true} style={{}}>
              <View
                style={{
                  backgroundColor: 'yellow',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  style={{ width: '100%', height: '100%' }}
                  source={{ uri: currentUser.mainImageUrl }}></Image>
              </View>
              {currentUser.imageUrls.length &&
                currentUser.imageUrls.map((image, ind) => {
                  return (
                    <View key={ind}>
                      <Image
                        style={{ width: '100%', height: '100%' }}
                        source={{ uri: image }}></Image>
                    </View>
                  );
                })}
            </Swiper>
          </View>
          <View style={profileStyles.dogInfoContainer}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 6,
                justifyContent: 'flex-start',
              }}>
              <Text
                style={{ color: '#A594F9', fontWeight: 'bold', fontSize: 30 }}>
                {currentUser.name}{' '}
              </Text>
              <Text
                style={{
                  color: '#474747',
                  paddingTop: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                {currentUser.breed}
              </Text>
            </View>
            <Text style={{ fontSize: 15, fontWeight: 500, color: '#66666E' }}>
              {currentUser.location.city}, {currentUser.location.state}
            </Text>
            {currentUser.isHumanFriendly || currentUser.isDogFriendly ? (
              <View style={profileStyles.friendlyContainer}>
                {currentUser.isHumanFriendly && (
                  <Text style={profileStyles.friendlyItem}>
                    People friendly
                  </Text>
                )}
                {currentUser.isDogFriendly && (
                  <Text style={profileStyles.friendlyItem}>Dog friendly</Text>
                )}
              </View>
            ) : null}
            <Text style={{fontSize: 15, fontWeight: '500', marginTop: 4}}>Energy : <Text style={{fontWeight: 400}}>{currentUser.energy[0].toUpperCase()}{currentUser.energy.substring(1)}</Text></Text>
            <ScrollView
              persistentScrollbar={true}
              style={{ marginTop: 12 }}
              removeClippedSubviews={true}>
              <Text
                style={{
                  backgroundColor: 'white',
                  fontSize: 20,
                  paddingLeft: 13,
                  paddingRight: 13,
                  paddingTop: 6,
                  borderRadius: 10,
                  letterSpacing: 0.3,
                }}>
                {currentUser.bio}
              </Text>
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </>
  );
}

const profileStyles = StyleSheet.create({
  // holds everything else, flex val 1 fills avail space
  container: {
    backgroundColor: '#F4F4F6',
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  imageContainer: {
    flex: 4,
  },
  dogInfoContainer: {
    backgroundColor: '#F4F4F6',
    flex: 2,
    marginLeft: '2%',
    marginRight: '2%',
  },
  // 'fill 1 something-ths of the available space in (main) container'
  userInfoContainer: {
    backgroundColor: '#7371FC',
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    height: '20%',
  },
  userPicContainer: {
    width: '100%',
    height: '100%',
    borderColor: '#FAFAFA',
    borderWidth: 1,
    borderRadius: 75,
  },
  // 'fill 1 something-ths of the available space in (main) container'
  // --> except I'm NOT RENDERING it right now so it's NOT counted re: line 126-127
  friendlyContainer: {
    // padding: 2,
    margin: 6,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 40
  },
  friendlyItem: {
    padding: 4,
    width: '40%',
    textAlign: 'center',
    backgroundColor: '#CDC1FF',
    borderRadius: 8,
    fontSize: 15,
    fontWeight: 400,
  },
  // flex val 4 equates to 'fill 4 something-ths of the available space in (main) container'
  // mainPicContainer: {
  //   backgroundColor: '#F4F4F6',
  //   flex: 4,
  // },
  // 'fill the whole container' (which in this case is mainPicContainer)
  // mainPic: {
  //   flex: 1,
  //   margin: '2%',
  //   borderRadius: 10,
  // },
  // 'fill 1 something-ths of the available space in (main) container'
  // morePicsAndNavContainer: {
  //   backgroundColor: '#F4F4F6',
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // 'fill the whole container' (which in this case is morePicsContainer)
  // morePicsAndNav: {
  //   flex: 1,
  //   justifyContent: 'space-evenly',
  //   alignItems: 'center',
  //   margin: '1.2%',
  //   borderRadius: 10,
  // },
  // 'fill 2 something-th of the available space in (main) container'
  // phNavContainer: {
  //   backgroundColor: 'violet',
  //   flex: 1,
  //   flexDirection: 'row',
  // },
  // currently, in the main container, there are I think 8 'something-ths'
  // e.g. mainPicContainer will fill 4/8ths of the container
  //bgColor: deepPurple #7371FC //
  //lightPurple: #A594F9 //fontcolor
  //vealPurple": #CDC1FF
  //#474747 text color
  //#66666E gray color /dog breed
  //poppup model #FAFAFA
  //subtitle #E6E6E9
  //#F4F4F6 bg color
});

const renderPics = (picList, isDefault) => {
  const { mainPic, morePicsAndNav } = profileStyles;
  return picList
    .filter((pic) => pic.default === isDefault)
    .map((pic, i) => {
      return (
        <Image
          key={i}
          style={isDefault ? mainPic : morePicsAndNav}
          default={pic.default}
          src={pic.url}
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
