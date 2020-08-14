import React from 'react';
import { Image } from 'react-native';


export default Logo = () => {
  return <>
    <Image style={{width: 150, height: 150}} source={{uri: "https://via.placeholder.com/150?text='logo'"}}/>
  </>;
}