import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const OneChat = ({
  name,
  timestamp,
  dogName,
  dogImage,
  status,
  onAccept,
  onReject,
  styles,
}) => {
  const [seen, setSeen] = useState(false);

  const onSwipeLeft = () => {
    onReject();
  };

  const onSwipeRight = () => {
    onAccept();
  };

  const renderLeftActions = () => {
    return (
      <View style={styles.rightActions}>
        <Text style={styles.actionText}>Reject</Text>
      </View>
    );
  };

  const renderRightActions = () => {
    return (
      <View style={styles.leftActions}>
        <Text style={styles.actionText}>Accept</Text>
      </View>
    );
  };

  const onOpen = () => {
    console.log('Chat item swiped');
  };

  const onSeen = () => {
    setSeen(true);
  };

  return (
    <Swipeable
      renderLeftActions={status === 'pending' ? renderRightActions : null }
      renderRightActions={status === 'pending' ? renderLeftActions : null }
      onSwipeableLeftOpen={onSwipeRight}
      onSwipeableRightOpen={onSwipeLeft}
      onSwipeableOpen={onOpen}>
      <TouchableOpacity onPress={onSeen}>
        <View style={styles.oneChatContainer}>
          <View style={styles.dotContainer}>
            <View
              style={[
                styles.dot,
                { backgroundColor: seen ? 'black' : 'green' },
              ]}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
          <View style={styles.dogContainer}>
            <Image style={styles.dogImage} source={{ uri: dogImage }} />
            <Text style={styles.dogName}>{dogName}</Text>
            {status === 'pending' && <Text style={styles.status}>Pending</Text>}
          </View>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>
              Woof! I would love to bork @ u
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
};

export default OneChat;
