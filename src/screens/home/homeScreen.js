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

const HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const listNft = useSelector(state => state.market.nfts)
  const filter = useSelector(state => state.market.filter)

  const getListNfts =  () => {
    dispatch(getNftsRequest(filter))
  };
  useEffect(() => {
    console.log(filter);
    getListNfts();
  }, [filter]);
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
            }}
            onPress={() => navigation.navigate('Filter')}>
            <Image
              source={image.filter}
              style={{width: 36, height: 36, marginRight: 15}}
            />
            <TextCusTom children={en.filter} />
          </TouchableOpacity>
        </View>
      </View>
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
