import React from 'react';
import { Text } from 'react-native';

export default ErrorMessage = (props) => {
  return <Text style={{color: "red"}}>{props.error}</Text>;
}