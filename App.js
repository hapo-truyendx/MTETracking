/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomNavigation from './src/navigation/bottomNavigation';
import LoginStack from './src/navigation/auth/authNavigation';

const Tab = createBottomTabNavigator();

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
