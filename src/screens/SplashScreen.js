import React from 'react';

import BorderLayout from '@thallyssonklein/border-layout-react-native';

import Logo from '../components/Logo';

import { XStorage } from 'react-native-easy-app';
import { AsyncStorage } from 'react-native';
import { RNStorage } from '../Storage';

export default SplashScreen = ({navigation}) => {
    XStorage.initStorage(RNStorage, AsyncStorage, () => {
        if(RNStorage.token){
            navigation.navigate("Home");
        }else{
            navigation.navigate("Start");
        }
    });
  return <>
        <BorderLayout>
            {{
                center: <Logo/>
            }}
        </BorderLayout>
  </>;
}