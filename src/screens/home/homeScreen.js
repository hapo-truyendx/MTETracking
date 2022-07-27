import React, {Component} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';

const HomeScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <View style={{...commonStyle.row_between, margin: 20}}>
        <View style={{...commonStyle.row}}>
          <Image
            source={image.runner}
            style={{width: 50, height: 50, marginRight: 15}}
          />
          <View>
            <TextCusTom
              children={'0x12..0K18'}
              style={{color: palette.black, fontWeight: 'bold'}}
            />
            <TextCusTom
              children={en.account}
              style={{color: palette.black, fontSize: 15}}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <Image
              source={image.filter}
              style={{width: 36, height: 36, marginRight: 15}}
            />
            <TextCusTom children={en.filter} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 5, flex: 1}}>
        <FlatList data={[1, 2, 3,4,5]} renderItem = {() => {
          return <ItemSneaker />
        }} 
        keyExtractor={(index) => index.toString()}
        numColumns={2}
        style ={{flex: 1}}
        />
        
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
