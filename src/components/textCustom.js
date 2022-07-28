import React from 'react';
import {Text, StyleSheet} from 'react-native';
import { palette } from '../ultis/color';
// import fontStyles from '../../config/font-styles';

export const TextCusTom = ({
  children,
  style = {},
  numberOfLines = 10,
  ellipsizeMode = 'tail',
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      style={[styles.defaultStyle, style]}
      {...props}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    
    fontWeight: '400',
    fontSize: 18,
    color: palette.keppelColor,
    // fontFamily: fontStyles.regular
  },
});
