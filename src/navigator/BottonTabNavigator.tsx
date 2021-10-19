import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import { TopTabNavigator } from './TopTabNavigator';
import StackNavigator from './StackNavigator';
import { colors, globalStyles } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

type RootTabParams = {
  Tab1Screen: undefined;
  TopTabNavigator: undefined;
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
      sceneContainerStyle={globalStyles.bgColor}
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
              iconName = 'airplane';
              break;
            case 'TopTabNavigator':
              iconName = 'moon';
              break;
            case 'StackNavigator':
              iconName = 'create';
              break;
          }
          return (
            <Text>
              <Icon name={`${iconName}-outline`} size={20} color={color} />
            </Text>
          );
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
        name="TopTabNavigator"
        options={{ title: 'Tab 2' }}
        component={TopTabNavigator}
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
      sceneAnimationEnabled
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
              iconName = 'airplane';
              break;
            case 'TopTabNavigator':
              iconName = 'moon';
              break;
            case 'StackNavigator':
              iconName = 'create';
              break;
          }
          return (
            <Text>
              <Icon name={`${iconName}-outline`} size={20} color={color} />
            </Text>
          );
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
        name="TopTabNavigator"
        options={{ title: 'Tab 2' }}
        component={TopTabNavigator}
      />
      <BottonTabAndroid.Screen
        name="StackNavigator"
        options={{ title: 'Navigator' }}
        component={StackNavigator}
      />
    </BottonTabAndroid.Navigator>
  );
};
