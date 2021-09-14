import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Constant from 'expo-constants';

import { Feather } from '@expo/vector-icons';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logotext}>Edit</Text>
      </View>
      <View style={styles.buttons}>
        <Feather name="edit" size={23} color="#389ffc" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constant.statusBarHeight,
        flexDirection: 'row',
        backgroundColor: '#010101',
        height: 70,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    logo: {
        marginLeft: 15
    },

    logotext:{
        fontSize: 15,
        color: '#389ffc',
    },

    buttons: {
      flexDirection: 'row',
      marginRight: 15
    }
});
