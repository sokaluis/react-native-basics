import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { AuthContext } from '../context/AuthContext';

export const AlbumScreen = () => {
  const { authState, logOut } = useContext(AuthContext);
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>ContactScreen</Text>
      {!!authState.isLoggedIn && <Button title="Log Out" onPress={logOut} />}
    </View>
  );
};
