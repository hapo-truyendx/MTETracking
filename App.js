/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
//  import './global';
 import './shim'
import {SafeAreaView} from 'react-native';

import DetailSneaker from './src/screens/detailScreen/detailScreen';
import FinishScreen from './src/screens/detailScreen/finish';
import RunSneaker from './src/screens/detailScreen/runScreen';
import FilterScreen from './src/screens/home/filter';
import HomeScreen from './src/screens/home/homeScreen';
import LoginScreen from './src/screens/login/loginScreen';
import ChooseSneaker from './src/screens/mint/chooseSneaker';
import MintScreen from './src/screens/mint/mintScreen';
import ProfileScreen from './src/screens/profile/profileScreen';
import SneakerScreen from './src/screens/sneakers/sneakerScreen';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/navigation/auth/authNavigation';

const App = () => {
  const backgroundStyle = {
    flex: 1,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        <LoginStack />
        {/* <BottomNavigation /> */}
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
