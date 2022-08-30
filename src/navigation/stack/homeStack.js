import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../../screens/home/homeScreen';
import FilterScreen from '../../screens/home/filter';
import DetailSneaker from '../../screens/detailScreen/detailScreen';

const Home = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Home.Navigator
    initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Home.Screen name="HomeScreen" component={HomeScreen} />
      <Home.Screen name="Filter" component={FilterScreen} />
      <Home.Screen name="Detail" component={DetailSneaker} />
    </Home.Navigator>
  );
};

export default HomeStack;
