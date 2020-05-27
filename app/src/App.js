import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StartScreen from './screens/StartScreen';
import Form from './screens/Form';
import Hello from './screens/Hello';

const Stack = createStackNavigator();

export default App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Start">
          <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
          <Stack.Screen name="Hello" component={Hello} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}