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
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import dummyData from './dummyData.js';
import Profile from '../Profile';
import { useAuth } from '../../context/Provider.js';
import ChatEntry from './ChatEntry';

const socket = io('http://192.168.12.141:3000/');

export default function Chat() {
  const isAndroid = Platform.OS === 'android';
  const [currentMessage, setCurrentMessage] = useState('');
  const [showProfile, setShowProfile] = useState(false);
  const [messages, setMessages] = useState(dummyData.Chats.messages);
  const { Chats, CurrentUser1, CurrentUser2 } = dummyData;
  const [currentMessageId, setCurrentMessageId] = useState(
    Chats.messages[Chats.messages.length - 1]._id,
  );
  const { user } = useAuth();

  useEffect(() => {
    socket.on('connect', () => {
      console.log('You are connected to socket');
    });

    socket.on('disconnect', () => {
      console.log('You are disconnected');
    });

    socket.on('receive-message', handleMessageReceive);

    socket.emit('join-room', Chats._id, (message) => {
      console.log(message);
    });
  }, []);

  useEffect(() => {
    socket.on('receive-message', handleMessageReceive);
  }, [messages]);

  const handleMessageReceive = (message) => {
    const changedMsg = message;
    changedMsg.userId = CurrentUser1._id;
    setMessages([...messages, changedMsg]);
  };

  const handleMessageSend = () => {
    const newMessage = {
      _id: currentMessageId + 1,
      userId: CurrentUser2._id,
      body: currentMessage,
      timestamp: new Date(),
      reactions: [],
    };
    // socket.emit('post', newMessage, dummyChats._id);
    setCurrentMessageId(currentMessageId + 1);
    socket.emit('post', newMessage, Chats._id);
    setMessages([...messages, newMessage]);
    // axios.post(`api/messages/`);
  };

  const addReaction = (reaction, chatId) => {
    const copy = messages;
    copy.map((message) => {
      if (message._id === chatId) {
        message.reactions.push(reaction);
        return message;
      } else {
        return message;
      }
    });
    setMessages(copy);
  };

  const handleReturn = () => {
    setShowProfile(false);
  };

  if (showProfile) {
    return <Profile callback={handleReturn} />;
  }

  return (
    <>
      <SafeAreaView style={container}>
        <View style={headerContainer}>
          <Text style={userName}>{CurrentUser2.name}</Text>
          <View
            style={{
              width: 50,
              height: 50,
              marginLeft: 'auto',
              marginRight: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                setShowProfile(true);
              }}>
              <Image
                style={userPicContainer}
                source={{
                  uri: 'https://www.essence.com/wp-content/uploads/2014/01/images/2013/11/11/steve-harvey-show.jpg',
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          {messages.map((chat, i) => {
            return <ChatEntry chat={chat} key={i} addReaction={addReaction} />;
          })}
        </ScrollView>
        <View style={inputContainer}>
          <TextInput
            placeholder="Send a message!"
            placeholderTextColor="black"
            style={input}
            onChangeText={setCurrentMessage}
          />
          <Button title="Send" onPress={handleMessageSend} color="#7371fc" />
        </View>
      </SafeAreaView>
    </>
  );
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
  userName: {
    color: '#474747',
  },
});

const {
  container,
  headerContainer,
  userPicContainer,
  inputContainer,
  input,
  userName,
} = chatStyle;
