import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function LocationEditor({ city, setCity, state, setState }) {
  return (
    <View style={locationStyles.container}>
      <TextInput
        placeholder={city}
        onChangeText={(text) => setCity(text)}
        value={city}
        style={locationStyles.cityInput}
      />
      <SelectDropdown
        data={states}
        onSelect={(selectedState) => setState(selectedState)}
        buttonTextAfterSelection={(selectedState) => selectedState}
        rowTextForSelection={(rowState) => rowState}
        defaultButtonText={'Choose State'}
        buttonStyle={locationStyles.stateButton}
        buttonTextStyle={{ color: themeOffWhite }}
      />
    </View>
  );
}

const themeWhite = '#FFF';
const themeOffWhite = '#F4F4F6';
const themeViolet = '#E5D9F2';
const themePurple = '#7371FC';
const themeDkGrayText = '#474747';

const locationStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: themeWhite,
  },
  cityInput: {
    marginTop: '2%',
    marginLeft: '4%',
    paddingLeft: 6,
    width: '50%',
    borderRadius: 5,
    borderWidth: 1,
    color: themeDkGrayText,
    borderColor: themeDkGrayText,
    backgroundColor: themeViolet,
  },
  stateButton: {
    marginTop: '1%',
    marginRight: '6%',
    height: 30,
    width: 160,
    borderRadius: 20,
    backgroundColor: themePurple,
  },
});

const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'DC',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'PR',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];
