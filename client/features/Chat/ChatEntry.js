import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import dummyData from './dummyData.js';
import React, {useEffect, useState} from 'react';
import { parseISO, format } from 'date-fns';

const emojis = ['heart', 'thumbs', 'cry', 'smile', 'surprised', 'upset']
const emojiSource = {
  heart: '../../assets/heart.png',
  thumbs: '../../assets/thumbs.png',
  cry: '../../assets/cry.png',
  smile: '../../assets/smile.png',
  surprise: '../../assets/surprise.png',
  upset: '../../assets/upset.png',
}

export default function ChatEntry ({chat, addReaction}) {
  const {Chats, CurrentUser1, CurrentUser2} = dummyData;
  const [clicked, setClicked] = useState(false);
  const heartSource = '../../assets/heart.png'

  const handleMessageClick = () => {
    setClicked(!clicked);
  }

  return (
    <>
      <View
        style={chat.userId === CurrentUser1._id ? user1BubbleContainer: user2BubbleContainer}
      >
        <View
          style={chat.userId === CurrentUser1._id ? messageContainer1 : messageContainer2}
        >
          <Text
            style={chat.userId === CurrentUser1._id ? user1Bubble: user2Bubble}
            onPress={() => {handleMessageClick()}}
          >
            {chat.body}
          </Text>
          <Text>{'sometime ago'}</Text>
          {chat.reactions.map((reaction, i) => {
            if (reaction === 'heart') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/heart.png')}
                  style={{width:20, height: 20}}
                />
              )
            } else if (reaction === 'thumbs') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/thumbs.png')}
                  style={{width:20, height: 20}}
                />
              )
            } else if (reaction === 'cry') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/cry.png')}
                  style={{width:20, height: 20}}
                />
              )
            } else if (reaction === 'smile') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/smile.png')}
                  style={{width:20, height: 20}}
                />
              )
            } else if (reaction === 'surprise') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/surprise.png')}
                  style={{width:20, height: 20}}
                />
              )
            } else if (reaction === 'upset') {
              return (
                <Image
                  key={i}
                  source={require('../../assets/upset.png')}
                  style={{width:20, height: 20}}
                />
              )
            }
          })}
        </View>
      </View>
        {clicked &&
          <View
            style={chat.userId === CurrentUser1._id ? iconContainer2 : iconContainer1}
          >
            <TouchableOpacity onPress={() => {
              addReaction('heart',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/heart.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              addReaction('thumbs',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/thumbs.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              addReaction('cry',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/cry.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              addReaction('smile',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/smile.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              addReaction('surprise',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/surprise.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              addReaction('upset',chat._id)
              setClicked(false);
              }}>
              <Image
                  source={require('../../assets/upset.png')}
                  style={{width:20, height: 20}}
                />
            </TouchableOpacity>
          </View>
        }
    </>
  )
};

const chatStyle = StyleSheet.create({
  user1BubbleContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 40,
  },
  user2BubbleContainer: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    height: 40,
  },
  timestamp: {
    marginRight: '2%',
    marginLeft: '2%',
    fontSize: 10,
  },
  user1Bubble: {
    backgroundColor: '#CDC1FF',
    borderRadius: 10,
    padding: 7,
    color: 'white'
  },
  user2Bubble: {
    backgroundColor: '#A594F9',
    borderRadius: 10,
    padding: 7,
    color: 'white',
  },
  messageContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer2: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  iconContainer1: {
    justifyContent: 'flex-end',
    flexDirection:'row',
  },
  iconContainer2: {
    justifyContent: 'flex-start',
    flexDirection:'row',
  }
})

const {
  user1BubbleContainer, user2BubbleContainer, timestamp,
  user1Bubble, user2Bubble, messageContainer1, messageContainer2,
  iconContainer1, iconContainer2
} = chatStyle;

const displayTime = (timestamp) => {
  // if minutes ago
  // if hours ago
  // if days ago
  return null;
}