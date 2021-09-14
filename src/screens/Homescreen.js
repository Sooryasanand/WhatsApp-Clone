import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../components/Header/Header';
import ChatList from '../components/ChatList/ChatList';


export default function Homescreen() {
  return (
    <View style={{backgroundColor: '#010101'}}>
      <Header />
      <View>
        <Text style={{fontSize: 40, fontWeight: 'bold', marginLeft: 15, color: 'white'}}>Chats</Text>
      </View>
      <View style={styles.thirdSec}>
        <View>
          <Text style={styles.textLeft}>Broadcast List</Text>
        </View>
        <View>
          <Text style={styles.textRight}>New Group</Text>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: '#2b2b2d',
          borderBottomWidth: 1,
        }}
      />
      <ScrollView>
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
        <ChatList />
        <View
          style={{
            marginTop: 5,
            borderBottomColor: '#2b2b2d',
            borderBottomWidth: 1,
            marginHorizontal: 30
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  thirdSec: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      marginBottom: 15
  },

  textLeft:{
      fontSize: 15,
      color: '#389ffc',
      marginLeft: 15
  },

  textRight: {
    fontSize: 15,
    color: '#389ffc',
    marginRight: 15
  },

  page: {
    flex: 1,
    backgroundColor: 'white'
  }
});
