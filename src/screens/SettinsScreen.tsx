import React, { useContext } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { colors, globalStyles } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

export const SettinsScreen = () => {
  const { top: marginTop } = useSafeAreaInsets();
  const { authState } = useContext(AuthContext);
  return (
    <View style={[{ marginTop }, globalStyles.globalMargin]}>
      <Text>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 3)}</Text>
      {!!authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={200} color={colors.primary} />
      )}
    </View>
  );
};
