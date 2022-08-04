import React, {Component, useEffect, useState} from 'react';
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
import {commonStyle, status} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';
import {useNavigation} from '@react-navigation/native';
import {getListNft} from '../../service/marketApi';
import {typeScreen} from '../../ultis/typeScreen';
import { useDispatch, useSelector } from 'react-redux';
import { getNftsRequest } from '../../redux/action/marketAction';
import Header from '../header/header';

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listNft = useSelector(state => state.market.nfts)
  const filter = useSelector(state => state.market.filter)

  const getListNfts =  () => {
    dispatch(getNftsRequest(filter))
  };
  useEffect(() => {
    getListNfts();
  }, [filter]);

  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <Header type ={typeScreen.market} />
      <View style={{marginHorizontal: 5, flex: 1}}>
        <FlatList
          data={listNft}
          renderItem={(item, index) => {
            return (
              <ItemSneaker
                key={index}
                nfts={item.item}
                type={typeScreen.market}
              />
            );
          }}
          keyExtractor={index => index.toString() + Math.random()}
          numColumns={2}
          style={styles.container}
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
