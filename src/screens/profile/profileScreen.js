import React, { Component } from 'react';
import { View, Text,Image, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Screen } from 'react-native';
import Header from '../header/header';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';

const ProfileScreen = () => {
  return (
    // <Screen>
      <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>

      </ImageBackground>
    // </Screen>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
