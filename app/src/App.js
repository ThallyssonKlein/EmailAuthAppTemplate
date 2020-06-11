import React from 'react';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './screens/SplashScreen';
import StartScreen from './screens/StartScreen';
import Form from './screens/FormScreen';
import Home from './screens/HomeScreen';

const Stack = createStackNavigator();

export default App = () => {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Start" component={StartScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Form" component={Form} options={{headerShown: false}}/>
          <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}