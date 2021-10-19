import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';

type RootTopTabParams = {
  ChatScreen: undefined;
  ContactScreen: undefined;
  AlbumScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTopTabParams>();

export const TopTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="ChatScreen"
        options={{ title: 'Chat' }}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactScreen"
        options={{ title: 'Contact' }}
        component={ContactScreen}
      />
      <Tab.Screen
        name="AlbumScreen"
        options={{ title: 'Album' }}
        component={AlbumScreen}
      />
    </Tab.Navigator>
  );
};
