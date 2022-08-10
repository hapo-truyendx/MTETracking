import React, {Component, useEffect, useState} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import { getListSneakerRequest } from '../../redux/action/sneakerAction';
import {palette} from '../../ultis/color';
import {commonStyle} from '../../ultis/const';
import { typeScreen } from '../../ultis/typeScreen';
import Header from '../header/header';
import ItemSneaker from '../itemSneaker/itemSneaker';

const SneakerScreen = () => {
  const dispatch = useDispatch();
  const nfts = useSelector(state => state.sneaker.listSneaker)
  const [indexTab, setIndexTab] = useState(0);
  console.log(nfts, 'nfts');

  useEffect(()=>{
    if(indexTab === 0) {
      dispatch(getListSneakerRequest());
    }
    else if(indexTab === 1){

    }
    else {

    }
    
  }, [indexTab])
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <Header type ={typeScreen.sneaker}/>
      <View style={{marginHorizontal: 5, flex: 1}}>
        <FlatList
          data={nfts}
          renderItem={(item , index) => {
            return <ItemSneaker nfts={item.item} type ={typeScreen.sneaker} />;
          }}
          keyExtractor={index => index.toString() + Math.random()}
          numColumns={2}
          style={{flex: 1}}
        />
      </View>
      <View style={{...commonStyle.row, padding: 10}}>
        <TouchableOpacity
          onPress={() => setIndexTab(0)}
          style={{
            backgroundColor:
              indexTab === 0 ? palette.keppelColor : palette.waterLeaf,
            ...styles.bottomTab,
          }}>
          <TextCusTom children={en.inUse} style={styles.textBottom} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIndexTab(1)}
          style={{
            backgroundColor:
              indexTab === 1 ? palette.keppelColor : palette.waterLeaf,
            ...styles.bottomTabCenter,
          }}>
          <TextCusTom children={en.notUsedYet} style={styles.textBottom} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIndexTab(2)}
          style={{
            backgroundColor:
              indexTab === 2 ? palette.keppelColor : palette.waterLeaf,
            ...styles.bottomTab,
          }}>
          <TextCusTom children={en.forSale} style={styles.textBottom} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};
export default SneakerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: 'bold',
    color: palette.white,
  },
  bottomTab: {
    padding: 10,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  bottomTabCenter: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: palette.white,
    padding: 10,
  },
});
