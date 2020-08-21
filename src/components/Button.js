import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Colors from '../Colors';

const styles = StyleSheet.create({
    touchableOpacity: {
        backgroundColor: Colors.secondaryShade2,
        padding: 10
    },
    text: {
        color: Colors.white,
        textAlign: "center"
    }
});
export default Button = (props) => {
  return <View>
            <TouchableOpacity style={styles.touchableOpacity} onPress={props.onPress}>
                <Text style={styles.text}>{props.title}</Text>
            </TouchableOpacity>
        </View>;
}