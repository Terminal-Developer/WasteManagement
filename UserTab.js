import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

function ReportScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Report</Text>
    </View>
  );
}

function NewScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>New</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function UserTab() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Report" component={ReportScreen} />
        <Tab.Screen name="New" component={NewScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
