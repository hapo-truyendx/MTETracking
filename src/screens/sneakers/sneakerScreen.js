import React, {Component} from 'react';
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
import {commonStyle} from '../../ultis/const';
import Header from '../header/header';
import ItemSneaker from '../itemSneaker/itemSneaker';

const SneakerScreen = () => {
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <Header />
      <View style={{marginHorizontal: 5, flex: 1}}>
        <FlatList
          data={[1, 2, 3, 4, 5]}
          renderItem={() => {
            return <ItemSneaker />;
          }}
          keyExtractor={index => index.toString()}
          numColumns={2}
          style={{flex: 1}}
        />
      </View>
      <View style={{...commonStyle.row, padding: 10}}>
          <View style={{backgroundColor:palette.keppelColor, padding:10, borderTopLeftRadius: 5,borderBottomLeftRadius: 5}}>
            <TextCusTom children={en.inUse} style ={styles.textBottom}/>
          </View>
          <View  style={{backgroundColor:palette.waterLeaf,padding:10,borderLeftWidth:1, borderRightWidth:1, borderColor:palette.white}}>
            <TextCusTom children={en.notUsedYet} style ={styles.textBottom}/>
          </View>
          <View  style={{backgroundColor: palette.waterLeaf, padding:10, borderTopRightRadius: 5,borderBottomRightRadius: 5}}>
            <TextCusTom children={en.forSale} style ={styles.textBottom}/>
          </View>
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
    color: palette.white
  }
});
