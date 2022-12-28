import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ScanProducts from './../screens/Scan-Products/products/scanProducts';
import ScanProductDetails from '../screens/Scan-Products/products-details/productDetails';

const MainStack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="ScanProducts" component={ScanProducts} />
      <MainStack.Screen name="ProductDetails" component={ScanProductDetails} />
    </MainStack.Navigator>
  );
};

export default MainStackNavigator;
