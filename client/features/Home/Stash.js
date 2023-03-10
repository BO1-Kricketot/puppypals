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
  photos: dummyPics,
  peopleFriendly: true,
  dogFriendly: true,
  dogBio:
    'Billie is a sweety little snookums that loves to sniff butts and stuff. Yay!',
  ownerPic:
    'https://cdn.vox-cdn.com/thumbor/Q73rxBmj9RGeTpqoaxIpBJX-yGo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/24472321/1244630992.jpg',
  ownerName: 'Peppy',
};
const dummyUsers = [
  { ...dummyInfo, id: 1 },
  { ...dummyInfo, id: 2 },
  { ...dummyInfo, id: 3 },
  { ...dummyInfo, id: 4 },
];