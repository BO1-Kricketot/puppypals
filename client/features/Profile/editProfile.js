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
  const [morePicsCopy, setMorePicsCopy] = useState([...morePics]);
  const [city, setCity] = useState(info.location.city);
  const [state, setState] = useState(info.location.state);
  const [dogBioCopy, setDogBioCopy] = useState(info.bio);

  const handleSaveAndClose = () => {
    const infoCopy = { ...info };
    infoCopy.location.coordinates = { ...info.location.coordinates };
    infoCopy.location = { ...info.location };

    infoCopy.location.city = city;
    infoCopy.location.state = state;
    infoCopy.bio = dogBioCopy;

    // do a big old put (or patch) request in real life
    api
      .patchUserProfile(info._id, infoCopy)
      .then(() => {
        // keep
        setModalVisible(!modalVisible);
        setProfileChanged(!profileChanged);
      })
      .catch((err) => console.error(err));

    // get rid of for live data
    // setInfo(infoCopy);
    // setMainPic(mainPicCopy);
    // setMorePics(morePicsCopy);
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
              setMainPicCopy={setMainPicCopy}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {morePicsCopy.map((slot, i) => (
                <MoreImgsEditor
                  key={i}
                  imgKey={i}
                  morePicsCopy={morePicsCopy}
                  setMorePicsCopy={setMorePicsCopy}
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
