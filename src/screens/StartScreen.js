import React from 'react';
import { View } from 'react-native';
import BorderLayout from '@thallyssonklein/border-layout-react-native';

import Button from '../components/Button';
import Logo from '../components/Logo';

export default StartScreen = ({navigation}) => {
  return <>
      <BorderLayout>
        {{
          top:
          <View style={{flex: 1, flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
            <Logo/>
          </View>,
          bottom: <View><Button title="ENTRAR" onPress={() => navigation.navigate("Form")}/></View>
        }}
      </BorderLayout>
  </>;
}