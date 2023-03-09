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
        buttonTextStyle={{ color: 'white' }}
      />
    </View>
  );
}

const locationStyles = StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    flex: 1,
  },
  cityInput: {
    marginTop: '2%',
    marginLeft: '4%',
    width: '66%',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: 'black',
  },
  stateButton: {
    marginTop: '1%',
    marginRight: '4%',
    height: 30,
    width: 160,
    borderRadius: 20,
    backgroundColor: '#2196F3',
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
