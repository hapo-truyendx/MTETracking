import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, status} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';
import {useNavigation} from '@react-navigation/native';
import {getListNft} from '../../service/marketApi';
import {typeScreen} from '../../ultis/typeScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  const [listNft, setListNft] = useState([]);

  const getListNfts = async () => {
    const result = await getListNft();
    if (result.status === status.success) {
      setListNft(result.nfts);
    } else {
      getListNfts();
    }

    // console.log(result);
  };
  useEffect(() => {
    getListNfts();
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <View style={{...commonStyle.row_between, margin: 20}}>
        <View style={{...commonStyle.row}}>
          <Image
            source={image.runner}
            style={{width: 50, height: 50, marginRight: 15}}
          />
          <View>
            <TextCusTom
              children={'0x12..0K18'}
              style={{color: palette.black, fontWeight: 'bold'}}
            />
            <TextCusTom
              children={en.account}
              style={{color: palette.black, fontSize: 15}}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}
            onPress={() => navigation.navigate('Filter')}>
            <Image
              source={image.filter}
              style={{width: 36, height: 36, marginRight: 15}}
            />
            <TextCusTom children={en.filter} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginHorizontal: 5, flex: 1}}>
        <FlatList
          data={listNft}
          renderItem={(item, index) => {
            return (
              <ItemSneaker
                key={index}
                nfts={item.item}
                type={typeScreen.market}
              />
            );
          }}
          key={index => index}
          keyExtractor={index => index.toString()}
          numColumns={2}
          style={styles.container}
        />
      </View>
    </ImageBackground>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
