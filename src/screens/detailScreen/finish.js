import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  TextInput,
} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import {ProgressBar, MD3Colors} from 'react-native-paper';

const FinishScreen = () => {
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };

  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <View style={{...commonStyle.row_between}}>
        <TextCusTom
          children={en.choose}
          style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
        />
        <TouchableOpacity>
          <Image source={image.close} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: palette.white,
            padding: 25,
            margin: 10,
            marginVertical: 20,
            borderRadius: 8,
          }}>
          <View style={{...commonStyle.center}}>
            <Image source={image.time} style={{width: 60, height: 60}} />
            <TextCusTom children={'3.2'} />
          </View>
          <View style={{...commonStyle.row_between, justifyContent:'space-around'}}>
            <View style={{...commonStyle.center}}>
              <Image source={image.time} style={{width: 60, height: 60}} />
              <TextCusTom children={'3.2'} />
            </View>
            <View style={{...commonStyle.center}}>
              <Image source={image.step} style={{width: 60, height: 60}} />
              <TextCusTom children={'3.2'} />
            </View>
          </View>
          <View style={{...commonStyle.row, justifyContent:'space-around'}}>
            <View style={{...commonStyle.center}}>
              <Image source={image.earn} style={{width: 60, height: 60}} />
              <TextCusTom children={'3.2'} />
            </View>
            <View style={{...commonStyle.center}}>
              <Image source={image.earn} style={{width: 60, height: 60}} />
              <TextCusTom children={'3.2'} />
            </View>
          </View>
          <View style={{...commonStyle.center}}>
              <Image source={image.time} style={{width: 60, height: 60}} />
              <TextCusTom children={'3.2'} />
            </View>
        </View>
        <TouchableOpacity style={{...commonStyle.center}}>
          <View
            style={{
              backgroundColor: palette.keppelColor,
              padding: 25,
              paddingVertical: 15,
              borderRadius: 8,
            }}>
            <TextCusTom children={'CLOSE'} style={{color: palette.white}} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default FinishScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
