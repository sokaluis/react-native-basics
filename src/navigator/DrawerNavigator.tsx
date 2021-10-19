import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {SettinsScreen} from '../screens/SettinsScreen';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettinsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettinsScreen" component={SettinsScreen} />
    </Drawer.Navigator>
  );
}
