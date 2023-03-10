import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HeaderBar = ({ styles, oneChat, exampleData, onSort }) => {
  const [sortOption, setSortOption] = useState('pending');

  const handleSort = (option) => {
    setSortOption(option);
    onSort(option);
  };

  const sortedData = exampleData.sort((a, b) => {
    if (sortOption === 'pending') {
      return a.status === 'Pending' ? -1 : 1;
    } else {
      return a.status === 'Accepted' ? -1 : 1;
    }
  });

  //[styles, { justifyContent: 'center', alignItems: 'center' }]
  return (
    <View style={[styles, { justifyContent: 'center', alignItems: 'center' }]}>
      <View style={{ flexDirection: 'row', marginBottom: 20}}>
        <View
          style={{
            backgroundColor: sortOption === 'pending' ? '#7371FC' : 'white',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => handleSort('pending')}>
            <Text style={{ color: sortOption === 'pending' ? 'white' : 'black' }}>
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 10 }}></View>
        <View
          style={{
            backgroundColor: sortOption === 'accepted' ? '#7371FC' : 'white',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => handleSort('accepted')}>
            <Text
              style={{ color: sortOption === 'accepted' ? 'white' : 'black' }}>
              Accepted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HeaderBar;
