import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SupervisorCompleted from './SupervisorCompleted';
import SupervisorNew from './SupervisorNew';
import SupervisorOngoing from './SupervisorOngoing';


const Tab = createMaterialTopTabNavigator();

export default function Supervisor() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="New" component={SupervisorNew} />
        <Tab.Screen name="Ongoing" component={SupervisorOngoing} />
        <Tab.Screen name="Completed" component={SupervisorCompleted} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}