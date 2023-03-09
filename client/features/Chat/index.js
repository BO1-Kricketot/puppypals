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
const { width, height } = Dimensions.get('window');
import { io } from 'socket.io-client';
import dummyData from './dummyData.js';

const socket = io('http://192.168.12.141:3000/');

export default function Chat() {
  const isAndroid = Platform.OS === 'android';
  const [currentMessage, setCurrentMessage] = useState('');
  const [newMessages, setNewMessages] = useState([]);
  const [currentLog, setCurrentLog] = useState(dummyData)


  const { dummyCurrentUser1, dummyCurrentUser2 } = currentLog;
  const dummyChats = currentLog.dummyChats;

  useEffect(() => {
    socket.emit('join-room', dummyChats._id, (message) => {
      console.log(message);
    })
  },[currentLog]);

  // useEffect to use updateLog to change current log
  const updateLog = (dog1,dog2) => {
    axios.get(`/api/messages/${dog1}/${dog2}`)
      .then((log) => {
        setCurrentLog(log);
      });
  };

  socket.on('receive-message', (message) => {
    console.log(message);
  });

  const handleMessageSend = () => {
    const newMessage = {
      userId: dummyCurrentUser1.id,
      body: currentMessage,
      timestamp: new Date(),
      reactions: [],
    }
    socket.emit('post', newMessage, dummyChats._id);
    setNewMessages([...newMessages, newMessage]);
    // axios.post(`api/messages/`)
  }

  return (
    <>
      <SafeAreaView style={container}>
        <View style={headerContainer}>
          <Text>
            {dummyChats.members[0] === dummyCurrentUser1.id ? dummyCurrentUser2.name : dummyCurrentUser1.name}
          </Text>
          <View style={{ width: 50, height: 50, marginLeft: 'auto', marginRight: 10 }}>
            <Image
              style={userPicContainer}
              source={{ uri: 'https://www.essence.com/wp-content/uploads/2014/01/images/2013/11/11/steve-harvey-show.jpg'}}
            />
          </View>
        </View>
        {dummyChats.messages.map((chat, i) => {
          return (
            <View
              style={chat.userId === dummyCurrentUser1.id ? user1BubbleContainer: user2BubbleContainer}
              key={i}
            >
              <Text
                style={chat.userId === dummyCurrentUser1.id ? user1Bubble: user2Bubble}
              >
                {chat.body}
              </Text>
              <Text
                style={timestamp}
              >
                {format(parseISO(chat.timestamp), 'LLLL d, yyyy')}
              </Text>
            </View>
          )
        })}
        <View style={inputContainer}>
          <TextInput
            placeholder='Say Hi!'
            placeholderTextColor='black'
            style={input}
            onChangeText={setCurrentMessage}
          />
          <Button
            title='Send'
            // style={chatStyle.button}
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
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: Platform.OS === 'android' && StatusBar.currentHeight,
  },
  headerContainer: {
    backgroundColor: '#a594f9',
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
    borderColor: '#fafafa',
    borderTopWidth: 5,
  },
  user2BubbleContainer: {
    alignItems: 'center',
    flexDirection: 'row-reverse',
    height: 40,
    borderColor: '#fafafa',
    borderTopWidth: 5,
  },
  timestamp: {
    marginRight: '2%',
    marginLeft: '2%',
    fontSize: 10,
  },
  user1Bubble: {
    backgroundColor: '#cdc1ff',
    borderRadius: 10,
    padding: 7,
  },
  user2Bubble: {
    backgroundColor: '#A594F9',
    borderRadius: 10,
    padding: 7,
  }
});

const {
  container, headerContainer, userPicContainer, inputContainer,
  input, user1BubbleContainer, user2BubbleContainer, timestamp,
  user1Bubble, user2Bubble
} = chatStyle