import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, FlatList, TouchableOpacity, Screen } from 'react-native';
import Header from '../header/header';
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import { en } from '../../i18n/en';
import { palette } from '../../ultis/color';
import { commonStyle, windowWidth } from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';
import ItemHistory from './itemHistory';

const ProfileScreen = () => {
  return (
    // <Screen>
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{ resizeMode: 'cover' }}>
      <Header />
      <View style={{ ...commonStyle.row, justifyContent: 'space-around', marginVertical: 30, }}>
        <View style={{ ...commonStyle.center }}>
          <Image source={image.coinItem} style={{ width: 80, height: 80 }} />
          <TextCusTom children={'1000'} style={{ fontSize: 40, fontWeight: 'bold', color: palette.white }} />
          <TextCusTom children={en.stepm} style={{ fontSize: 25, fontWeight: 'bold', color: palette.white }} />
        </View>
        <View style={{ ...commonStyle.center }}>
          <Image source={image.coinItem} style={{ width: 80, height: 80 }} />
          <TextCusTom children={'1000'} style={{ fontSize: 40, fontWeight: 'bold', color: palette.white }} />
          <TextCusTom children={en.stepm} style={{ fontSize: 25, fontWeight: 'bold', color: palette.white }} />
        </View>
      </View>
      <View>
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 25, margin: 10, marginVertical: 20, borderRadius: 8 }}>
          <View style={{ ...commonStyle.row, padding: 10, marginTop: -50, }}>
            <View style={{ backgroundColor: palette.keppelColor, padding: 10, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
              <TextCusTom children={en.deposit} style={styles.textBottom} />
            </View>
            <View style={{ backgroundColor: palette.waterLeaf, padding: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
              <TextCusTom children={en.withDraw} style={styles.textBottom} />
            </View>
          </View>
          <View>

          </View>
        </View>
        <View style={{ ...commonStyle.row, padding: 10, marginTop: 20, }}>
          <View style={{ backgroundColor: palette.keppelColor, padding: 10, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 }}>
            <TextCusTom children={en.runHistory} style={styles.textBottom} />
          </View>
          <View style={{ backgroundColor: palette.waterLeaf, padding: 10, borderTopRightRadius: 5, borderBottomRightRadius: 5 }}>
            <TextCusTom children={en.transation} style={styles.textBottom} />
          </View>
        </View>
        <ItemHistory />
        <ItemHistory />
      </View>
    </ImageBackground>
    // </Screen>
  )
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: 'bold',
    color: palette.white
  }
})
