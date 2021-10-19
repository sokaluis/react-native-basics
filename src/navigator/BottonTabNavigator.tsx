import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/globalStyles';

type RootTabParams = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <TabsNavigatorIOS />
  ) : (
    <TabsNavigatorAndroid />
  );
};

const BottonTabIOS = createBottomTabNavigator<RootTabParams>();

const TabsNavigatorIOS = () => {
  return (
    <BottonTabIOS.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <BottonTabIOS.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottonTabIOS.Screen
        name="Tab2Screen"
        options={{ title: 'Tab 2' }}
        component={Tab2Screen}
      />
      <BottonTabIOS.Screen
        name="StackNavigator"
        options={{ title: 'Navigator' }}
        component={StackNavigator}
      />
    </BottonTabIOS.Navigator>
  );
};

const BottonTabAndroid = createMaterialBottomTabNavigator<RootTabParams>();

const TabsNavigatorAndroid = () => {
  return (
    <BottonTabAndroid.Navigator
      shifting
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string;
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }
          return <Text style={{ color }}>{iconName}</Text>;
        },
      })}>
      <BottonTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <BottonTabAndroid.Screen
        name="Tab2Screen"
        options={{ title: 'Tab 2' }}
        component={Tab2Screen}
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Navigator' }}
        component={StackNavigator}
      />
    </BottonTabAndroid.Navigator>
  );
};
