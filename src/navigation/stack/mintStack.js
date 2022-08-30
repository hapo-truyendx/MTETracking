import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MintScreen from '../../screens/mint/mintScreen';
import ChooseSneaker from '../../screens/mint/chooseSneaker';

const Mint = createNativeStackNavigator();

const MintStack = () => {
  return (
    <Mint.Navigator
    initialRouteName='MintScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Mint.Screen name="MintScreen" component={MintScreen} />
      <Mint.Screen name="Choose" component={ChooseSneaker} />
    </Mint.Navigator>
  );
};

export default MintStack;
