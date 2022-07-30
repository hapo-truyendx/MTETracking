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
// import crypto from 'crypto'
import { SafeAreaView } from 'react-native';

import DetailSneaker from './src/screens/detailScreen/detailScreen';
import FinishScreen from './src/screens/detailScreen/finish';
import RunSneaker from './src/screens/detailScreen/runScreen';
import FilterScreen from './src/screens/home/filter';
import HomeScreen from './src/screens/home/homeScreen';
import LoginScreen from './src/screens/login/loginScreen';
import ChooseSneaker from './src/screens/mint/chooseSneaker';
import MintScreen from './src/screens/mint/mintScreen';
import ProfileScreen from './src/screens/profile/profileScreen';
import SneakerScreen from './src/screens/sneakers/sneakerScreen';
import { NavigationContainer } from '@react-navigation/native';
import LoginStack from './src/navigation/auth/authNavigation';
import { useWalletConnect,withWalletConnect } from '@walletconnect/react-native-dapp';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTab from './src/navigation/bottomNavigation';
// import { store } from './app/store'
// import { Provider } from 'react-redux'

const App = () => {
  const connector = useWalletConnect();
  const backgroundStyle = {
    flex: 1,
  };
  React.useEffect(()=>{
    console.log('connect', connector.connected);
  },[connector])

  return (
    // <Provider store={store}>
    <SafeAreaView style={backgroundStyle}>
      <NavigationContainer>
        {
          !connector.connected ? <LoginStack /> : <BottomTab />
        }
      </NavigationContainer>
    </SafeAreaView>
    // </Provider>
  );
};

// export default App;
export default withWalletConnect(App, {
  redirectUrl: Platform.OS === 'web' ? window.location.origin : 'yourappscheme://',
  storageOptions: {
    asyncStorage: AsyncStorage,
  },
});
