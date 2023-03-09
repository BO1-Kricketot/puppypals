import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const HeaderBar = ({ styles, oneChat, exampleData }) => {
  const [sortOption, setSortOption] = useState('pending');

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedData = exampleData.sort((a, b) => {
    if (sortOption === 'pending') {
      return a.status === 'Pending' ? -1 : 1;
    } else {
      return a.status === 'Accepted' ? -1 : 1;
    }
  });

  return (
    <View style={[styles, { justifyContent: 'center' }]}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => handleSort('pending')}>
          <Text style={{ color: sortOption === 'pending' ? 'red' : 'black' }}>
            Pending
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSort('accepted')}>
          <Text style={{ color: sortOption === 'accepted' ? 'red' : 'black' }}>
            Accepted
          </Text>
        </TouchableOpacity>
      </View>
      {sortedData.map((data) => (
        <Text>{data.title}</Text>
      ))}
    </View>
  );
};

export default HeaderBar;
