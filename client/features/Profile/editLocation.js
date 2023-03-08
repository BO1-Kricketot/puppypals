import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

export default function LocationEditor() {
  const [city, setCity] = useState('current city');
  const [state, setState] = useState('');

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

  return (
    <View style={locationStyles.container}>
      <TextInput
        onChangeText={(text) => setCity(text)}
        value={city}
        style={locationStyles.cityInput}
      />
      <SelectDropdown
        data={states}
        onSelect={(selectedState) => setState(selectedState)}
        buttonTextAfterSelection={state}
        rowTextForSelection={(rowState) => rowState}
        defaultButtonText={'Select Your State'}
        buttonStyle={locationStyles.stateButton}
      />
    </View>
  );
}

const locationStyles = StyleSheet.create({
  container: {
    backgroundColor: 'darkorange',
    flex: 2,
  },
  cityInput: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    margin: '2%',
  },
  stateButton: {
    margin: '2%',
    borderRadius: 10,
  },
});
