import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { image } from '../../assets';
import { TextCusTom } from '../../components/textCustom';
import { en } from '../../i18n/en';
import { palette } from '../../ultis/color';
import { windowHeight, windowWidth } from '../../ultis/const';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import { convertUtf8ToHex } from "@walletconnect/utils";

import AsyncStorage from '@react-native-async-storage/async-storage';
import Web3 from 'web3';
import { useDispatch, useSelector } from 'react-redux';
import { authRequest, loginRequest } from '../../redux/action/loginAction';
import { validateLogin, authLogin } from '../../service/loginUser';

const LoginScreen = () => {
  const connector = useWalletConnect();
  const dispatch = useDispatch();
  const stateLogin = useSelector(state => state.login)
  const [messageLogin, setLogin] = useState('');
  const connectWallet = async () => {
    await connector.connect()
    // loginWallet(connector.accounts[0])
    
  };

  const loginWallet = (wallet) => {
    dispatch(loginRequest(wallet));
    connectMetamask(stateLogin.messageLogin);
  }
  
  const connectMetamask = async(state) => {
    if (state != undefined) {
      const msgParams = [
        connector?.accounts[0], 
        convertUtf8ToHex(state)// Required
      ]
      await connector.signPersonalMessage(msgParams).then(async (sig) => {
        dispatch(authRequest({wallet:connector?.accounts[0], sig}))
        // const resultAuth = await authLogin(connector?.accounts[0], sig)
        // console.log(resultAuth);
      });
    }
  }

  // useEffect( () => {
  //   connectMetamask(state.messageLogin);
  // }, [state.messageLogin])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ position: 'absolute' }}>
        <Image source={image.loginBackground} />
      </View>
      <View style={{ position: 'absolute', top: 0, right: 0, left: 0 }}>
        <Image
          source={image.loginImage}
          resizeMode="contain"
          style={{ width: windowWidth, height: windowHeight }}
        />
      </View>
      <View style={{ position: 'absolute', top: 60, right: 110 }}>
        <Image source={image.coinItem} style={{ width: 110, height: 110 }} />
      </View>
      <View
        style={{
          position: 'relative',
          zIndex: 2,
          height: windowHeight * 0.5,
          marginHorizontal: 40,
          marginVertical: 95,
        }}>
        <TextCusTom
          children={en.stepm}
          style={{ fontSize: 65, fontWeight: 'bold' }}
        />
        <TextCusTom children={en.descriptionLogin} style={{ fontSize: 20 }} />
      </View>
      <View
        style={{
          position: 'relative',
          zIndex: 3,
          width: 360,
          height: 64,
          alignSelf: 'center',
          marginTop: 40,
        }}>
        <TouchableOpacity
          style={{
            width: 360,
            height: 64,
            backgroundColor: palette.white,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}
          onPress={connectWallet}
        >
          <Image
            source={image.metamask}
            style={{ width: 44, height: 44, marginRight: 10 }}
          />
          <TextCusTom
            children={en.connectWallet}
            style={{ color: palette.keppelColor }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
// export default withWalletConnect(LoginScreen, {
//   redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
//   storageOptions: {
//     asyncStorage: AsyncStorage,
//   },
// });
