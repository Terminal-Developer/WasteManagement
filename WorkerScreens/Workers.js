import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WorkAssigned from './WorkerAssigned';
import WorkCompleted from './WorkerCompleted';


const Tab = createMaterialTopTabNavigator();

export default function Worker() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Work Assigned" component={WorkAssigned} />
        <Tab.Screen name="Completed Work" component={WorkCompleted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}