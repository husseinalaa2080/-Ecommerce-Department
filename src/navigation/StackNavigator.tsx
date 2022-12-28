import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainStackNavigator from './MainStack';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainStackNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
