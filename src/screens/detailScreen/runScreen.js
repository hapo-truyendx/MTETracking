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
import { useNavigation } from '@react-navigation/native';
import PercentageBar from '../../components/progressCustom';

const RunSneaker = () => {
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };

  const navigation = useNavigation()

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
        <TouchableOpacity onPress = {() => navigation.goBack()}>
          <Image source={image.close} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            ...commonStyle.center,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 25,
            margin: 10,
            marginVertical: 20,
            borderRadius: 8,
          }}>
          <TextCusTom
            children={'0'}
            style={{fontSize: 70, color: palette.texasRose, fontWeight: 'bold'}}
          />
          <TextCusTom
            children={'km(total)'}
            style={{fontSize: 30, color: palette.texasRose, fontWeight: 'bold'}}
          />
          <View>{/* Slider */}</View>
        </View>
        <View>
          <View style={{...commonStyle.row, flex: 1}}>
            <View style={{...commonStyle.center}}>
              <Image source={image.earn} style={{width: 30, height: 30}} />
              <TextCusTom children={'16/25'} />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <ProgressBar
                progress={0.5}
                color={palette.red}
                style={{
                  padding: 10,
                  borderRadius: 10,
                  width: windowWidth - 100,
                }}
              />
              <TextCusTom children={'12 STEPM'} />
            </View>
          </View>
        </View>
        <View>
          <View style={{...commonStyle.row, flex: 1}}>
            <View style={{...commonStyle.center}}>
              <Image source={image.energy} style={{width: 30, height: 30}} />
              <TextCusTom children={'16/25'} />
            </View>
            <View style={{justifyContent: 'center', alignItems: 'flex-end'}}>
              <PercentageBar />
              <TextCusTom children={'12 STEPM'} />
            </View>
          </View>
        </View>
        <View
          style={{
            ...commonStyle.row,
            justifyContent:'space-around',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 25,
            margin: 10,
            marginVertical: 20,
            borderRadius: 8,
          }}>
            <View style={{...commonStyle.center}}>
              <Image source={image.time} style ={{width:60, height: 60}}/>
              <TextCusTom children={'3.2'}/>
            </View>
            <View style={{...commonStyle.center}}>
              <Image source={image.step} style ={{width:60, height: 60}}/>
              <TextCusTom children={'3.2'}/>
            </View>
            <View style={{...commonStyle.center}}>
              <Image source={image.earn} style ={{width:60, height: 60}}/>
              <TextCusTom children={'3.2'}/>
            </View>
          </View>
          <TouchableOpacity style={{...commonStyle.center}}>
            <Image source={image.start} style ={{width:100, height: 100}}/>
          </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

export default RunSneaker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
