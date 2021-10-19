import React from 'react';
import { Text, View } from 'react-native';
import { colors, globalStyles } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Tab1Screen</Text>
      <Text>
        <Icon name="airplane-outline" size={80} color={colors.primary} />
        <Icon name="moon-outline" size={80} color={colors.primary} />
        <Icon name="create-outline" size={80} color={colors.primary} />
        <Icon name="cut-outline" size={80} color={colors.primary} />
        <Icon name="contrast-outline" size={80} color={colors.primary} />
        <Icon name="magnet-outline" size={80} color={colors.primary} />
        <Icon name="newspaper-outline" size={80} color={colors.primary} />
      </Text>
    </View>
  );
};

export default Tab1Screen;
