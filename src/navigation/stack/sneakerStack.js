import React, {Component} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SneakerScreen from '../../screens/sneakers/sneakerScreen';
import RunSneaker from '../../screens/detailScreen/runScreen';
import FinishScreen from '../../screens/detailScreen/finish';
import DetailSneaker from '../../screens/detailScreen/detailScreen';

const Sneaker = createNativeStackNavigator();

const SneakerStack = () => {
  return (
    <Sneaker.Navigator
      initialRouteName='SneakerScreen'
      screenOptions={{
        headerShown: false,
      }}>
      <Sneaker.Screen name="SneakerScreen" component={SneakerScreen} />
      <Sneaker.Screen name="Detail" component={DetailSneaker} />
      <Sneaker.Screen name="Run" component={RunSneaker} />
      <Sneaker.Screen name="Finish" component={FinishScreen} />
    </Sneaker.Navigator>
  );
};

export default SneakerStack;
