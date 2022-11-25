// In App.js in a new project

import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './src/page/SplashScreen';
import Home from './src/page/Home';
import Menu2 from './src/page/Menu2';
import Halaman1 from './src/page/Halaman1';
import Menu3 from './src/page/Menu3';
import Halaman2 from './src/page/Halaman2';
import Halaman3 from './src/page/Halaman3';
import Halaman4 from './src/page/Halaman4';
import Menu4 from './src/page/Menu4';
import Halaman5 from './src/page/Halaman5';
import Halaman6 from './src/page/Halaman6';
import Halaman7 from './src/page/Halaman7';
import Halaman8 from './src/page/Halaman8';
import Menu5 from './src/page/Menu5';
import Halaman9 from './src/page/Halaman9';
import Halaman10 from './src/page/Halaman10';
import Halaman11 from './src/page/Halaman11';
import Menu6 from './src/page/Menu6';
import Halaman12 from './src/page/Halaman12';
import Halaman13 from './src/page/Halaman13';
import Menu7 from './src/page/Menu7';
import Halaman14 from './src/page/Halaman14';
import Halaman15 from './src/page/Halaman15';
import Halaman16 from './src/page/Halaman16';
import Menu8 from './src/page/Menu8';
import Halaman17 from './src/page/Halaman17';
import Halaman18 from './src/page/Halaman18';
import Halaman19 from './src/page/Halaman19';
import Halaman20 from './src/page/Halaman20';
import Halaman21 from './src/page/Halaman21';
import Menu9 from './src/page/Menu9';
import Halaman22 from './src/page/Halaman22';
import Halaman23 from './src/page/Halaman23';
import Halaman24 from './src/page/Halaman24';
import Menu10 from './src/page/Menu10';
import Halaman25 from './src/page/Halaman25';
import Halaman26 from './src/page/Halaman26';
import Menu11 from './src/page/Menu11';
import Halaman27 from './src/page/Halaman27';
import Halaman28 from './src/page/Halaman28';
import Halaman29 from './src/page/Halaman29';
import Halaman30 from './src/page/Halaman30';
import Menu12 from './src/page/Menu12';
import Halaman31 from './src/page/Halaman31';
import Halaman32 from './src/page/Halaman32';
import Halaman33 from './src/page/Halaman33';

import Halaman34 from './src/page/Halaman34';
import Halaman35 from './src/page/Halaman35';
import Halaman36 from './src/page/Halaman36';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Menu2" component={Menu2} />
        <Stack.Screen name="Halaman1" component={Halaman1} />
        <Stack.Screen name="Menu3" component={Menu3} />
        <Stack.Screen name="Halaman2" component={Halaman2} />
        <Stack.Screen name="Halaman3" component={Halaman3} />
        <Stack.Screen name="Halaman4" component={Halaman4} />
        <Stack.Screen name="Menu4" component={Menu4} />
        <Stack.Screen name="Halaman5" component={Halaman5} />
        <Stack.Screen name="Halaman6" component={Halaman6} />
        <Stack.Screen name="Halaman7" component={Halaman7} />
        <Stack.Screen name="Halaman8" component={Halaman8} />
        <Stack.Screen name="Menu5" component={Menu5} />
        <Stack.Screen name="Halaman9" component={Halaman9} />
        <Stack.Screen name="Halaman10" component={Halaman10} />
        <Stack.Screen name="Halaman11" component={Halaman11} />
        <Stack.Screen name="Menu6" component={Menu6} />
        <Stack.Screen name="Halaman12" component={Halaman12} />
        <Stack.Screen name="Halaman13" component={Halaman13} />
        <Stack.Screen name="Menu7" component={Menu7} />
        <Stack.Screen name="Halaman14" component={Halaman14} />
        <Stack.Screen name="Halaman15" component={Halaman15} />
        <Stack.Screen name="Halaman16" component={Halaman16} />
        <Stack.Screen name="Menu8" component={Menu8} />
        <Stack.Screen name="Halaman17" component={Halaman17} />
        <Stack.Screen name="Halaman18" component={Halaman18} />
        <Stack.Screen name="Halaman19" component={Halaman19} />
        <Stack.Screen name="Halaman20" component={Halaman20} />
        <Stack.Screen name="Halaman21" component={Halaman21} />
        <Stack.Screen name="Menu9" component={Menu9} />
        <Stack.Screen name="Halaman22" component={Halaman22} />
        <Stack.Screen name="Halaman23" component={Halaman23} />
        <Stack.Screen name="Halaman24" component={Halaman24} />
        <Stack.Screen name="Menu10" component={Menu10} />
        <Stack.Screen name="Halaman25" component={Halaman25} />
        <Stack.Screen name="Halaman26" component={Halaman26} />
        <Stack.Screen name="Menu11" component={Menu11} />
        <Stack.Screen name="Halaman27" component={Halaman27} />
        <Stack.Screen name="Halaman28" component={Halaman28} />
        <Stack.Screen name="Halaman29" component={Halaman29} />
        <Stack.Screen name="Halaman30" component={Halaman30} />
        <Stack.Screen name="Menu12" component={Menu12} />
        <Stack.Screen name="Halaman31" component={Halaman31} />
        <Stack.Screen name="Halaman32" component={Halaman32} />
        <Stack.Screen name="Halaman33" component={Halaman33} />

        <Stack.Screen name="Halaman34" component={Halaman34} />
        <Stack.Screen name="Halaman35" component={Halaman35} />
        <Stack.Screen name="Halaman36" component={Halaman36} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
