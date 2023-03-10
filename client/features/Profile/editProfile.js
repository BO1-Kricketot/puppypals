import React, { useState } from 'react';
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import api from '../../api';

import MainImgEditor from './editMainImg.js';
import MoreImgsEditor from './editMoreImgs.js';
import LocationEditor from './editLocation.js';
import BioEditor from './editBio.js';

export default function ModalContainer({
  info,
  setInfo,
  mainPic,
  setMainPic,
  morePics,
  setMorePics,
  modalVisible,
  setModalVisible,
  profileChanged,
  profileStyles,
  setProfileChanged,
}) {
  const [mainPicCopy, setMainPicCopy] = useState([...mainPic]);
  const [mainPicBase64, setMainPicBase64] = useState('');
  const [morePicsCopy, setMorePicsCopy] = useState([...morePics]);
  const [morePicsBase64, setMorePicsBase64] = useState([]);
  const [city, setCity] = useState(info.location.city);
  const [state, setState] = useState(info.location.state);
  const [dogBioCopy, setDogBioCopy] = useState(info.bio);

  const handleGoBack = () => {
    setMainPicCopy([...mainPic]);
    setMainPicBase64('');
    setMorePicsCopy([...morePics]);
    setMorePicsBase64([]);
    setCity(info.location.city);
    setState(info.location.state);
    setDogBioCopy(info.bio);
    setModalVisible(!modalVisible);
  };

  const handleSaveAndClose = () => {
    const infoCopy = { ...info };
    infoCopy.location.coordinates = { ...info.location.coordinates };
    infoCopy.location = { ...info.location };

    mainPicBase64 === ''
      ? (infoCopy.mainImageUrl = mainPicCopy[0])
      : (infoCopy.mainImageUrl = mainPicBase64);

    const arrayCopy = [...morePicsCopy];
    if (morePicsBase64.length) {
      const regex = /file:/g;
      for (let i = 0; i < arrayCopy.length; i += 1) {
        if (regex.test(arrayCopy[i])) {
          arrayCopy[i] = morePicsBase64[i];
        }
      }
    }
    infoCopy.imageUrls = [...arrayCopy];
    setMorePicsBase64([]);

    infoCopy.imageUrls = infoCopy.imageUrls.filter(
      (imageUrl) => imageUrl !== '../assets/noPic1.png',
    );

    infoCopy.location.city = city;
    infoCopy.location.state = state;
    infoCopy.bio = dogBioCopy;

    api
      .patchUserProfile(info._id, infoCopy)
      .then(() => {
        setModalVisible(!modalVisible);
        setProfileChanged(!profileChanged);
      })
      .catch((err) => console.error(err));
  };

  return (
    <View style={editProfileStyles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={editProfileStyles.centeredView}>
          <View style={editProfileStyles.modalView}>
            <Text style={editProfileStyles.modalText}>
              Editing Your Profile
            </Text>
            <MainImgEditor
              key={111} // make it super obvious
              imgKey={111}
              mainPicCopy={mainPicCopy}
              mainPicBase64={mainPicBase64}
              setMainPicCopy={setMainPicCopy}
              setMainPicBase64={setMainPicBase64}
            />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                marginBottom: '2%',
                marginLeft: '2%',
                marginRight: '2%',
                borderRadius: 10,
                backgroundColor: themeWhite,
              }}>
              {morePicsCopy.map((slot, i) => (
                <MoreImgsEditor
                  key={i}
                  imgKey={i}
                  morePicsCopy={morePicsCopy}
                  morePicsBase64={morePicsBase64}
                  setMorePicsCopy={setMorePicsCopy}
                  setMorePicsBase64={setMorePicsBase64}
                />
              ))}
            </View>
            <LocationEditor
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
            />
            <BioEditor dogBioCopy={dogBioCopy} setDogBioCopy={setDogBioCopy} />
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-around',
              }}>
              <Pressable
                style={[
                  editProfileStyles.button,
                  editProfileStyles.buttonClose,
                ]}
                onPress={handleGoBack}>
                <Text style={editProfileStyles.textStyle}>Go Back</Text>
              </Pressable>
              <Pressable
                style={[
                  editProfileStyles.button,
                  editProfileStyles.buttonClose,
                ]}
                onPress={handleSaveAndClose}>
                <Text style={editProfileStyles.textStyle}>Save & Close</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const themeWhite = '#FFF';
const themeOffWhite = '#F4F4F6';
// const themeNoPic = '#D9D9D9'; // eventually
const themePurple = '#7371FC';

const editProfileStyles = StyleSheet.create({
  editContainer: {
    backgroundColor: themeOffWhite,
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: '90%',
    width: '90%',
    margin: 20,
    backgroundColor: themeOffWhite,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    marginLeft: '33%',
    marginRight: '33%',
    marginBottom: '6%',
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: themePurple,
  },
  buttonClose: {
    backgroundColor: themePurple,
  },
  textStyle: {
    color: themeOffWhite,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 600,
  },
});
