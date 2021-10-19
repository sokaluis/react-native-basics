import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MenuDrawer } from './src/navigator/MenuDrawer';
import { AuthProvider } from './src/context/AuthContext';

// Reanimate warning of version 1.4.0
LogBox.ignoreLogs([
  'NativeEventEmitter',
  '_reactNative.Keyboard.removeListener',
]);

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <MenuDrawer />
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: { children: JSX.Element }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
