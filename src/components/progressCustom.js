import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const PercentageBar = ({
  navigation,
  percentage,
  height,
  backgroundColor,
  completedColor,
}) => {
  const [getPercentage, setPercentage] = useState(percentage);
  const [getheight, setHeight] = useState(height);
  const [getBackgroundColor, setBackgroundColor] = useState(backgroundColor);
  const [getCompletedColor, setCompletedColor] = useState(completedColor);
  console.log(percentage);
  return (
    <View>
      <View style={{justifyContent: 'center'}}>
        <View
          style={{
            width: '100%',
            height: getheight,
            borderRadius: 10,
            backgroundColor: getBackgroundColor,
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            borderRadius: 10,
            backgroundColor: getCompletedColor,
            position: 'absolute',
            bottom:20
          }}
        />
        <View
          style={{
            width: getPercentage ? getPercentage : 0,
            height: getheight,
            bottom:10
          }}>
        </View>
      </View>
    </View>
  );
};
export default PercentageBar;