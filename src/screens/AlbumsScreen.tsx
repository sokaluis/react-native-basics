import React from 'react';
import { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const AlbumsScreen = () => {
  const {
    authState: { isLoggedIn },
    logout
  } = useContext(AuthContext);

  return (
    <View>
      <Text>AlbumsScreen</Text>
      {isLoggedIn && <Button title="Log Out" onPress={logout} />}
    </View>
  );
};
