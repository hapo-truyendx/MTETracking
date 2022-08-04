import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';

const ItemTransation = transaction => {
  const styleText = transaction.transaction.amount >= 0 ? styles.text : styles.text_red
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
        <TextCusTom children={transaction.transaction.created_at} style={styleText} />
        <TextCusTom children={transaction.transaction.amount} style={styleText} />
        <TextCusTom children={transaction.transaction.currency} style={styleText} />
        <TextCusTom
          children={transaction.transaction.transaction_type}
          style={styleText}
        />
      </View>
    </View>
  );
};

export default ItemTransation;
const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: palette.keppelColor,
  },
  text_red :{
    fontSize: 14,
    color: palette.red,
  }
});
