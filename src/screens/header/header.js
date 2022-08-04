import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import { en } from '../../i18n/en';
import { palette } from '../../ultis/color';
import { commonStyle } from '../../ultis/const';
import { typeScreen } from '../../ultis/typeScreen';

const Header = (type) => {
  const profile = useSelector(state => state.profile.profile)
  const convertString = () => {
    const startString = profile.wallet.slice(0, 3);
    const lengthString = profile.wallet.length;
    const endString = profile.wallet.slice(lengthString -3, lengthString);
    return `${startString}...${endString}`
  }
  return (
    <View style={{ ...commonStyle.row_between, margin: 13 }}>
      <View style={{ ...commonStyle.row }}>
        <Image
          source={image.runner}
          style={{ width: 50, height: 50, marginRight: 15 }}
        />
        <View>
          <TextCusTom
            children={convertString()}
            style={{ color: palette.black, fontWeight: 'bold' }}
          />
          <TextCusTom
            children={en.account}
            style={{ color: palette.black, fontSize: 13 }}
          />
        </View>
      </View>
      {(type.type === typeScreen.sneaker || type.type === typeScreen.mint ) && <View style={{ ...commonStyle.row }}>
        <Image
          source={image.coinItem}
          style={{ width: 50, height: 50, marginRight: 15 }}
        />
        <View>
          <TextCusTom
            children={en.balance}
            style={{ color: palette.black, fontWeight: 'bold' }}
          />
          <TextCusTom
            children={profile.total_stepm}
            style={{ color: palette.black, fontSize: 15 }}
          />
        </View>
      </View>}
      {
        type.type === typeScreen.profile && <View>
          <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            onPress={() => { }}>
            <Image
              source={image.logout}
              style={{ width: 36, height: 36, marginRight: 15 }}
            />
            <TextCusTom children={en.logout} />
          </TouchableOpacity>
        </View>
      }
      {
        type.type === typeScreen.market && <View>
          <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            onPress={() => { () => navigation.navigate('Filter')}}>
            <Image
              source={image.filter}
              style={{ width: 36, height: 36, marginRight: 15 }}
            />
            <TextCusTom children={en.filter} />
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}
export default Header;
