import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get('window');
//if you need to use the width and height for some reason

//pass in a dog object

export default function Profile() {
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
      'Billie is a sweety little snookums that loves to sniff butts and stuff. Yay!',
    ownerPic:
      'https://akns-images.eonline.com/eol_images/Entire_Site/2020013/rs_1024x759-200113121440-1024-Steve-Harvey-Watch.jpg?fit=inside%7C900:auto&output-quality=90',
    ownerName: 'Peppy',
  };

  const mainPhoto = renderPics(dummyPics, true);
  const otherPhotos = renderPics(dummyPics, false);
  const { mainPicContainer, morePicsContainer } = profileStyles;

  return (
    <SafeAreaView style={profileStyles.container}>
      <View style={mainPicContainer}>{mainPhoto}</View>
      <View style={morePicsContainer}>{otherPhotos}</View>
      <View style={profileStyles.dogInfoContainer}>
        <Text>{dummyInfo.dogName}</Text>
        <Text>{dummyInfo.dogBreed}</Text>
        <Text>{dummyInfo.location}</Text>
        {dummyInfo.peopleFriendly && <Text>I'm people friendly!</Text>}
        {dummyInfo.dogFriendly && <Text>I'm dog friendly!</Text>}
      </View>
      <View style={profileStyles.userInfoContainer} />
      <View style={profileStyles.phNavContainer} />
    </SafeAreaView>
  );
}

function phNav() {}

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
  },
  dogInfoContainer: {
    backgroundColor: 'lightslategray',
    flex: 2,
  },
  userInfoContainer: {
    backgroundColor: 'darkslategray',
    flex: 1,
  },
  phNavContainer: {
    backgroundColor: 'violet',
    flex: 1,
  },
});

const renderPics = (picList, isDefault) => {
  const { mainPic, morePics } = profileStyles;
  return picList
    .filter((pic) => pic.default === isDefault)
    .map((pic, i) => {
      return (
        <Image
          key={i}
          style={isDefault ? mainPic : morePics}
          default={pic.default}
          src={pic.url}
        />
      );
    });
};
