import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootState, store} from '../redux/store';
import StackNavigator from './StackNavigator';
import {useSelector} from 'react-redux';

const navigationRef = createNavigationContainerRef();
const RootStack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <RootStack.Screen name="Splash" component={Splash} /> */}
        <RootStack.Screen name="Stack" component={StackNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
