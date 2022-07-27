/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import FilterScreen from './src/screens/home/filter';
import HomeScreen from './src/screens/home/homeScreen';
import LoginScreen from './src/screens/login/loginScreen';
import MintScreen from './src/screens/mint/mintScreen';
import ProfileScreen from './src/screens/profile/profileScreen';
import SneakerScreen from './src/screens/sneakers/sneakerScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      {/* <LoginScsreen /> */}
      {/* <HomeScreen /> */}
      {/* <FilterScreen /> */}
      {/* <SneakerScreen /> */}
      {/* <MintScreen /> */}
      <ProfileScreen />
    </SafeAreaView>
  );
};

export default App;
