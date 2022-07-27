import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';

const Header = () => {
  return (
    <View style={{...commonStyle.row_between, margin: 13}}>
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
              style={{color: palette.black, fontSize: 13}}
            />
          </View>
        </View>
        <View style={{...commonStyle.row}}>
        <Image
            source={image.coinItem}
            style={{width: 50, height: 50, marginRight: 15}}
          />
          <View>
            <TextCusTom
              children={en.balance}
              style={{color: palette.black, fontWeight: 'bold'}}
            />
            <TextCusTom
              children={'10000'}
              style={{color: palette.black, fontSize: 15}}
            />
          </View>
        </View>
      </View>
  )
}
export default Header;
