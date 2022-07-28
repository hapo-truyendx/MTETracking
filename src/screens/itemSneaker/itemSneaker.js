import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';

const ItemSneaker = () => {
  const navigation = useNavigation();
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };
  return (
    <View style={{margin: 5, marginBottom: 20}}>
      <TouchableOpacity
        style={{backgroundColor: palette.white, flex: 1, borderRadius: 8}}
        activeOpacity={0.9}
        onPress={()=>{navigation.navigate('Detail')}}>
        <View style={{...commonStyle.row}}>
          <TextCusTom
            children={'Common'}
            style={{
              ...typeStyle,
              backgroundColor: palette.tradewind,
              borderBottomLeftRadius: 10,
            }}
          />
          <TextCusTom
            children={'Walker'}
            style={{
              ...typeStyle,
              backgroundColor: palette.texasRose,
              borderBottomRightRadius: 10,
            }}
          />
        </View>

        {/* //checkk dk  */}
        <Image
          source={image.itemSneaker}
          style={{width: windowWidth * 0.5 - 25, height: 200}}
          // style={{width: 300, height: 300}}
        />
        <View style={{...commonStyle.row}}>
          <View style={{...commonStyle.row, padding: 5}}>
            <Image source={image.earn} style={{width: 20, height: 20}} />
            <TextCusTom children={'12'} />
          </View>
          <View style={{...commonStyle.row, padding: 5}}>
            <Image source={image.box} style={{width: 20, height: 20}} />
            <TextCusTom children={'12'} />
          </View>
        </View>
        {/* <View style={{position: 'absolute', backgroundColor:'rgba(0, 0, 0, 0.5)',width: windowWidth * 0.5 - 25, height: 270, ...commonStyle.center}}>
          <Image source={image.check} style={{width: 100, height: 100,}}/>
        </View> */}
      </TouchableOpacity>
      <View style={{...commonStyle.center, paddingVertical: 5}}>
        <TextCusTom
          children={'123'}
          style={{color: palette.black, fontWeight: 'bold', fontSize: 20}}
        />
      </View>
      {/* <TouchableOpacity style={{backgroundColor: palette.white, borderRadius: 5}} activeOpacity= {0.9}>
        <View
          style={{...commonStyle.row_between, justifyContent: 'space-around'}}>
          <View style={{...commonStyle.center}}>
            <TextCusTom children={'Buy'} style={{color: palette.black,paddingHorizontal: 10}}/>
          </View>
          <View
            style={{
              ...commonStyle.row,
              backgroundColor: palette.keppelColor,
              padding: 5,
              paddingHorizontal: 20,
              margin: 3,
              borderRadius:5
            }}>
            <TextCusTom children={'3.2'} style={{color: palette.white, paddingHorizontal: 10}}/>
            <Image source={image.bnbCoin} style={{width: 20, height: 20}} />
          </View>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{backgroundColor: palette.white, borderRadius: 5}}
        activeOpacity={0.9}>
        <View
          style={{...commonStyle.row_between, justifyContent: 'space-around'}}>
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
    </View>
  );
};

export default ItemSneaker;
const styles = StyleSheet.create({});
