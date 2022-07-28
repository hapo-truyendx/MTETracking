import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screens/login/loginScreen';

const Login = createNativeStackNavigator();

const LoginStack = () => {
  return (
    <Login.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Login.Screen name="LoginScreen" component={LoginScreen} />
    </Login.Navigator>
  );
};

export default LoginStack;
