import React, {Component} from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {commonStyle, windowWidth} from '../../ultis/const';
import SelectDropdown from 'react-native-select-dropdown';
import { useNavigation } from '@react-navigation/native';

const FilterScreen = () => {
  const navigation = useNavigation();
  const countries = [
    {title: 'Egypt', cities: [{title: 'Cairo'}, {title: 'Alex'}]},
    {title: 'Canada', cities: [{title: 'Toronto'}, {title: 'Quebec City'}]},
  ];

  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{resizeMode: 'cover'}}>
      <View style={{...commonStyle.row_between}}>
        <TextCusTom
          children={en.filterBy}
          style={{fontSize: 25, fontWeight: 'bold', color: palette.white}}
        />
        <TouchableOpacity onPress = {() => navigation.goBack()}>
          <Image source={image.close} style={{width: 36, height: 36}} />
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 10, marginTop: 10,}}>
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
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={en.allPopularity}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
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
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={en.allType}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
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
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={en.allLevel}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
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
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={en.mint}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
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
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
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
    </ImageBackground>
  );
};

export default FilterScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  dropdown2BtnTxtStyle: {color: palette.black, textAlign: 'left'},
  dropdown2DropdownStyle: {backgroundColor: palette.white},
  dropdown2RowStyle: {backgroundColor: palette.white, borderBottomColor: palette.white},
  dropdown2RowTxtStyle: {color: palette.black, textAlign: 'left'},
  dropdown2BtnStyle: {
    height: 50,
    width: windowWidth - 30,
    backgroundColor: palette.white,
    borderRadius: 8,
    borderColor: '#444',
  },
});
