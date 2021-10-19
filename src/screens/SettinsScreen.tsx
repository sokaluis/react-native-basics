import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';

export const SettinsScreen = () => {
  const { top: marginTop } = useSafeAreaInsets();
  return (
    <View style={{ marginTop }}>
      <Text>Settings Screen</Text>
    </View>
  );
};
