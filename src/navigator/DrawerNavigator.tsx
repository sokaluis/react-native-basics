import * as React from 'react';
import {useWindowDimensions} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {SettinsScreen} from '../screens/SettinsScreen';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettinsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export function DrawerNavigator() {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerActiveTintColor: 'red',
      }}>
      <Drawer.Screen
        name="StackNavigator"
        options={{title: 'Home'}}
        component={StackNavigator}
      />
      <Drawer.Screen
        name="SettinsScreen"
        options={{title: 'Settings'}}
        component={SettinsScreen}
      />
    </Drawer.Navigator>
  );
}
