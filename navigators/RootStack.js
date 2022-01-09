import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../src/pages/Login';
import SignUp from '../src/pages/SignUp';
import UserTab from '../src/pages/UserTab';

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UserTab" component={UserTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
