import React, {Component} from 'react';
import {View, Text,StyleSheet} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';

const ItemTransation = () => {
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
       <TextCusTom children={'22-05-11 14:21'} style={styles.text}/>
       <TextCusTom children={'-120 STEPM'} style={styles.text}/>
       <TextCusTom children={en.withDraw} style={styles.text}/>
       <TextCusTom children={'Pending'} style={styles.text}/>
      </View>
    </View>
  );
};

export default ItemTransation;
const styles = StyleSheet.create({
  text:{
    fontSize: 14,
    color:palette.keppelColor
  }
})