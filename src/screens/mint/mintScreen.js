import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Header from '../header/header';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';
import {typeScreen} from '../../ultis/typeScreen';
import {useDispatch, useSelector} from 'react-redux';
import {
  getMintChooseRequest,
  getMintFeeRequest,
  onMintRequest,
  getMintChooseSuccess,
  onSelectItem,
} from '../../redux/action/mintAction';
import {useNavigation} from '@react-navigation/native';

const MintScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const selected = useSelector(state => state.mint.selectNfts);
  const nfts = useSelector(state => state.mint.choose);
  const mintFee = useSelector(state => state.mint.fee);
  console.log(selected.length, selected);

  const onMint = () => {
    dispatch(getMintChooseRequest());
    navigation.navigate('Choose');
  };
  useEffect(() => {
    return () => {
      dispatch(getMintChooseSuccess([]));
      dispatch(onSelectItem())
    };
  }, []);

  useEffect(() => {
    dispatch(getMintFeeRequest(selected));
  }, [nfts]);

  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <Header type={typeScreen.mint} />
      <ScrollView>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 25,
            margin: 10,
            borderRadius: 8,
          }}>
          {selected.length == 0 ? (
            <TouchableOpacity
              onPress={onMint}
              style={{
                backgroundColor: palette.white,
                height: windowWidth * 0.8,
                borderRadius: windowWidth * 0.8,
                ...commonStyle.row,
              }}
              activeOpacity={0.9}>
              <Image source={image.plus} style={{width: 30, height: 30}} />
            </TouchableOpacity>
          ) : (
            <FlatList
              data={selected}
              renderItem={(item, index) => {
                const items = nfts.find(i => i.id === item.item);
                return <ItemSneaker nfts={items} type={typeScreen.isBig} />;
              }}
              scrollEnabled={false}
            />
          )}
          <View style={{...commonStyle.row, marginVertical: 20}}>
            <TextCusTom children={en.mintFee} style={{color: palette.black}} />
            <TextCusTom children={` ${mintFee} STEPM`} />
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity
              onPress={() => {
                dispatch(onMintRequest(selected));
              }}
              style={{
                ...commonStyle.row,
                backgroundColor: palette.texasRose,
                padding: 10,
                borderRadius: 8,
              }}>
              <TextCusTom
                children={en.mint}
                style={{fontWeight: '900', fontSize: 25, color: palette.white}}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            padding: 25,
            margin: 10,
            marginVertical: 20,
            borderRadius: 8,
          }}>
          <Image
            source={image.note}
            style={{
              width: 30,
              height: 30,
              position: 'absolute',
              top: -15,
              left: 10,
            }}
          />
          <TextCusTom children={en.note} style={styles.textNote} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default MintScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textNote: {
    fontSize: 12,
    color: palette.black,
  },
});
