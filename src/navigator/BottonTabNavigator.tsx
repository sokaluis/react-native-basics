import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import StackNavigator from './StackNavigator';
import { colors } from '../theme/globalStyles';
import { Text } from 'react-native';

export type RootTabParams = {
  Tab1Screen: undefined;
  Tab2Screen: undefined;
  StackNavigator: undefined;
};

const Tab = createBottomTabNavigator<RootTabParams>();

export const TabsNavigator = () => {
  return (
    <Tab.Navigator
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
        tabBarIcon: ({ color, focused, size }) => {
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
      <Tab.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab 1',
        }}
        component={Tab1Screen}
      />
      <Tab.Screen
        name="Tab2Screen"
        options={{ title: 'Tab 2' }}
        component={Tab2Screen}
      />
      <Tab.Screen
        name="StackNavigator"
        options={{ title: 'Navigator' }}
        component={StackNavigator}
      />
    </Tab.Navigator>
  );
};
