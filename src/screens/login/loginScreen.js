import React, {Component} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {image} from '../../assets';
import {TextCusTom} from '../../components/textCustom';
import {en} from '../../i18n/en';
import {palette} from '../../ultis/color';
import {windowHeight, windowWidth} from '../../ultis/const';

const LoginScreen = () => {

  const logginWallet = () => {
    
  }
  return (
    <View style={{flex: 1}}>
      <View style={{position: 'absolute'}}>
        <Image source={image.loginBackground} />
      </View>
      <View style={{position: 'absolute', top: 0, right: 0, left: 0}}>
        <Image
          source={image.loginImage}
          resizeMode="contain"
          style={{width: windowWidth, height: windowHeight}}
        />
      </View>
      <View style={{position: 'absolute', top: 60, right: 110}}>
        <Image source={image.coinItem} style={{width: 110, height: 110}} />
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
          style={{fontSize: 65, fontWeight: 'bold'}}
        />
        <TextCusTom children={en.descriptionLogin} style={{fontSize: 20}} />
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
          onPress = {{}}>
          <Image
            source={image.metamask}
            style={{width: 44, height: 44, marginRight: 10}}
          />
          <TextCusTom
            children={en.connectWallet}
            style={{color: palette.keppelColor}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default LoginScreen;
