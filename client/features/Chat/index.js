import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Platform,
  StatusBar,
  Dimensions,
  TextInput,
  Button,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { io } from 'socket.io-client';
import dummyData from './dummyData.js';

const socket = io('http://192.168.12.141:3000/');

export default function Chat() {
  const isAndroid = Platform.OS === 'android';
  const [currentMessage, setCurrentMessage] = useState('');
  const [newMessages, setNewMessages] = useState([]);
  const {Chats, CurrentUser1, CurrentUser2} = dummyData;

  useEffect(() => {
    socket.on('connect', () => {
      console.log('You are connected to socket');
    });

    socket.on('disconnect', () => {
      console.log('You are disconnected');
    });

    socket.on('receive-message', (message) => {
      console.log('received message',message);
    });

    socket.emit('join-room', Chats._id, (message) => {
      console.log(message);
    })
  },[]);

  const handleMessageSend = () => {
    const newMessage = {
      userId: CurrentUser1.id,
      body: currentMessage,
      timestamp: new Date(),
      reactions: [],
    }
    // socket.emit('post', newMessage, dummyChats._id);
    console.log(newMessage);
    socket.emit('josh', newMessage);
    setNewMessages([...newMessages, newMessage]);
    // axios.post(`api/messages/`);
  };

  return (
    <>
      <SafeAreaView style={container}>
        <View style={headerContainer}>
          <Text style={userName}>
            hello
          </Text>
          <View style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 10 }}>
            <Image
              style={userPicContainer}
              source={{ uri: 'https://www.essence.com/wp-content/uploads/2014/01/images/2013/11/11/steve-harvey-show.jpg'}}
            />
          </View>
        </View>
        <View>
          {Chats.messages.map((chat,i) => {
            return (
              <View
                style={chat.userId === CurrentUser1._id ? user1BubbleContainer: user2BubbleContainer}
                key={i}
              >
                <Text
                  style={chat.userId === CurrentUser1._id ? user1Bubble: user2Bubble}
                >
                  {chat.body}
                </Text>
              </View>
            )
          })}
          {newMessages.map((chat,i) => {
            return (
              <View
                style={chat.userId === CurrentUser1._id ? user1BubbleContainer: user2BubbleContainer}
                key={i}
              >
                <Text
                  style={chat.userId === CurrentUser1._id ? user1Bubble: user2Bubble}
                >
                  {chat.body}
                </Text>
              </View>
            )
          })}
        </View>
        <View style={inputContainer}>
          <TextInput
            placeholder='Send a message!'
            placeholderTextColor='black'
            style={input}
            onChangeText={setCurrentMessage}
          />
          <Button
            title='Send'
            onPress={handleMessageSend}
            color='#7371fc'
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const chatStyle = StyleSheet.create({
  // holds everything else, flex val 1 fills avail space
  container: {
    backgroundColor: '#f4f4f6',
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  headerContainer: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '2%',
  },
  inputContainer: {
    backgroundColor: '#cdc1ff',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 40,
  },
  userPicContainer: {
    width: '100%',
    height: '100%',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 75,
  },
  input: {
    width: '88%',
  },
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
  userName: {
    color: '#474747'
  }
});

const {
  container, headerContainer, userPicContainer, inputContainer,
  input, user1BubbleContainer, user2BubbleContainer, timestamp, userName,
  user1Bubble, user2Bubble
} = chatStyle