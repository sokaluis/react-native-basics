import React from 'react';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { IconProps } from 'react-native-vector-icons/Icon';
import Icon from 'react-native-vector-icons/Ionicons';
import { colores } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const TouchableIcon = (props: IconProps) => {
  const { changeFavoriteIcon } = useContext(AuthContext);

  return (
    <TouchableOpacity onPress={() => changeFavoriteIcon(props.name)}>
      <Icon {...props} size={80} color={colores.primary} />
    </TouchableOpacity>
  );
};
