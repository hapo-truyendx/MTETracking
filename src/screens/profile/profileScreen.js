import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Screen,
  ScrollView,
  TextInput,
} from 'react-native';
import Header from '../header/header';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import ItemSneaker from '../itemSneaker/itemSneaker';
import ItemHistory from './itemHistory';
import ItemTransation from './itemTransation';
import SelectDropdown from 'react-native-select-dropdown';

const ProfileScreen = () => {
  const countries = [{title: en.stepm}, {title: 'BNB'}];
  return (
    // <Screen>
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <Header />
      <ScrollView>
        <View
          style={{
            ...commonStyle.row,
            justifyContent: 'space-around',
            marginVertical: 30,
          }}>
          <View style={{...commonStyle.center}}>
            <Image source={image.coinItem} style={{width: 80, height: 80}} />
            <TextCusTom
              children={'1000'}
              style={{fontSize: 40, fontWeight: 'bold', color: palette.white}}
            />
            <TextCusTom
              children={en.stepm}
              style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
            />
          </View>
          <View style={{...commonStyle.center}}>
            <Image source={image.bnbCoin} style={{width: 80, height: 80}} />
            <TextCusTom
              children={'1000'}
              style={{fontSize: 40, fontWeight: 'bold', color: palette.white}}
            />
            <TextCusTom
              children={'BNB'}
              style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
            />
          </View>
        </View>
        <View>
          <View
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.7)',
              padding: 25,
              margin: 10,
              marginVertical: 20,
              borderRadius: 8,
            }}>
            <View style={{...commonStyle.row, padding: 10, marginTop: -50}}>
              <View
                style={{
                  backgroundColor: palette.keppelColor,
                  padding: 10,
                  borderTopLeftRadius: 5,
                  borderBottomLeftRadius: 5,
                }}>
                <TextCusTom children={en.deposit} style={styles.textBottom} />
              </View>
              <View
                style={{
                  backgroundColor: palette.waterLeaf,
                  padding: 10,
                  borderTopRightRadius: 5,
                  borderBottomRightRadius: 5,
                }}>
                <TextCusTom children={en.withDraw} style={styles.textBottom} />
              </View>
            </View>
            <View
              style={{
                ...commonStyle.row,
                backgroundColor: palette.white,
                borderRadius: 8,
              }}>
              <TextInput
                value={''}
                onChangeText={value => value}
                style={{flex: 2}}
              />
              <View style={{flex: 1.2}}>
                <SelectDropdown
                  data={countries}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index);
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                    return selectedItem.title;
                  }}
                  rowTextForSelection={(item, index) => {
                    return item.title;
                  }}
                  renderDropdownIcon={isOpened => {
                    return (
                      <Image
                        source={image.dropDown}
                        style={{width: 18, height: 18}}
                      />
                    );
                  }}
                  buttonStyle={styles.dropdown2BtnStyle}
                  buttonTextStyle={styles.dropdown2BtnTxtStyle}
                  defaultButtonText={en.allPrice}
                  dropdownIconPosition={'right'}
                  dropdownStyle={styles.dropdown2DropdownStyle}
                  rowStyle={styles.dropdown2RowStyle}
                  rowTextStyle={styles.dropdown2RowTxtStyle}
                />
              </View>
              <TouchableOpacity
                style={{
                  backgroundColor: palette.keppelColor,
                  padding: 7,
                  paddingVertical: 14,
                  borderTopRightRadius: 8,
                  borderBottomRightRadius: 8,
                }}>
                <TextCusTom
                  children={en.deposit}
                  style={{color: palette.white, fontSize: 14}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{...commonStyle.row, padding: 10, marginTop: 20}}>
            <View
              style={{
                backgroundColor: palette.keppelColor,
                padding: 10,
                borderTopLeftRadius: 5,
                borderBottomLeftRadius: 5,
              }}>
              <TextCusTom children={en.runHistory} style={styles.textBottom} />
            </View>
            <View
              style={{
                backgroundColor: palette.waterLeaf,
                padding: 10,
                borderTopRightRadius: 5,
                borderBottomRightRadius: 5,
              }}>
              <TextCusTom children={en.transation} style={styles.textBottom} />
            </View>
          </View>
          <FlatList
            data={[1, 2, 3, 4, 5, 6]}
            keyExtractor={index => index.toString()}
            renderItem={() => {
              return <ItemTransation />;
            }}
            scrollEnabled={false}
            style={{paddingBottom: 30}}
          />
        </View>
      </ScrollView>
    </ImageBackground>
    // </Screen>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: 'bold',
    color: palette.white,
  },
  dropdown2BtnTxtStyle: {color: palette.black, textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: palette.white},
  dropdown2RowStyle: {
    backgroundColor: palette.white,
    borderBottomColor: palette.white,
  },
  dropdown2RowTxtStyle: {color: palette.black, textAlign: 'left'},
  dropdown2BtnStyle: {
    // height: 50,
    width: 100,
    backgroundColor: palette.white,
    borderRadius: 8,
    // borderColor: '#444',
  },
});
