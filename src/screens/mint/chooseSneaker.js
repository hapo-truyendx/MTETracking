import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useSelector } from 'react-redux';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import { typeScreen } from '../../ultis/typeScreen';
import ItemSneaker from '../itemSneaker/itemSneaker';
const ChooseSneaker = () => {
  const nfts = useSelector(state => state.mint.choose);
  console.log('mmm',nfts);
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <View style={{...commonStyle.row_between, paddingBottom: 20}}>
        <TextCusTom
          children={en.choose}
          style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
        />
        <TouchableOpacity>
          <Image source={image.close} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <FlatList data={nfts} renderItem = {(item, index) => {
          return <ItemSneaker nfts = {item.item} type = {typeScreen.mint}/>
        }} 
        keyExtractor={(index) => index.toString() + Math.random()}
        numColumns={2}
        style ={{flex: 1}}
        />
        
      </View>
      <View style={{}}>
        <TouchableOpacity style={{...commonStyle.row,borderRadius:8,backgroundColor:palette.texasRose, padding: 10}}>
          <TextCusTom children={en.choose} style={{color: palette.white, fontWeight:'bold', fontSize: 25,}}/>
        </TouchableOpacity>
      </View>
        
    </ImageBackground>
  );
};

export default ChooseSneaker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
});
