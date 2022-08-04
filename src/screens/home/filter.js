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
import { filterType } from '../../ultis/constFilter';
import { useDispatch, useSelector } from 'react-redux';
import { filterMarket } from '../../redux/action/marketAction';

const FilterScreen = () => {
  const navigation = useNavigation();
  const dispath = useDispatch();
  const filter = useSelector(state => state.market.filter);

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
          data={filterType.popularityList}
          defaultValue = {filterType.popularityList[0].value}
          onSelect={(selectedItem, index) => {
            const filterPopularity = {
              ...filter,
              popularity: selectedItem.id
            }
            dispath(filterMarket(filterPopularity))
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item, index) => {
            return item.value;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={filter.popularity??filterType.popularityList[0].value}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <SelectDropdown
          data={filterType.typeList}
          onSelect={(selectedItem, index) => {
            const filterType = {
              ...filter,
              type: selectedItem.id
            }
            dispath(filterMarket(filterType))
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item, index) => {
            return item.value;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={filter.type??filterType.typeList[0].value}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <SelectDropdown
          data={filterType.levelList}
          onSelect={(selectedItem, index) => {
            const filterLevel = {
              ...filter,
              level: selectedItem.id
            }
            dispath(filterMarket(filterLevel))
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item, index) => {
            return item.value;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={filter.level??filterType.levelList[0].value}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <SelectDropdown
          data={filterType.mintList}
          onSelect={(selectedItem, index) => {
            const filterMint = {
              ...filter,
              mint_count: selectedItem.id
            }
            dispath(filterMarket(filterMint))
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item, index) => {
            return item.value;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={filter.mint_count??filterType.mintList[0].value}
          dropdownIconPosition={'right'}
          dropdownStyle={styles.dropdown2DropdownStyle}
          rowStyle={styles.dropdown2RowStyle}
          rowTextStyle={styles.dropdown2RowTxtStyle}
        />
      </View>
      <View style={{paddingVertical: 10}}>
        <SelectDropdown
          data={filterType.priceList}
          onSelect={(selectedItem, index) => {
            const filterPrice = {
              ...filter,
              price: selectedItem.id
            }
            dispath(filterMarket(filterPrice))
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem.value;
          }}
          rowTextForSelection={(item, index) => {
            return item.value;
          }}
          renderDropdownIcon={isOpened => {
            return (
              <Image source={image.dropDown} style={{width: 18, height: 18}} />
            );
          }}
          buttonStyle={styles.dropdown2BtnStyle}
          buttonTextStyle={styles.dropdown2BtnTxtStyle}
          defaultButtonText={filter.price??filterType.priceList[0].value}
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
