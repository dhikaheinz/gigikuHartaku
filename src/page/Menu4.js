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
} from 'react-native';

class Menu4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{flex: 1}}>
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
        <ImageBackground source={require('../img/Home.jpg')} style={{flex: 1}}>
          <View
            style={{
              backgroundColor: 'rgba(226, 232, 240, 0.5)',
              flex: 1,
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Halaman5')}
              style={{
                padding: 20,
                backgroundColor: '#334155',
                borderRadius: 20,
                width: '70%',
                elevation: 20,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Anatomi Gigi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Halaman6')}
              style={{
                padding: 20,
                backgroundColor: '#334155',
                borderRadius: 20,
                width: '70%',
                elevation: 20,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Macam Gigi
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Halaman7')}
              style={{
                padding: 20,
                backgroundColor: '#334155',
                borderRadius: 20,
                width: '70%',
                elevation: 20,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Gigi Susu
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Halaman8')}
              style={{
                padding: 20,
                backgroundColor: '#334155',
                borderRadius: 20,
                width: '70%',
                elevation: 20,
                marginVertical: 10,
              }}>
              <Text
                style={{
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                Gigi Tetap
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default Menu4;
