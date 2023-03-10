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
  setProfileChanged,
}) {
  const [mainPicCopy, setMainPicCopy] = useState([...mainPic]);
  const [mainPicBase64, setMainPicBase64] = useState('');
  const [morePicsCopy, setMorePicsCopy] = useState([...morePics]);
  const [morePicsBase64, setMorePicsBase64] = useState([]);
  const [city, setCity] = useState(info.location.city);
  const [state, setState] = useState(info.location.state);
  const [dogBioCopy, setDogBioCopy] = useState(info.bio);

  const handleSaveAndClose = () => {
    const infoCopy = { ...info };
    infoCopy.location.coordinates = { ...info.location.coordinates };
    infoCopy.location = { ...info.location };

    mainPicBase64 === ''
      ? (infoCopy.mainImageUrl = mainPicCopy[0])
      : (infoCopy.mainImageUrl = mainPicBase64);

    // morePicsBase64.length
    //   ? (infoCopy.imageUrls = [...morePicsCopy, ...morePicsBase64])
    //   : (infoCopy.imageUrls = [...morePicsCopy]);

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
            <View style={{ flex: 1, flexDirection: 'row' }}>
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
            <Pressable
              style={[editProfileStyles.button, editProfileStyles.buttonClose]}
              onPress={handleSaveAndClose}>
              <Text style={editProfileStyles.textStyle}>Save & Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const editProfileStyles = StyleSheet.create({
  editContainer: {
    backgroundColor: 'yellow',
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
    backgroundColor: 'white',
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
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
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
