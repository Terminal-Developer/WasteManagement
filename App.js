import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import UserReport from './src/pages/UserReport';
// import UserNew from './src/pages/UserNew';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import { Component } from 'react/cjs/react.production.min';

import Supervisor from './SupervisorScreens/Supervisor';
import Worker from './WorkerScreens/Workers';

export default function App() {


  return (
    <View>
    <Worker />
    </View>
     

   
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
