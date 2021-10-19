import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Text, View} from 'react-native';

export const SettinsScreen = () => {
  const inset = useSafeAreaInsets();
  return (
    <View style={{marginTop: inset.top}}>
      <Text>Settings Screen</Text>
    </View>
  );
};
