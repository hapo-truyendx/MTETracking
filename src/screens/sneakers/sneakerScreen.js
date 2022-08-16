import React, { Component, useEffect, useMemo, useState } from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Web3 from 'web3';
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import ApiConfig from '../../config/api-config';
import { en } from '../../i18n/en';
import { getListSneakerRequest } from '../../redux/action/sneakerAction';
import { palette } from '../../ultis/color';
import { abiApp, abiNft, commonStyle, getAssetImage } from '../../ultis/const';
import { convertPopularity, convertType } from '../../ultis/convertType';
import { typeScreen } from '../../ultis/typeScreen';
import Header from '../header/header';
import ItemSneaker from '../itemSneaker/itemSneaker';

const SneakerScreen = () => {
  const dispatch = useDispatch();
  const nfts = useSelector(state => state.sneaker.listSneaker);
  const [indexTab, setIndexTab] = useState(0);
  const [listNft, setListNft] = useState();

  const getMetamask = async () => {
    const web3 = new Web3(ApiConfig.rpcUrl);
    let listIdMyNfts = [];
    const listMyNfts = [];
    const token = new web3.eth.Contract(abiApp, ApiConfig.addressApp);
    await token.methods.getMyNFTs().call({
      from: ApiConfig.DEMO_WALLET,
      gas: 100000
    }, (err, result) => {
      listIdMyNfts = [...result];
    });

    const tokenNft = new web3.eth.Contract(abiNft, ApiConfig.addressNft);
    listIdMyNfts.forEach(async (item, index) => {
      await tokenNft.methods.get(item).call({
        from: ApiConfig.DEMO_WALLET,
      }, (err, result) => {
        // const popularity = convertPopularity(result[0]);
        // const nftType = convertType(result[1]);
        const sneaker = {
          popularity: result[0],
          nftType: result[1],
          status: result[2] ? 1 : 0,
          hsEfficiency: result[3] ? result[3] : 0,
          hsDurability: result[4] ? result[4] : 0,
          hsLuck: result[5] ? result[5] : 0,
          hsComfort: result[6] ? result[6] : 0,
          onChainId: item,
          image: getAssetImage({
            nftType: parseInt(result[1]) + 1,
            popularity: parseInt(result[1]) + 1,
          }),
          isFromContractABI: true,
        }
        listMyNfts.push(sneaker)
      })
      setListNft(listMyNfts);
    })
  };

  useEffect(() => {
    if (indexTab === 0) {
      dispatch(getListSneakerRequest());
    } else if (indexTab === 1) {
      getMetamask();
    } else {
    }
  }, [indexTab]);

  console.log(indexTab);

  const renderListNft = useMemo(() => {
    let data = [];
    switch (indexTab) {
      case 0:
        data = nfts;
        break;
      case 1:
        data = listNft;
        break;
      case 2:
        data = [];
      default:
        break;
    }
    return (
      <FlatList
        data={data}
        renderItem={(item, index) => {
          return <ItemSneaker nfts={item.item} type={typeScreen.sneaker} />;
        }}
        keyExtractor={index => index.toString() + Math.random()}
        numColumns={2}
        style={{ flex: 1 }}
      />
    )
  }, [indexTab,listNft])
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{ resizeMode: 'cover' }}>
      <Header type={typeScreen.sneaker} />
      <View style={{ marginHorizontal: 5, flex: 1 }}>
        {renderListNft}
      </View>
      <View style={{ ...commonStyle.row, padding: 10 }}>
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
