import React from 'react';
import { Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactScreen } from '../screens/ContactScreen';
import { AlbumScreen } from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors, globalStyles } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

type RootTopTabParams = {
  ChatScreen: undefined;
  ContactScreen: undefined;
  AlbumScreen: undefined;
};

const Tab = createMaterialTopTabNavigator<RootTopTabParams>();

export const TopTabNavigator = () => {
  const { top: paddingTop } = useSafeAreaInsets();
  return (
    <Tab.Navigator
      style={{ paddingTop }}
      sceneContainerStyle={globalStyles.bgColor}
      screenOptions={({ route }) => ({
        tabBarPressColor: colors.primary,
        tabBarShowIcon: true,
        tabBarIndicatorStyle: {
          backgroundColor: colors.primary,
        },
        tabBarStyle: {
          shadowColor: 'transparent',
          elevation: 0,
        },
        tabBarIcon: ({ color }) => {
          let iconName: string;
          switch (route.name) {
            case 'ChatScreen':
              iconName = 'cut';
              break;
            case 'ContactScreen':
              iconName = 'contrast';
              break;
            case 'AlbumScreen':
              iconName = 'magnet';
              break;
          }
          return (
            <Text>
              <Icon name={`${iconName}-outline`} size={20} color={color} />
            </Text>
          );
        },
      })}>
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
