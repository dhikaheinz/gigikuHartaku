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
import Halaman11 from './src/page/Halaman11';

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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
