/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
//  import './global';
import './shim';
import {SafeAreaView} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import LoginStack from './src/navigation/auth/authNavigation';
import {
  useWalletConnect,
  withWalletConnect,
} from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './src/navigation/bottomNavigation';
import configureStore from './src/redux/store';
import {getItem} from './src/service/storage';
import {Constants} from './src/ultis/const';

const {persistor, store} = configureStore();

const App = () => {
  const connector = useWalletConnect();
  const [tokenLogin, setState] = React.useState('');
  const backgroundStyle = {
    flex: 1,
  };
  React.useEffect(() => {
    const token = getItem(Constants.TOKEN);
    console.log(typeof '');
    if (typeof token === 'string') {
      console.log(token, 'loginkken');
      setState(token);
    }
  }, [connector]);

  // console.log(tokenLogin);
  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
      }}
      redirectUrl={
        Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'
      }
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
      <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <NavigationContainer>
            {
              // <LoginStack />
              <BottomTab />
              // !tokenLogin ? <LoginStack /> : <BottomTab />
            }
          </NavigationContainer>
        </SafeAreaView>
      </Provider>
    </WalletConnectProvider>
  );
};

export default App;
