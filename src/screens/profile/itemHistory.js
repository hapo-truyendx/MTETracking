import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';

const ItemHistory = (run) => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 15,
        margin: 8,
        marginTop: 20,
        marginBottom: 0,
        borderRadius: 8,
      }}>
      <View style={{...commonStyle.row_between}}>
        <View style={{flex: 1, marginRight: 8}}>
          <TextCusTom children={run.runs.nft} />
          <View style={{...commonStyle.row_between}}>
            <TextCusTom children={'START'} style={{fontSize: 14}} />
            <TextCusTom children={run.runs.start_time} style={{fontSize: 14}} />
          </View>
          <View style={{...commonStyle.row_between}}>
            <TextCusTom children={'ENERGY'} style={{fontSize: 14}} />
            <TextCusTom children={run.runs.total_energy} style={{fontSize: 14}} />
          </View>
        </View>
        <View style={{flex: 1, marginLeft: 8}}>
          <View style={{...commonStyle.row_between}}>
            <TextCusTom children={'REWARD'} style={{fontSize: 14}} />
            <TextCusTom children={run.runs.total_earn} style={{fontSize: 14}} />
          </View>
          <View style={{...commonStyle.row_between}}>
            <TextCusTom children={'TIME'} style={{fontSize: 14}} />
            <TextCusTom children={run.runs.total_time + ' min'} style={{fontSize: 14}} />
          </View>
          <View style={{...commonStyle.row_between}}>
            <TextCusTom children={'DISTANT'} style={{fontSize: 14}} />
            <TextCusTom children={run.runs.total_distance + ' km'} style={{fontSize: 14}} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemHistory;
