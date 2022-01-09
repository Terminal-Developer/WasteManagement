import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, } from 'react-native';

import UserReport from './src/pages/UserReport';
// import UserNew from './src/pages/UserNew';

import { LoginScreen, HomeScreen, RegistrationScreen, PositionScreen } from './src/screens'
// import UserTab from './src/pages/UserTab';

import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import { Component } from 'react/cjs/react.production.min'; 


import Supervisor from './SupervisorScreens/Supervisor';

import Worker from './WorkerScreens/Workers';



   

import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    // <View style={styles.root}>
    //   <UserTab/>
    //   <Login />
    //  <SignUp/>
    //   <Supervisor />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home">
            {props => <HomeScreen {...props} extraData={user} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="PositionScreen" component={PositionScreen} />
            <Stack.Screen name="SuperVisor" component={Supervisor} />
            <Stack.Screen name="Citizen" component={UserReport} />
            <Stack.Screen name="Worker" component={Worker} />

          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>

  );
}



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
 