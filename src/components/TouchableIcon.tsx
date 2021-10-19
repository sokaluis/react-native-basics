import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { colors } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';

interface TochableIconProps {
  name: string;
}

const TouchableIcon = ({ name }: TochableIconProps) => {
  const { handleFavIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity
      onPress={() => {
        handleFavIcon(name);
      }}>
      <Icon name={name} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};

export default TouchableIcon;
