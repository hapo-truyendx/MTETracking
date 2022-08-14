import React, { Component, useEffect, useState } from 'react';
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
import { abiApp, abiNft, commonStyle } from '../../ultis/const';
import { typeScreen } from '../../ultis/typeScreen';
import Header from '../header/header';
import ItemSneaker from '../itemSneaker/itemSneaker';

const SneakerScreen = () => {
  const dispatch = useDispatch();
  const nfts = useSelector(state => state.sneaker.listSneaker);
  const [indexTab, setIndexTab] = useState(0);

  const getMetamask = async () => {
    const web3 = new Web3(ApiConfig.rpcUrl);

    // console.log(token._jsonInterface);
    // const myNfts = token._jsonInterface.find((item) => item.name === 'getMyNFTs');
    // console.log(myNfts);
    const token = new web3.eth.Contract(abiApp, ApiConfig.addressApp);
    const contractList = await token.methods.getMyNFTs().call({
      from: ApiConfig.DEMO_WALLET,
      gas: 100000
    }, (err, result) => {
      console.log('aaaa', result, err);
    });

    const tokenNft = new web3.eth.Contract(abiNft, ApiConfig.addressNft);
    const myNft = tokenNft._jsonInterface.find((item) =>
      item.name === "get"
    );
    // console.log(myNft);
    // console.log(tokenNft._jsonInterface);
    const contractShoes = tokenNft.methods.get(147).call({
      from: ApiConfig.DEMO_WALLET,
    }, (err, result) => {
      console.log('item', result, err);
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
  return (
    <ImageBackground
      style={styles.container}
      source={image.appBackground}
      imageStyle={{ resizeMode: 'cover' }}>
      <Header type={typeScreen.sneaker} />
      <View style={{ marginHorizontal: 5, flex: 1 }}>
        <FlatList
          data={nfts}
          renderItem={(item, index) => {
            return <ItemSneaker nfts={item.item} type={typeScreen.sneaker} />;
          }}
          keyExtractor={index => index.toString() + Math.random()}
          numColumns={2}
          style={{ flex: 1 }}
        />
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
