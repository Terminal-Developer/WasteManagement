import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import UserTab from './src/pages/UserTab';
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import { Component } from 'react/cjs/react.production.min';

export default function App() {
  return (
    <View style={styles.root}>
      {/* <UserTab/> */}
      <Login />
      <SignUp/>
    </View>
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
