import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import OnboardingScreen from '../screens/Onboarding/OnboardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import ForgotPasswordScreen from '../screens/Auth/ForgotPasswordScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import RestaurantViewScreen from '../screens/Restaurant/RestaurantViewScreen';

import { RootStackParamList } from '../types';
import {
  ADD_TO_CART_PATH,
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  LOGIN_PATH,
  ONBOARDING_PATH,
  ORDER_PATH,
  PAYMENT_SUCCESS,
  REGISTER_PATH,
  RESTAURANT_PATH,
} from '../constants';
import Order from '../screens/Order/Order';
import AddToCart from '../screens/AddToCart/AddToCart';
import SuccessScreen from '../screens/SuccessScreen/SuccessScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name={ONBOARDING_PATH} component={OnboardingScreen} />
        <Stack.Screen name={LOGIN_PATH} component={LoginScreen} />
        <Stack.Screen name={FORGOT_PASSWORD_PATH} component={ForgotPasswordScreen} />
        <Stack.Screen name={REGISTER_PATH} component={RegisterScreen} /> */}
        <Stack.Screen name={HOME_PATH} component={HomeScreen} />
        <Stack.Screen
          name={ORDER_PATH}
          component={Order}
          initialParams={{ restaurant: undefined, quantity: undefined }}
        />
        <Stack.Screen
          name={ADD_TO_CART_PATH}
          component={AddToCart}
          initialParams={{ restaurant: undefined, quantity: undefined }}
        />
        <Stack.Screen
          name={RESTAURANT_PATH}
          component={RestaurantViewScreen}
          initialParams={{ restaurantId: undefined }}
        />
        <Stack.Screen name={PAYMENT_SUCCESS} component={SuccessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
