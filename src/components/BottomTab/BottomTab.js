import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

import { Entypo, Ionicons, Octicons  } from '@expo/vector-icons';

export default function BottomTab() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.buttontext}>
        <Image source={require("../../../assets/Icon/status.png")} style={styles.statusicon}/>
        <Text style={styles.text}>Status</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttontext}>
        <Ionicons name="call-outline" size={24} color="#808080" />
        <Text style={styles.text}>Calls</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttontext}>
        <Ionicons name="camera-outline" size={24} color="#808080" />
        <Text style={styles.text}>Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttontext}>
        <Ionicons name="chatbubbles" size={24} color="#2da2ff" />
        <Text style={styles.text, {color: '#2da2ff'}}>Chats</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttontext}>
        <Octicons name="gear" size={24} color="#808080" />
        <Text style={styles.text}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#171717',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 'auto',
        paddingLeft: 20,
        paddingRight: 20,
        height: 60
    },
    buttontext: {
        alignItems: 'center',
    },
    text: {
        color: '#808080'
    },
    statusicon: {
      width: 25,
      height: 25
    }
});
