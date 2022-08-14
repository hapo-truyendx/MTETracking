import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {image, menu} from '../assets';
import {TextCusTom} from '../components/textCustom';
import {commonStyle} from '../ultis/const';
import {palette} from '../ultis/color';
import HomeStack from './stack/homeStack';
import MintStack from './stack/mintStack';
import SneakerStack from './stack/sneakerStack';
import ProfileStack from './stack/profileStack';

const bottomNavigatorConfigs = {
  initialRouteName: "Home",
  screenOptions: {
      tabBarStyle: { height: 300 },
  },
};

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={
        {
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle : {height: 80}
        // style: {height: 100},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{...commonStyle.center}}>
                <Image
                  source={menu.market}
                  style={
                    focused ? {width: 40, height: 40} : {width: 30, height: 30}
                  }
                />
                <TextCusTom
                  children={'Market'}
                  style={
                    focused
                      ? {fontSize: 18, fontWeight: 'bold'}
                      : {fontSize: 14}
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Sneaker"
        component={SneakerStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{...commonStyle.center}}>
                <Image
                  source={menu.sneaker}
                  style={
                    focused ? {width: 40, height: 40} : {width: 30, height: 30}
                  }
                />
                <TextCusTom
                  children={'Sneaker'}
                  style={
                    focused
                      ? {fontSize: 18, fontWeight: 'bold'}
                      : {fontSize: 14}
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Mint"
        component={MintStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{...commonStyle.center}}>
                <Image
                  source={menu.mint}
                  style={
                    focused ? {width: 40, height: 40} : {width: 30, height: 30}
                  }
                />
                <TextCusTom
                  children={'Mint'}
                  style={
                    focused
                      ? {fontSize: 18, fontWeight: 'bold'}
                      : {fontSize: 14}
                  }
                />
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => {
            return (
              <View style={{...commonStyle.center}}>
                <Image
                  source={menu.profile}
                  style={
                    focused ? {width: 40, height: 40} : {width: 30, height: 30}
                  }
                />
                <TextCusTom
                  children={'Profile'}
                  style={
                    focused
                      ? {fontSize: 18, fontWeight: 'bold'}
                      : {fontSize: 14}
                  }
                />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
