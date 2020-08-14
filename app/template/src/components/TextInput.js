import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput as RnTextInput } from 'react-native-paper';
import Colors from '../Colors';

const styles = StyleSheet.create({
    textInput : {
        backgroundColor: Colors.primaryShade2,
        color: Colors.primaryShade1,
        padding: 10,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 50
    },
    text: {
        marginLeft: 20,
        marginBottom: 10,
        fontSize: 20
    }
});

export default TextInput = React.forwardRef((props, ref) => {
    const [text, setText] = useState("");

    return (
      <View>
        {props.label && <Text style={styles.text}>{props.label}</Text>}
        <RnTextInput
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          secureTextEntry={props.secure}
          ref={ref}
          autoCapitalize='none'
        />
      </View>
    );
  });