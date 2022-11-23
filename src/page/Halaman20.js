import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Input,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

class Halaman20 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <View
          style={{
            backgroundColor: '#334155',
            paddingVertical: 20,
            paddingHorizontal: 15,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{color: 'white', fontWeight: 'bold'}}>
            App Gigiku Hartaku
          </Text>
          <Text style={{color: 'white', fontWeight: 'bold'}}>Info</Text>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(110, 231, 183, 0.7)',
            paddingVertical: 10,
            paddingHorizontal: 15,
          }}>
          <Text
            style={{
              color: 'black',
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
              fontSize: 20,
            }}>
            Area Belakang Gigi Depan Ujung Lidah & Langit Langit Atas
          </Text>
        </View>
        {/* <View style={{flex: 1}}> */}
        <Image
          source={require('../img/slide22.png')}
          style={{
            width: '100%',
            height: '80%',
            resizeMode: 'stretch',
          }}></Image>
      </View>
    );
  }
}

export default Halaman20;
