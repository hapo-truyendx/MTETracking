import React, { Component } from 'react';
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
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import { en } from '../../i18n/en';
import { palette } from '../../ultis/color';
import { commonStyle, configDetail, maxHs, windowWidth } from '../../ultis/const';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDetailRequest } from '../../redux/action/sneakerAction';
import { convertPopularity, convertType } from '../../ultis/convertType';
import PercentageBar from '../../components/progressCustom';
import { typeScreen } from '../../ultis/typeScreen';
import { onBuyItemNfts } from '../../redux/action/marketAction';
const DetailSneaker = ({ route, }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const detailNft = useSelector(state => state.sneaker.detailSneaker);
  const typeStyle = {
    ...commonStyle.center,
    color: palette.white,
    fontSize: 15,
    padding: 5,
  };

  useEffect(() => {
    dispatch(getDetailRequest(route.params.id))
  }, [])

  console.log(detailNft, 'detai');
  const onBuyNft = async () => {
    dispatch(onBuyItemNfts(detailNft?.onchain_id));
  };

  const Progress = ({ text, colorComplete = palette.transparent, percentage }) => {

    return (
      <View style={{ ...commonStyle.row, marginVertical: 10 }}>
        <View style={{ flex: 4, height: 50 }}>
          <View
            style={{
              width: percentage ?? 0,
              backgroundColor: colorComplete ?? palette.white,
              height: 50,
              borderRadius: 8,
              ...commonStyle.center,
              alignItems: 'flex-start',
              paddingLeft: 10,
            }}>
            <TextCusTom children={text} style={{ color: palette.white }} numberOfLines = {1}/>
          </View>
        </View>
        <View style={{ ...commonStyle.row, flex: 1 }}>
          <TextCusTom children={percentage} />
          {/* <View>
            <TextCusTom children={'+1'} />
          </View> */}
        </View>
      </View>
    );
  };
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{ resizeMode: 'cover' }}>
      <View style={{ ...commonStyle.row_between,
      paddingVertical: 10 }}>
        <TextCusTom
          children={detailNft.onchain_id}
          style={{ fontSize: 25, fontWeight: 'bold', color: palette.black }}
        />
        <TouchableOpacity onPress={() => { navigation.goBack() }}>
          <Image source={image.close} style={{ width: 36, height: 36 }} />
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
          <View style={{ ...commonStyle.row }}>
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
            source={{ uri: detailNft?.image }}
            style={{ width: windowWidth - 25, height: 200, flex: 1 }}
          />
        </TouchableOpacity>
        <View style={{ marginHorizontal: 30, marginVertical: 20, }}>
          <View>
            <TextCusTom children={`Level ${detailNft?.level ?? 0} /${detailNft?.level_max}`} style={styles.text} />
            <PercentageBar
              height={20}
              backgroundColor={palette.white}
              completedColor={palette.persianGreen}
              percentage={`${(detailNft?.level / detailNft?.level_max) * 100}%`}
            />
            {route.params?.type === typeScreen.inUse && <View style={{ ...commonStyle.row_between }}>
              <TextCusTom
                children={`Up to next level with fee: ${detailNft?.up_level_fee} STEPM`}
                style={{ ...styles.text, fontSize: 13 }}
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
                  style={{ width: 36, height: 36, marginRight: 15 }}
                />
                <TextCusTom children={en.filter} />
              </TouchableOpacity>
            </View>}
          </View>
          <View>
            <TextCusTom children={`Durability ${detailNft?.durability ?? 0}/${configDetail.maxDurability}`} style={styles.text} />
            <PercentageBar
              height={20}
              backgroundColor={palette.white}
              completedColor={palette.persianGreen}
              percentage={`${(detailNft?.durability / configDetail.maxDurability) * 100}%`}
            />
            {route.params?.type === typeScreen.inUse && <View style={{ ...commonStyle.row_between }}>
              <TextCusTom
                children={`Repair with fee: ${detailNft?.repair_fee} STEPM`}
                style={{ ...styles.text, fontSize: 13 }}
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
                  style={{ width: 36, height: 36, marginRight: 15 }}
                />
                <TextCusTom children={en.filter} />
              </TouchableOpacity>
            </View>}
          </View>
          <View>
            <TextCusTom children={`Mint ${detailNft?.mint_count}/${configDetail.maxMint}`} style={styles.text} />
            <PercentageBar
              height={20}
              backgroundColor={palette.white}
              completedColor={palette.persianGreen}
              percentage={`${(detailNft?.mint_count / configDetail.maxMint) * 100}%`}
            />
          </View>
        </View>
        <View style={{ ...commonStyle.row_between, marginBottom: 20, }}>
          <TextCusTom
            children={'Attributes'}
            style={{ fontSize: 25, fontWeight: 'bold', color: palette.black }}
          />
          {route.params?.type === typeScreen.inUse && <TouchableOpacity
            style={{
              ...commonStyle.row,
              backgroundColor: palette.white,
              padding: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
            }}>
            <TextCusTom children={en.filter} />
          </TouchableOpacity>}
        </View>
        <Progress text={'Efficiency'} colorComplete={palette.bittersweet} percentage={`${(detailNft?.hs_efficiency / maxHs.maxProgressBar )* maxHs.maxProgressBar}%`} />
        <Progress text={'Durability'} colorComplete={palette.heliotrope} percentage={`${(detailNft.hs_durability / maxHs.maxDurability).toFixed(2) * maxHs.maxProgressBar}%`} />
        <Progress text={'Comfort'} colorComplete={palette.macaroni} percentage={`${(detailNft?.hs_comfort / maxHs.maxProgressBar) * maxHs.maxProgressBar}%`} />
        <Progress text={'Luck'} colorComplete={palette.hotPink} percentage={`${(detailNft?.hs_luck / maxHs.maxProgressBar) * maxHs.maxProgressBar}%`} />
        {route.params?.type === typeScreen.sneaker && <View
          style={{
            ...commonStyle.row,
            backgroundColor: palette.white,
            borderRadius: 8,
            marginVertical: 15,
          }}>
          <TextInput
            value={''}
            onChangeText={value => value}
            style={{ flex: 2 }}
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
              style={{ color: palette.white, fontSize: 14 }}
            />
          </TouchableOpacity>
        </View>}
      </ScrollView>
      {route.params?.type === typeScreen.market && (
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: palette.texasRose,
            padding: 10,
          }}
          activeOpacity={0.9}
          onPress={() => {
            onBuyNft();
          }}>
          <View
            style={{
              ...commonStyle.row_between,
              justifyContent: "space-between",
              // justifyContent: 'flex-start',
            }}>
            <View style={{ ...commonStyle.center, marginLeft: 50, }}>
              <TextCusTom
                children={'Buy'}
                style={{ color: palette.black, paddingHorizontal: 10, fontSize: 25, color: palette.white, fontWeight: 'bold', }}
              />
            </View>
            <View
              style={{
                ...commonStyle.row,
                backgroundColor: palette.white,
                padding: 5,
                paddingHorizontal: 20,
                margin: 3,
                borderRadius: 5,
              }}>
              <TextCusTom
                children={detailNft?.price.toFixed(2)}
                style={{ color: palette.white, paddingHorizontal: 10, color: palette.texasRose }}
              />
              <Image source={image.bnbCoin} style={{ width: 20, height: 20 }} />
            </View>
          </View>
        </TouchableOpacity>
      )}
      {route.params?.type === typeScreen.sneaker && (
        <TouchableOpacity
          style={{
            borderRadius: 8,
            backgroundColor: palette.texasRose,
            padding: 10,
          }}
          activeOpacity={0.9}
          onPress={() => {
            onBuyNft();
          }}>
          <View
            style={{
              ...commonStyle.row_between,
              justifyContent: "space-between",
              // justifyContent: 'flex-start',
            }}>
            <View style={{ ...commonStyle.center, marginLeft: 50, }}>
              <TextCusTom
                children={'Cancel'}
                style={{ color: palette.black, paddingHorizontal: 10, fontSize: 25, color: palette.white, fontWeight: 'bold', }}
              />
            </View>
            <View
              style={{
                ...commonStyle.row,
                backgroundColor: palette.white,
                padding: 5,
                paddingHorizontal: 20,
                margin: 3,
                borderRadius: 5,
              }}>
              <TextCusTom
                children={detailNft?.price.toFixed(2)}
                style={{ color: palette.white, paddingHorizontal: 10, color: palette.texasRose }}
              />
              <Image source={image.bnbCoin} style={{ width: 20, height: 20 }} />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </ImageBackground>
  );
};

export default DetailSneaker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  text: {
    color: palette.black,
    fontSize: 16,
    paddingVertical: 5
  }
});
