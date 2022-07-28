import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import { en } from '../../i18n/en';
import { palette } from '../../ultis/color';
import { commonStyle, windowWidth } from '../../ultis/const';

const ItemHistory = () => {
  
    return (
        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', padding: 15, margin: 8, marginTop: 20,marginBottom: 0, borderRadius: 8 }}>
        <View style={{ ...commonStyle.row_between }}>
          <View style={{flex: 1, marginRight: 8,}}>
            <TextCusTom children={'112'} />
            <View style={{ ...commonStyle.row_between }}>
              <TextCusTom children={'START'} style={{ fontSize: 14 }} />
              <TextCusTom children={'22-05-11 14:21:01'} style={{ fontSize: 14 }} />
            </View>
            <View style={{ ...commonStyle.row_between }}>
              <TextCusTom children={'STEP'} style={{ fontSize: 14 }} />
              <TextCusTom children={'22'} style={{ fontSize: 14 }} />
            </View>
          </View>
          {/* <View style={{width: 20}}></View> */}
          <View style={{flex: 1, marginLeft: 8,}}>
            <View style={{ ...commonStyle.row_between }}>
              <TextCusTom children={'REWARD'} style={{ fontSize: 14 }} />
              <TextCusTom children={'22'} style={{ fontSize: 14 }} />
            </View>
            <View style={{ ...commonStyle.row_between }}>
              <TextCusTom children={'TIME'} style={{ fontSize: 14 }} />
              <TextCusTom children={'3 min'} style={{ fontSize: 14 }} />
            </View>
            <View style={{ ...commonStyle.row_between }}>
              <TextCusTom children={'DISTANT'} style={{ fontSize: 14 }} />
              <TextCusTom children={'1,7km'} style={{ fontSize: 14 }} />
            </View>
          </View>
        </View>
      </View>
    );
    }

export default ItemHistory;
