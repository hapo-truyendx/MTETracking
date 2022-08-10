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
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailRequest } from '../../redux/action/sneakerAction';
import { convertPopularity, convertType } from '../../ultis/convertType';
const DetailSneaker = ({route}) => {
  const navigation = useNavigation();
  const dispath = useDispatch();
  const detailNft = useSelector(state => state.sneaker.detailSneaker);
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };
  
  useEffect(() => {
    dispath(getDetailRequest(route.params.id))
  },[])

  const Progress = () => {
    return (
      <View style={{...commonStyle.row, marginVertical: 10}}>
        <View style={{flex: 4, height: 50}}>
          <View
            style={{
              width: '60%',
              backgroundColor: palette.red,
              height: 50,
              borderRadius: 8,
              ...commonStyle.center,
              alignItems: 'flex-start',
              paddingLeft: 10,
            }}>
            <TextCusTom children={'abc'} />
          </View>
        </View>
        <View style={{...commonStyle.row, flex: 1}}>
          <TextCusTom children={'60'} />
          <View>
            <TextCusTom children={'+1'} />
          </View>
        </View>
      </View>
    );
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
        <TouchableOpacity onPress={()=>{navigation.goBack()}}>
          <Image source={image.close} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <TouchableOpacity
          style={{
            backgroundColor: palette.white,
            width: windowWidth - 30,
            height: windowWidth - 25,
            borderRadius: 8,
          }}
          activeOpacity={0.9}>
          <View style={{...commonStyle.row}}>
            <TextCusTom
              children={convertPopularity(detailNft?.popularity)}
              style={{
                ...typeStyle,
                backgroundColor: palette.tradewind,
                borderBottomLeftRadius: 10,
              }}
            />
            <TextCusTom
              children={convertType(detailNft?.type)}
              style={{
                ...typeStyle,
                backgroundColor: palette.texasRose,
                borderBottomRightRadius: 10,
              }}
            />
          </View>
          <Image
            source={{uri: detailNft?.image}}
            style={{width: windowWidth - 25, height: 200, flex: 1}}
          />
        </TouchableOpacity>
        <View>
          <TextCusTom children={'Level 10/30'} />
          <ProgressBar
            progress={2}
            color={palette.red}
            style={{padding: 10, borderRadius: 10}}
          />
          <View style={{...commonStyle.row_between}}>
            <TextCusTom
              children={'Up to level 11 with fee: 7.5 STEPM'}
              style={{fontSize: 14}}
            />
            <TouchableOpacity
              style={{
                ...commonStyle.row,
                backgroundColor: palette.white,
                padding: 8,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}>
              <Image
                source={image.filter}
                style={{width: 36, height: 36, marginRight: 15}}
              />
              <TextCusTom children={en.filter} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TextCusTom children={'Level 10/30'} />
          <ProgressBar
            progress={2}
            color={palette.red}
            style={{padding: 10, borderRadius: 10}}
          />
          <View style={{...commonStyle.row_between}}>
            <TextCusTom
              children={'Up to level 11 with fee: 7.5 STEPM'}
              style={{fontSize: 14}}
            />
            <TouchableOpacity
              style={{
                ...commonStyle.row,
                backgroundColor: palette.white,
                padding: 8,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}>
              <Image
                source={image.filter}
                style={{width: 36, height: 36, marginRight: 15}}
              />
              <TextCusTom children={en.filter} />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <TextCusTom children={'Level 10/30'} />
          <ProgressBar
            progress={2}
            color={palette.red}
            style={{padding: 10, borderRadius: 10}}
          />
        </View>
        <View style={{...commonStyle.row_between}}>
          <TextCusTom
            children={'Attributes'}
            style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
          />
          <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <TextCusTom children={en.filter} />
          </TouchableOpacity>
        </View>
        <Progress />
        <Progress />
        <Progress />
        <Progress />
        <View
          style={{
            ...commonStyle.row,
            backgroundColor: palette.white,
            borderRadius: 8,
            marginVertical: 15,
          }}>
          <TextInput
            value={''}
            onChangeText={value => value}
            style={{flex: 2}}
          />

          <TouchableOpacity
            style={{
              backgroundColor: palette.keppelColor,
              padding: 20,
              paddingVertical: 10,
              borderRadius: 8,
              marginHorizontal: 8,
            }}>
            <TextCusTom
              children={'SELL'}
              style={{color: palette.white, fontSize: 14}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{}}>
        <TouchableOpacity
          style={{
            ...commonStyle.row,
            borderRadius: 8,
            backgroundColor: palette.texasRose,
            padding: 10,
          }}>
          <TextCusTom
            children={en.choose}
            style={{color: palette.white, fontWeight: 'bold', fontSize: 25}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default DetailSneaker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
});
