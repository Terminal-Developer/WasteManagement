import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';

import UserTab from './src/pages/UserTab'
import Login from './src/pages/Login';
import SignUp from './src/pages/SignUp';
import { Component } from 'react/cjs/react.production.min';

import Supervisor from './SupervisorScreens/Supervisor';

export default function App() {

  

  // constructor(); {
  //   super()

  //   this.renderScene = this.renderScene.bind(this)
  // }

  // renderScene(route, navigator); {
  //   if(rout.name === 'loginpage'){
  //     return <Login navigator={navigator}/>
  //   }
  //   else if(rout.name === 'signuppage'){
  //     return<About navigator={navigator}/>
  //   }
  // }
  return (
    <View>
     <Login />
     <SignUp/>
     <UserTab/>
     <Supervisor/>
     </View>

    // <Navigator 
    //   initialRout={{name:'loginpage'}}
    //   renderScene={this.renderScene}
    // />
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
