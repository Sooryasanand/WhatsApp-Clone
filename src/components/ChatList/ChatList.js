import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import syles from './styles';


export default function Homescreen() {
  return (
    <View style={syles.container}>
      <Image source={{ uri: 'https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142'}} style={syles.image} />
      <View style={syles.rightcontainer}>
          <View style={syles.row}>
          <View style={syles.namebadge}>
          <View>
              <Text style={syles.name}>Jeff Bezoz</Text>
          </View>
          </View>
          <Text style={syles.timedes}>19:30</Text>
      </View>
      <Text numberOfLines={1} ellipsizeMode='head' style={syles.lastmess}>Jeff Bezoz: Hey Bud</Text>
    </View>
    </View>
  );
}