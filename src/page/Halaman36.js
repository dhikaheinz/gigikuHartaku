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

class Halaman35 extends Component {
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
            Tim Penyusun
          </Text>
        </View>
        {/* <View style={{flex: 1}}> */}
        <Image
          source={require('../img/slide38.png')}
          style={{
            width: '100%',
            height: '80%',
            resizeMode: 'stretch',
          }}></Image>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={{
              padding: 20,
              backgroundColor: '#334155',
              borderRadius: 20,
              width: '70%',
              elevation: 20,
            }}>
            <Text
              style={{
                color: 'white',
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Halaman Utama
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Halaman35;
