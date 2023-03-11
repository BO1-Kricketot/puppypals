import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  Switch,
} from 'react-native';
import Swiper from 'react-native-deck-swiper';
import { Slider } from '@miblanchard/react-native-slider';
import SelectDropdown from 'react-native-select-dropdown';
import Profile from './ProfileView.jsx';
import api from '../../api';
import axios from 'axios';
import { API_URL } from '@env';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width, height, fontScale } = Dimensions.get('window');

const applyFilter = (filterName, filterValue, usersArray) => {
  return usersArray.filter((dog) => {
    return dog.filterName === filterValue;
  });
};
import { useAuth } from '../../context/Provider';

const Home = ({ navigation }) => {
  const [picClicked, setPicClicked] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [userProfile, setUserProfile] = useState({});
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [update, setUpdate] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const [match, setMatch] = useState(false);
  const [sliderValue, setSliderValue] = useState(0);
  //Filter States
  //* */
  const [applyFilter, setApplyFilter] = useState(false);
  const [filterParams, setFilterParams] = useState('');

  const [dogFriendlinessFilter, setDogFriendlinessFilter] = useState(false);
  const [humanFriendlinessFilter, setHumanFriendlinessFilter] = useState(false);
  const [energyFilter, setEnergyFilter] = useState(0);
  const [distanceFilter, setDistanceFilter] = useState(0);
  const [sizeFilter, setSizeFilter] = useState(0);
  const [buttonPressed, setButtonPressed] = useState(0);
  const [totalFilter, setTotalFilter] = useState(0);
  //* */
  const { user } = useAuth();

  useEffect(() => {
    Promise.all([
      applyFilter
        ? axios.get(`${API_URL}/api/dogs/${user._id}?${filterParams}`)
        : axios.get(`${API_URL}/api/dogs/${user._id}`),
      axios.get(`${API_URL}/api/dogs/${user._id}/one`),
    ])
      .then((res) => {
        setUsers(res[0].data);
        setUserProfile(res[1].data);
        setCurrentUser(res[0].data[0] || '');
      })
      .catch((err) => {
        console.log(err);
      });
  }, [update]);

  // const { user } = useAuth();
  //need this to be the id
  //6408d66fec97eb3b6680291a
  //maybe implement it later, since it doesn't matter for the moment
  const onSwipeLeft = (users, currentSwipe) => {
    if (users.rejectedDogs) {
      users.rejectedDogs.push(currentSwipe._id.toString());
    } else {
      users.rejectedDogs = [currentSwipe._id.toString()];
    }
  };
  const onSwipeRight = (user, currentSwipe) => {
    if (currentSwipe.pendingDogs) {
      if (currentSwipe.pendingDogs.includes(user._id.toString())) {
        setMatch(true);
        setCurrentUser(currentSwipe);
        console.log('Its a match');
        user.friendsList
          ? user.friendsList.push(currentSwipe._id.toString())
          : (user.friendsList = [currentSwipe._id.toString()]);
        axios
          .patch(`${API_URL}/api/dogs/${user._id.toString()}`, user, {
            headers: {
              'Content-type': 'application/json',
            },
          })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        user.pendingDogs
          ? user.pendingDogs.push(currentSwipe._id.toString())
          : (user.pendingDogs = [currentSwipe._id.toString()]);
      }
    } else {
      user.pendingDogs
        ? user.pendingDogs.push(currentSwipe._id.toString())
        : (user.pendingDogs = [currentSwipe._id.toString()]);
    }
    axios
      .patch(`${API_URL}/api/dogs/${user._id.toString()}`, user, {
        headers: {
          'Content-type': 'application/json',
        },
      })
      .then((res) => {
        //updated Doggo if needed
        console.log(res.data);
        console.log('Updated Doggo');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 6408d66fec97eb3b6680290f has pendingDogs: [
  //   '6408d66fec97eb3b6680290c',
  //   '6408d66fec97eb3b66802919',
  //   '6408d66fec97eb3b6680291a'
  // ]
  // const filterDogs = (filter) => {
  //   if (dogFriendlinessFilter) {
  //     let filteredUsers = users.filter((user) => {
  //       return user.dogFriendlinessFilter === true;
  //     });
  //     setUsers(filteredUsers);
  //   }
  // }
  return (
    <>
      {picClicked ? (
        <Profile
          picClicked={picClicked}
          setPicClicked={setPicClicked}
          currentUser={currentUser}
        />
      ) : users.length ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.userInfoContainer}>
            <View style={{ width: 50, height: 50, marginLeft: 20 }}>
              <Image
                style={styles.userPicContainer}
                source={{ uri: '../../assets/splash.png' }}
              />
            </View>
            <View
              style={{
                marginLeft: 'auto',
                marginRight: 10,
              }}>
              <Pressable
                style={{
                  backgroundColor: '#A594F9',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#FAFAFA',
                  padding: 10,
                }}
                onPress={() => {
                  setFilterVisible(true);
                }}>
                <Text
                  style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>
                  ...
                </Text>
              </Pressable>
            </View>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={filterVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#66666E',
                opacity: 0.9,
              }}>
              <View
                style={{
                  backgroundColor: '#F4F4F6',
                  width: '80%',
                  height: '80%',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#E6E6E9',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 30,
                  paddingRight: 20,
                }}>
                <View style={{ width: '100%' }}>
                  <Slider
                    value={sliderValue}
                    minimumValue={0}
                    maximumValue={50}
                    step={5}
                    onValueChange={(value) => {
                      setSliderValue(value);
                      // console.log(sliderValue)
                      // if (value > 0) {
                      //   setTotalFilter((totalFilter)=>{
                      //     console.log(totalFilter)
                      //     return totalFilter + 1;
                      // })
                      //   setSliderValue(value);
                      // } else if (value === 0) {
                      //   setTotalFilter((totalFilter)=>
                      //     totalFilter - 1
                      //   )
                      //   setSliderValue(value);
                      // }
                    }}
                    onSlidingComplete={(value) => {
                      if (value[0]) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter + 1;
                        });
                        setFilterParams(`dist=${value}`);
                        // setDistanceFilter(value);
                      } else if (value[0] === 0) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter - 1;
                        });
                        // setDistanceFilter(value);
                        setFilterParams('');
                      }
                    }}
                    thumbTintColor={'#CDC1FF'}
                    minimumTrackTintColor={'#7371FC'}
                    containerStyle={{ width: '90%' }}
                  />
                  <Text style={{ fontSize: 18 }}>
                    Distance: <Text>{`${sliderValue} miles`}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 18, marginRight: 30 }}>Size:</Text>
                  <SelectDropdown
                    data={['Select a Size', 'Small', 'Medium', 'Large']}
                    defaultValueByIndex={sizeFilter}
                    buttonStyle={{
                      width: '70%',
                      backgroundColor: '#CDC1FF',
                      borderwidth: 1,
                      borderRadius: 10,
                    }}
                    dropdownStyle={{ backgroundColor: '#FAFAFA' }}
                    dropdownBackgroundColor="#CDC1FF"
                    selectedRowStyle={{ backgroundColor: '#7371FC' }}
                    onSelect={(selectedItem, index) => {
                      if (index) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`size=${selectedItem.toLowerCase()}`);
                      } else if (index === 0) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                        // setSizeFilter('');
                      }
                      setSizeFilter(index);
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 18, marginRight: 10 }}>Energy:</Text>
                  <SelectDropdown
                    data={['Select Energy Level', 'Low', 'Medium', 'High']}
                    defaultValueByIndex={energyFilter}
                    buttonStyle={{
                      width: '70%',
                      backgroundColor: '#CDC1FF',
                      borderwidth: 1,
                      borderRadius: 10,
                    }}
                    dropdownStyle={{ backgroundColor: '#FAFAFA' }}
                    dropdownBackgroundColor="#CDC1FF"
                    selectedRowStyle={{ backgroundColor: '#7371FC' }}
                    onSelect={(selectedItem, index) => {
                      if (index) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`energy=${selectedItem.toLowerCase()}`);
                        // setEnergyFilter(selectedItem.toLowerCase());
                      } else if (index === 0) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                        // setEnergyFilter('');
                      }
                      setEnergyFilter(index);
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.filterTitle}>Dog Friendliness:</Text>
                  <Switch
                    trackColor={{ false: '#FAFAFA', true: '#7371FC' }}
                    thumbColor={true ? '#CDC1FF' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) => {
                      setDogFriendlinessFilter(value);
                      if (value) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`isDogFriendly=${value}`);
                      } else if (!value) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                      }
                    }}
                    value={dogFriendlinessFilter}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.filterTitle}>Human Friendliness:</Text>
                  <Switch
                    trackColor={{ false: '#FAFAFA', true: '#7371FC' }}
                    thumbColor={true ? '#CDC1FF' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) => {
                      setHumanFriendlinessFilter(value);
                      if (value) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter + 1;
                        });
                        setFilterParams(`isHumanFriendly=${value}`);
                      } else if (!value) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                      }
                    }}
                    value={humanFriendlinessFilter}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    style={{
                      width: '40%',
                      height: 60,
                      backgroundColor: '#7371FC',
                      borderWidth: 2,
                      borderColor: '#7371FC',
                      borderRadius: 10,
                      margin: 10,
                    }}
                    // disabled = {!applyFilter}
                    onPress={() => {
                      if (totalFilter > 1) {
                        console.log(filterParams);
                        console.log('Too many filters');
                      } else if (totalFilter === 0) {
                        console.log('no filter applied');

                        // setFilterVisible(!filterVisible);
                      } else if (totalFilter === 1) {
                        setFilterVisible(!filterVisible);
                        console.log(filterParams);
                        setUpdate(!update);
                        setApplyFilter(true);
                      }
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 20,
                        fontWeight: '400',
                      }}>
                      Apply Filter
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      width: '38%',
                      height: 60,
                      backgroundColor: '#7371FC',
                      borderWidth: 2,
                      borderColor: '#7371FC',
                      borderRadius: 10,
                      margin: 10,
                    }}
                    android_ripple={{ color: '#7371FC' }}
                    onPress={() => {
                      setFilterVisible(!filterVisible);
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 20,
                        fontWeight: '400',
                      }}>
                      Cancel
                    </Text>
                  </Pressable>
                </View>
                <View>
                  {totalFilter > 1 ? (
                    <Text>Please only apply a single filter at once</Text>
                  ) : totalFilter < 1 ? (
                    <Text>No filter applied</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </Modal>
          {users[startIndex] ? (
            <View
              style={{
                width: '100%',
                height: '100%',
                flex: 1,
                position: 'absolute',
                top: 0.065 * height,
              }}>
              <Swiper
                cards={users.length ? users : []}
                containerStyle={{ backgroundColor: 'transparent' }}
                stackSize={5}
                cardIndex={startIndex}
                animateCardOpacity
                verticalSwipe={false}
                onSwipedRight={() => {
                  console.log('right swipe');
                  onSwipeRight(userProfile, users[startIndex]);
                  setStartIndex(startIndex + 1);
                }}
                onSwipedLeft={() => {
                  console.log('left swipe');
                  setStartIndex(startIndex + 1);
                }}
                onTapCard={(r) => {
                  setCurrentUser(users[startIndex]);
                  setPicClicked(!picClicked);
                }}
                overlayLabels={{
                  left: {
                    title: '👎',
                    style: {
                      label: {
                        textAlign: 'right',
                      },
                    },
                  },
                  right: {
                    title: '👍',
                    style: {
                      label: {
                        textAlign: 'left',
                      },
                    },
                  },
                }}
                renderCard={(card, index) => (
                  <View
                    key={card?._id.toString()}
                    style={{
                      backgroundColor: 'white',
                      height: '90%',
                      position: 'relative',
                      display: 'flex',
                    }}>
                    <Image
                      style={{
                        height: '100%',
                        width: '100%',
                        // position: 'absolute',
                        // top: 0,
                        borderWidth: 1,
                        borderRadius: 10,
                      }}
                      source={{ uri: card?.mainImageUrl }}
                    />
                    <View
                      style={{
                        position: 'absolute',
                        bottom: 1,
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        backgroundColor: 'white',
                        width: '100%',
                        height: '10%',
                        paddingLeft: 6,
                        paddingRight: 6,
                        borderWidth: 1,
                        borderTopWidth: 0,
                        borderTopLeftRadius: 0,
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 10,
                      }}>
                      <Text
                        style={{
                          fontSize: 30,
                          color: '#A594F9',
                          fontWeight: 'bold',
                        }}>
                        {card?.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: '#66666E',
                          fontWeight: '400',
                        }}>
                        {card?.distanceFrom} miles away
                      </Text>
                    </View>
                  </View>
                )}
              />
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#E5D9F2',
                position: 'absolute',
                top: 87,
                bottom: 0,
              }}>
              <Text
                style={{ fontSize: 50, color: '#474747', fontWeight: 'bold' }}>
                No Pals Found 😭
              </Text>
              <Text style={{ fontSize: 20, color: '#474747' }}>
                Please apply different filter or check back later
              </Text>
            </View>
          )}
          <Modal
            animationType="slide"
            transparent={true}
            visible={match}
            onRequestClose={() => {
              setMatch(!match);
            }}>
            <View
              style={{
                backgroundColor: '#A594F9',
                width: width,
                height: height,
                opacity: 0.9,
              }}>
              {/* Modal Close for Match screen */}
              <Pressable
                style={{
                  position: 'absolute',
                  right: 20,
                  top: 20,
                  width: '20%',
                  width: width,
                  backgroundColor: '#A594F9',
                  opacity: 0.1,
                  height: height,
                }}
                onPress={() => {
                  setMatch(!match);
                }}></Pressable>
              <View style={{ marginTop: 80 }}>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: 50,
                    fontStyle: 'italic',
                    textAlign: 'center',
                    color: '#F4F4F6',
                  }}>
                  Pawsome 🐾
                </Text>
                <Text
                  style={{
                    fontWeight: 400,
                    fontSize: 30,
                    textAlign: 'center',
                    color: '#E6E6E9',
                  }}>
                  You and {currentUser?.name} are a pawfect match
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    height: '50%',
                    width: '80%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginLeft: 40,
                  }}>
                  <Image
                    style={{
                      width: '40%',
                      height: '60%',
                      borderWidth: 1,
                      borderRadius: 80,
                    }}
                    source={{ uri: userProfile.mainImageUrl }}
                  />
                  <Image
                    style={{
                      width: '40%',
                      height: '60%',
                      borderWidth: 1,
                      borderRadius: 80,
                    }}
                    source={{ uri: currentUser?.mainImageUrl }}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </SafeAreaView>
      ) : (
        <View style={styles.container}>
          <View style={styles.userInfoContainerTwo}>
            <View style={{ width: 50, height: 50, marginLeft: 20 }}>
              <Image
                style={styles.userPicContainer}
                source={{ uri: '../../assets/splash.png' }}
              />
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                marginLeft: 'auto',
                marginRight: 10,
              }}>
              <Button
                title="..."
                onPress={() => {
                  setFilterVisible(true);
                }}
              />
            </View>
          </View>
          <Modal
            animationType="fade"
            transparent={true}
            visible={filterVisible}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#66666E',
                opacity: 0.9,
              }}>
              <View
                style={{
                  backgroundColor: '#F4F4F6',
                  width: '80%',
                  height: '80%',
                  borderWidth: 1,
                  borderRadius: 10,
                  borderColor: '#E6E6E9',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingLeft: 30,
                  paddingRight: 20,
                }}>
                <View style={{ width: '100%' }}>
                  <Slider
                    value={sliderValue}
                    minimumValue={0}
                    maximumValue={50}
                    step={5}
                    onValueChange={(value) => {
                      setSliderValue(value);
                      // console.log(sliderValue)
                      // if (value > 0) {
                      //   setTotalFilter((totalFilter)=>{
                      //     console.log(totalFilter)
                      //     return totalFilter + 1;
                      // })
                      //   setSliderValue(value);
                      // } else if (value === 0) {
                      //   setTotalFilter((totalFilter)=>
                      //     totalFilter - 1
                      //   )
                      //   setSliderValue(value);
                      // }
                    }}
                    onSlidingComplete={(value) => {
                      if (value[0]) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter + 1;
                        });
                        setFilterParams(`dist=${value}`);
                        // setDistanceFilter(value);
                      } else if (value[0] === 0) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter - 1;
                        });
                        // setDistanceFilter(value);
                        setFilterParams('');
                      }
                    }}
                    thumbTintColor={'#CDC1FF'}
                    minimumTrackTintColor={'#7371FC'}
                    containerStyle={{ width: '90%' }}
                  />
                  <Text style={{ fontSize: 18 }}>
                    Distance: <Text>{`${sliderValue} miles`}</Text>
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 18, marginRight: 30 }}>Size:</Text>
                  <SelectDropdown
                    data={['Select a Size', 'Small', 'Medium', 'Large']}
                    defaultValueByIndex={sizeFilter}
                    buttonStyle={{
                      width: '70%',
                      backgroundColor: '#CDC1FF',
                      borderwidth: 1,
                      borderRadius: 10,
                    }}
                    dropdownStyle={{ backgroundColor: '#FAFAFA' }}
                    dropdownBackgroundColor="#CDC1FF"
                    selectedRowStyle={{ backgroundColor: '#7371FC' }}
                    onSelect={(selectedItem, index) => {
                      if (index) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`size=${selectedItem.toLowerCase()}`);
                      } else if (index === 0) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                        // setSizeFilter('');
                      }
                      setSizeFilter(index);
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{ fontSize: 18, marginRight: 10 }}>Energy:</Text>
                  <SelectDropdown
                    data={['Select Energy Level', 'Low', 'Medium', 'High']}
                    defaultValueByIndex={energyFilter}
                    buttonStyle={{
                      width: '70%',
                      backgroundColor: '#CDC1FF',
                      borderwidth: 1,
                      borderRadius: 10,
                    }}
                    dropdownStyle={{ backgroundColor: '#FAFAFA' }}
                    dropdownBackgroundColor="#CDC1FF"
                    selectedRowStyle={{ backgroundColor: '#7371FC' }}
                    onSelect={(selectedItem, index) => {
                      if (index) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`energy=${selectedItem.toLowerCase()}`);
                        // setEnergyFilter(selectedItem.toLowerCase());
                      } else if (index === 0) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                        // setEnergyFilter('');
                      }
                      setEnergyFilter(index);
                    }}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.filterTitle}>Dog Friendliness:</Text>
                  <Switch
                    trackColor={{ false: '#FAFAFA', true: '#7371FC' }}
                    thumbColor={true ? '#CDC1FF' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) => {
                      setDogFriendlinessFilter(value);
                      if (value) {
                        setTotalFilter((totalFilter) => totalFilter + 1);
                        setFilterParams(`isDogFriendly=${value}`);
                      } else if (!value) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                      }
                    }}
                    value={dogFriendlinessFilter}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.filterTitle}>Human Friendliness:</Text>
                  <Switch
                    trackColor={{ false: '#FAFAFA', true: '#7371FC' }}
                    thumbColor={true ? '#CDC1FF' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={(value) => {
                      setHumanFriendlinessFilter(value);
                      if (value) {
                        setTotalFilter((totalFilter) => {
                          return totalFilter + 1;
                        });
                        setFilterParams(`isHumanFriendly=${value}`);
                      } else if (!value) {
                        setTotalFilter((totalFilter) => totalFilter - 1);
                        setFilterParams('');
                      }
                    }}
                    value={humanFriendlinessFilter}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Pressable
                    style={{
                      width: '40%',
                      height: 60,
                      backgroundColor: '#7371FC',
                      borderWidth: 2,
                      borderColor: '#7371FC',
                      borderRadius: 10,
                      margin: 10,
                    }}
                    // disabled = {!applyFilter}
                    onPress={() => {
                      if (totalFilter > 1) {
                        console.log(filterParams);
                        console.log('Too many filters');
                      } else if (totalFilter === 0) {
                        console.log('no filter applied');
                        console.log(filterParams);

                        // setFilterVisible(!filterVisible);
                      } else if (totalFilter === 1) {
                        setFilterVisible(!filterVisible);
                        console.log(filterParams);
                        setUpdate(!update);
                        setApplyFilter(true);
                      }
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 20,
                        fontWeight: '400',
                      }}>
                      Apply Filter
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      width: '38%',
                      height: 60,
                      backgroundColor: '#7371FC',
                      borderWidth: 2,
                      borderColor: '#7371FC',
                      borderRadius: 10,
                      margin: 10,
                    }}
                    android_ripple={{ color: '#7371FC' }}
                    onPress={() => {
                      setFilterVisible(!filterVisible);
                      setApplyFilter(false);
                      setUpdate(!update);
                    }}>
                    <Text
                      style={{
                        textAlign: 'center',
                        marginTop: 'auto',
                        marginBottom: 'auto',
                        fontSize: 20,
                        fontWeight: '400',
                      }}>
                      Cancel
                    </Text>
                  </Pressable>
                </View>
                <View>
                  {totalFilter > 1 ? (
                    <Text>Please only apply a single filter at once</Text>
                  ) : totalFilter < 1 ? (
                    <Text>No filter applied</Text>
                  ) : null}
                </View>
              </View>
            </View>
          </Modal>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#E5D9F2',
            }}>
            <Text
              style={{ fontSize: 50, color: '#474747', fontWeight: 'bold' }}>
              No Pals Found 😭
            </Text>
            <Text style={{ fontSize: 20, color: '#474747' }}>
              Please apply different filter or check back later
            </Text>
          </View>
        </View>
      )}
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F4F4F6',
    position: 'relative',
  },
  userInfoContainer: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6E6E9',
  },
  userPicContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
  },
  filterTitle: {
    fontSize: 18,
  },
  userInfoContainerTwo: {
    backgroundColor: 'white',
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: '10%',

    borderWidth: 1,
    borderColor: '#E6E6E9',
  },
});
export default Home;

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
