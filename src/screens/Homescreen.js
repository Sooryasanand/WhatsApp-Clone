import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import Header from '../components/Header/Header';
import ChatList from '../components/ChatList/ChatList';
import BottomTab from '../components/BottomTab/BottomTab';



export default function Homescreen() {


  return (
    <View style={{backgroundColor: '#010101'}}>
      <Header />
      <View>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginLeft: 15, color: 'white'}}>Chats</Text>
      </View>
      <ScrollView>
        <View style={styles.searchbar}>
          <AntDesign name="search1" size={19} color="#9a999d" style={{marginRight: 7, marginTop: 1.5}}/>
          <Text style={{fontSize: 15, color: '#818084', fontWeight: '600', }}>Search</Text>
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
      <BottomTab style={styles.bottomTab}/>
    </View>
  );
}


const styles = StyleSheet.create({
  thirdSec: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 15,
      marginBottom: 15,
  },

  textLeft:{
      fontSize: 15,
      color: '#389ffc',
      marginLeft: 15,
  },

  textRight: {
    fontSize: 15,
    color: '#389ffc',
    marginRight: 15
  },

  page: {
    flex: 1,
    backgroundColor: 'white'
  },

  searchbar: {
    width: '92%', 
    backgroundColor: '#1d1d1f', 
    alignSelf: 'center',
    padding: 5,
    marginTop: 5,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    paddingLeft: 10,
  },
});
