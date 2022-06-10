import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';

export const ContactsScreen = () => {
  const {
    signIn,
    authState: { isLoggedIn }
  } = useContext(AuthContext);

  return (
    <View>
      <Text>ContactsScreen</Text>
      {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
      {isLoggedIn && <Text>Logged</Text>}
    </View>
  );
};
