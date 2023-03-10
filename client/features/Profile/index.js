import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const { width, height } = Dimensions.get('window');
//if you need to use the width and height for some reason

//pass in a dog object

export default function Profile({callback}) {
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
    userInfoContainer,
    userPicContainer,
  } = profileStyles;

  return (
    <>
      <SafeAreaView style={profileStyles.container}>
        <View style={userInfoContainer}>
          <Text style={{ marginLeft: 10 }}>{dummyInfo.ownerName}</Text>
          <View style={{ width: 50, height: 50, marginLeft: 20 }}>
            <TouchableOpacity onPress={callback}>
              <Image
                style={userPicContainer}
                source={{ uri: dummyInfo.ownerPic }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 10 }}>
          <Image
              style={userPicContainer}
              source={{ uri: 'http://cdn.onlinewebfonts.com/svg/img_397968.png'}}
            />
          </View>
        </View>
        <View style={mainPicContainer}>{mainPhoto}</View>
        <View style={morePicsAndNavContainer}>{otherPhotos}</View>
        <View style={profileStyles.dogInfoContainer}>
          <Text>
            {dummyInfo.dogName}
            <Text>{dummyInfo.dogBreed}</Text>
          </Text>
          <Text>{dummyInfo.location}</Text>
          {dummyInfo.peopleFriendly || dummyInfo.dogFriendly ? (
            <View style={profileStyles.friendlyContainer}>
              {dummyInfo.peopleFriendly && (
                <Text style={profileStyles.friendlyItem}>
                  I'm people friendly!
                </Text>
              )}
              {dummyInfo.dogFriendly && (
                <Text style={profileStyles.friendlyItem}>
                  I'm dog friendly!
                </Text>
              )}
            </View>
          ) : null}
          <Text>{dummyInfo.dogBio}</Text>
        </View>
        {isAndroid && (
          <View style={profileStyles.morePicsAndNavContainer}>
            {renderNav(dummyNav)}
          </View>
        )}
      </SafeAreaView>
      {!isAndroid && ( //conditionally render navbar to be at the bottom for android/ios
        <View style={profileStyles.morePicsAndNavContainer}>
          {renderNav(dummyNav)}
        </View>
      )}
    </>
  );
}

const profileStyles = StyleSheet.create({
  // holds everything else, flex val 1 fills avail space
  container: {
    backgroundColor: 'yellow',
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  // flex val 4 equates to 'fill 4 something-ths of the available space in (main) container'
  mainPicContainer: {
    backgroundColor: 'darkblue',
    flex: 4,
  },
  // 'fill the whole container' (which in this case is mainPicContainer)
  mainPic: {
    flex: 1,
    margin: '2%',
    borderRadius: 10,
  },
  // 'fill 1 something-ths of the available space in (main) container'
  morePicsAndNavContainer: {
    backgroundColor: 'dodgerblue',
    flex: 1,
    flexDirection: 'row',
  },
  // 'fill the whole container' (which in this case is morePicsContainer)
  morePicsAndNav: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    margin: '2%',
    borderRadius: 10,
  },
  // 'fill 2 something-th of the available space in (main) container'
  dogInfoContainer: {
    backgroundColor: 'lightslategray',
    flex: 2,
    marginLeft: '2%',
    marginRight: '2%',
  },
  // 'fill 1 something-ths of the available space in (main) container'
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
  // 'fill 1 something-ths of the available space in (main) container'
  // --> except I'm NOT RENDERING it right now so it's NOT counted re: line 126-127
  friendlyContainer: {
    // padding: 2,
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
  // currently, in the main container, there are I think 8 'something-ths'
  // e.g. mainPicContainer will fill 4/8ths of the container
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
  return icons.map((icon, i) => <Image key={i} src={icon} style={morePicsAndNav} />);
};
