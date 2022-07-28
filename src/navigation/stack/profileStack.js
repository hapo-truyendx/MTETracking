import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/profile/profileScreen';


const Profile = createNativeStackNavigator();

const ProfileStack = () => {
  return (
    <Profile.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Profile.Screen name="ProfileScreen" component={ProfileScreen} />
    </Profile.Navigator>
  );
};

export default ProfileStack;
