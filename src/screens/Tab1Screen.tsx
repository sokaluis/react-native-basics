import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon name="airplane-outline" />
        <TouchableIcon name="moon-outline" />
        <TouchableIcon name="create-outline" />
        <TouchableIcon name="cut-outline" />
        <TouchableIcon name="contrast-outline" />
        <TouchableIcon name="magnet-outline" />
        <TouchableIcon name="newspaper-outline" />
      </Text>
    </View>
  );
};

export default Tab1Screen;
