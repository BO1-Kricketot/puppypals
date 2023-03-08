import React, { useState, useEffect } from 'react';
import {
  Alert,
  Modal,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import SelectDropdown from 'react-native-select-dropdown';
import MainImgEditor from './editMainImg.js';
import MoreImgsEditor from './editMoreImgs.js';
import LocationEditor from './editLocation.js';
import BioEditor from './editBio.js';

export default function ModalContainer({
  info,
  mainPic,
  setMainPic,
  morePics,
  setMorePics,
  modalVisible,
  setModalVisible,
  profileChanged,
  setProfileChanged,
}) {


  // const [mainImage, setMainImage] = useState([null]);
  const [moreImages, setMoreImages] = useState(Array(5).fill(null));
  const [city, setCity] = useState(info.location.slice(0, -4));
  const [state, setState] = useState('');
  const [bio, setBio] = useState('');

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
              mainPic={mainPic}
              setMainPic={setMainPic}
            />
            <View style={{ flex: 1, flexDirection: 'row' }}>
              {morePics.map((slot, i) => (
                <MoreImgsEditor
                  key={i}
                  imgKey={i}
                  morePics={morePics}
                  setMorePics={setMorePics}
                />
              ))}
            </View>
            <LocationEditor
              city={city}
              setCity={setCity}
              state={state}
              setState={setState}
            />
            <BioEditor bio={bio} setBio={setBio} />
            <Pressable
              style={[editProfileStyles.button, editProfileStyles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
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
    // alignItems: 'center',
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

const dummyMoreImgs = [
  'placeholder0',
  'placeholder1',
  'placeholder2',
  'placeholder3',
  'placeholder4',
];