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

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.flex}>
        <View style={styles.header}>
          <View style={[styles.flex, {paddingLeft: 10}]}>
            <Text style={{fontWeight: 'bold', color: 'black'}}>
              Aplikasi Gigiku Hartaku
            </Text>
          </View>
          <View style={{paddingRight: 10}}>
            <Text style={{color: 'black'}}>Info</Text>
          </View>
        </View>
        <View style={[styles.judul, {marginVertical: 20}]}>
          <Text style={styles.textJudul}>Cara Pemeliharaan</Text>
          <Text style={styles.textJudul}>Kesehatan Gigi Dan Mulut</Text>
          <Text style={styles.textSubJudul}>
            Dr. Jusuf Kristianto, DDS, PhD
          </Text>
        </View>
        <View
          style={[
            {
              height: '100%',
              borderTopStartRadius: 75,
              borderTopEndRadius: 75,
              paddingVertical: 20,
              flexDirection: 'row',
              width: '100%',
              elevation: 10,
            },
            styles.bgDarkWhite,
          ]}>
          <View
            style={{
              flex: 1,
              marginLeft: 10,
              alignItems: 'center',
              flexDirection: 'column',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              style={{marginVertical: 8}}
              onPress={() => this.props.navigation.navigate('Menu2')}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Gigiku Hartaku
                </Text>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  & Fungsi Gigi
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginVertical: 8}}
              onPress={() => this.props.navigation.navigate('Menu4')}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Anatomi Macam Gigi
                </Text>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  & Gigi Susu Gigi Tetap
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu5')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 23, textAlign: 'center'},
                  ]}>
                  Lubang Gigi
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu6')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 21, textAlign: 'center'},
                  ]}>
                  Proses Lubang Gigi
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu7')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 21, textAlign: 'center'},
                  ]}>
                  Ayo Merawat Gigi
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 1,
              marginRight: 10,
              alignItems: 'center',
              flexDirection: 'column',
              marginVertical: 10,
            }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu8')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 16, textAlign: 'center'},
                  ]}>
                  Cara Menyikat Gigi
                </Text>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 16, textAlign: 'center'},
                  ]}>
                  Dengan Tepat
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu9')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Waktu Tepat
                </Text>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Mengosok Gigi
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu10')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Merawat Gigi
                </Text>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 18, textAlign: 'center'},
                  ]}>
                  Dengan Optimal
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Menu11')}
              style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 23, textAlign: 'center'},
                  ]}>
                  Kesimpulan
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={{marginVertical: 8}}>
              <View style={[styles.boxSize, styles.bgBlueDark, styles.center]}>
                <Text
                  style={[
                    styles.fontWhite,
                    {fontSize: 23, textAlign: 'center'},
                  ]}>
                  Penutup
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  boxSize: {
    height: 70,
    width: 170,
    borderRadius: 30,
    elevation: 5,
  },
  bgDarkWhite: {
    backgroundColor: '#9aafcb',
  },
  fontWhite: {
    color: 'white',
  },
  fontBlack: {
    color: 'black',
  },
  header: {
    paddingVertical: 15,
    paddingHorizontal: 5,
    backgroundColor: 'rgb(110, 231, 183)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomLeftRadius: 20,
    borderBottomEndRadius: 20,
    elevation: 10,
  },
  flex: {
    flex: 1,
  },
  black: {
    color: 'black',
  },
  bgBlueDarkOpacity: {
    backgroundColor: 'rgba(51, 65, 85, 0.5)',
  },
  bgBlueDark: {
    backgroundColor: 'rgb(51, 65, 85)',
  },
  judul: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textJudul: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 25,
    textAlign: 'center',
  },
  textSubJudul: {
    color: 'black',
    fontSize: 20,
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
    width: '50%',
    padding: 10,
    backgroundColor: 'rgba(110, 231, 183, 0.7)',
  },
});

export default Home;
