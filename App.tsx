import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNavigator';
import { MenuDrawer } from './src/navigator/MenuDrawer';

// Reanimate warning of version 1.4.0
LogBox.ignoreLogs(['NativeEventEmitter']);

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      {/* <DrawerNavigator /> */}
      <MenuDrawer />
    </NavigationContainer>
  );
};

export default App;
