import {useNavigation} from '@react-navigation/native';
import React, {Component, useMemo} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
// import {useDispatch} from 'react-redux';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {onBuyItemNfts} from '../../redux/action/marketAction';
import {buyNft} from '../../service/marketApi';
import {palette} from '../../ultis/color';
import {commonStyle, status, windowWidth} from '../../ultis/const';
import {convertPopularity, convertType} from '../../ultis/convertType';
import {typeScreen} from '../../ultis/typeScreen';

const ItemSneaker = ({nfts, type, mintAction = () => {}}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const selectItem = useSelector(state => state.mint.selectNfts);
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };
  const onBuyNft = async () => {
    dispatch(onBuyItemNfts(nfts?.id));
  };
  const selectNft = useMemo(() => {
    if (selectItem.includes(nfts?.id)) {
      return (
        <View
          style={{
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            width: windowWidth * 0.5 - 15,
            height: 270,
            ...commonStyle.center,
            borderRadius: 8,
          }}>
          <Image source={image.check} style={{width: 100, height: 100}} />
        </View>
      );
    }
  }, [selectItem]);
  console.log(nfts?.image, "image");
  return (
    <View style={{margin: 5, marginBottom: 20}}>
      <TouchableOpacity
        style={{backgroundColor: palette.white, flex: 1, borderRadius: 8}}
        activeOpacity={0.9}
        onPress={() => {
          if (type === typeScreen.mint) {
            mintAction(nfts?.id);
          } else {
            navigation.navigate('Detail', {
              id: nfts?.id,
            });
          }
        }}>
        <View style={{...commonStyle.row}}>
          <TextCusTom
            children={convertPopularity(nfts?.popularity ?? 0)}
            style={{
              ...typeStyle,
              backgroundColor: palette.tradewind,
              borderBottomLeftRadius: 10,
            }}
          />
          <TextCusTom
            children={convertType(nfts?.type ?? 0)}
            style={{
              ...typeStyle,
              backgroundColor: palette.texasRose,
              borderBottomRightRadius: 10,
            }}
          />
        </View>
        <View
          style={
            type === typeScreen.isBig
              ? {width: 300, height: 300}
              : {width: windowWidth * 0.5 - 15, height: 200}
          }>
          <Image source={{uri: nfts?.image}} style={{flex: 1}} />
        </View>
        <View style={{...commonStyle.row}}>
          <View style={{...commonStyle.row, padding: 5}}>
            <Image source={image.earn} style={{width: 20, height: 20}} />
            <TextCusTom children={nfts?.level} />
          </View>
          <View style={{...commonStyle.row, padding: 5}}>
            <Image source={image.box} style={{width: 20, height: 20}} />
            <TextCusTom children={nfts?.mint_count} />
          </View>
        </View>
        {type === typeScreen.mint && selectNft}
      </TouchableOpacity>
      <View style={{...commonStyle.center, paddingVertical: 5}}>
        <TextCusTom
          children={nfts?.onchain_id}
          style={{color: palette.black, fontWeight: 'bold', fontSize: 20}}
        />
      </View>
      {type === typeScreen.market && (
        <TouchableOpacity
          style={{backgroundColor: palette.white, borderRadius: 5}}
          activeOpacity={0.9}
          onPress={() => {
            onBuyNft();
          }}>
          <View
            style={{
              ...commonStyle.row_between,
              justifyContent: 'space-around',
            }}>
            <View style={{...commonStyle.center}}>
              <TextCusTom
                children={'Buy'}
                style={{color: palette.black, paddingHorizontal: 10}}
              />
            </View>
            <View
              style={{
                ...commonStyle.row,
                backgroundColor: palette.keppelColor,
                padding: 5,
                paddingHorizontal: 20,
                margin: 3,
                borderRadius: 5,
              }}>
              <TextCusTom
                children={nfts?.price.toFixed(2)}
                style={{color: palette.white, paddingHorizontal: 10}}
              />
              <Image source={image.bnbCoin} style={{width: 20, height: 20}} />
            </View>
          </View>
        </TouchableOpacity>
      )}
      {type === typeScreen.sneaker && (
        <TouchableOpacity
          style={{backgroundColor: palette.white, borderRadius: 5}}
          activeOpacity={0.9}>
          <View
            style={{
              ...commonStyle.row_between,
              justifyContent: 'space-around',
            }}>
            <View style={{...commonStyle.center}}>
              <TextCusTom
                children={'WITHDRAW'}
                style={{
                  color: palette.keppelColor,
                  paddingHorizontal: 10,
                  paddingVertical: 8,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ItemSneaker;
const styles = StyleSheet.create({});
