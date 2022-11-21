import React, {useState, useEffect, Component} from 'react';
import {
  View,
  Input,
  StatusBar,
  ImageBackground,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.flex}>
        <ImageBackground
          style={styles.flex}
          source={require('../img/Home.jpg')}>
          <View style={[styles.flex, styles.bgBlueDarkOpacity]}>
            <View style={styles.judul}>
              <Text style={styles.textJudul}>Cara Pemeliharaan</Text>
              <Text style={styles.textJudul}>Kesehatan Gigi Dan Mulut</Text>
              <Text style={styles.textSubJudul}>
                Dr. Jusuf Kristianto, DDS, PhD
              </Text>
            </View>
            <View style={styles.centerItem}>
              <TouchableOpacity
                style={styles.btnKlik}
                onPress={() => this.props.navigation.navigate('Home')}>
                <Text style={styles.black}>Lihat Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  black: {
    color: 'black',
    fontSize: 20,
  },
  bgBlueDarkOpacity: {
    backgroundColor: 'rgba(51, 65, 85, 0.5)',
  },
  judul: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
  },
  textJudul: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 35,
    textAlign: 'center',
  },
  textSubJudul: {
    color: 'black',
    fontSize: 30,
    textAlign: 'center',
  },
  centerItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnKlik: {
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    padding: 20,
    backgroundColor: 'rgba(110, 231, 183, 0.7)',
  },
});

export default SplashScreen;
