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

  return (
    <View style={[styles, { justifyContent: 'center', alignItems: 'center' }]}>
      <View style={{ flexDirection: 'row' }}>
        <View
          style={{
            backgroundColor: sortOption === 'pending' ? 'lightgray' : 'white',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => handleSort('pending')}>
            <Text style={{ color: sortOption === 'pending' ? 'red' : 'black' }}>
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: 10 }}></View>
        <View
          style={{
            backgroundColor: sortOption === 'accepted' ? 'lightgray' : 'white',
            padding: 5,
          }}>
          <TouchableOpacity onPress={() => handleSort('accepted')}>
            <Text
              style={{ color: sortOption === 'accepted' ? 'red' : 'black' }}>
              Accepted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {sortedData.map((data) => (
        <Text>{data.title}</Text>
      ))}
    </View>
  );
};

export default HeaderBar;
