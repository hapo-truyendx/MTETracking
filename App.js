/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
//  import './global';
import './shim'
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigation/auth/authNavigation';
import { useWalletConnect, withWalletConnect } from '@walletconnect/react-native-dapp';
import WalletConnectProvider from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './src/navigation/bottomNavigation';
import configureStore from './src/redux/store'

const { persistor, store } = configureStore();

const App = () => {
  const connector = useWalletConnect();
  const backgroundStyle = {
    flex: 1,
  };
  React.useEffect(() => {
    console.log('connect', connector.connected);
  }, [connector])

  return (
    <WalletConnectProvider
      bridge="https://bridge.walletconnect.org"
      clientMeta={{
        description: 'Connect with WalletConnect',
        url: 'https://walletconnect.org',
        icons: ['https://walletconnect.org/walletconnect-logo.png'],
        name: 'WalletConnect',
      }}
      redirectUrl={Platform.OS === 'web' ? window.location.origin : 'yourappscheme://'}
      storageOptions={{
        asyncStorage: AsyncStorage,
      }}>
    <Provider store={store}>
        <SafeAreaView style={backgroundStyle}>
          <NavigationContainer>
            {
              <LoginStack />
              // <BottomTab />
              // connector.connected ? <LoginStack /> : <BottomTab />
            }
          </NavigationContainer>
        </SafeAreaView>
     </Provider>
    </WalletConnectProvider >
  );
};

export default App;
