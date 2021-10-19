import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect, useRef } from 'react';
import { Text, View } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { globalStyles } from '../theme/globalStyles';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({ route, navigation }: Props) => {
  const { name, id } = route.params;
  const { changeUsername } = useContext(AuthContext);
  const userRef = useRef<string>();

  useEffect(() => {
    navigation.setOptions({
      title: name,
    });
  });

  useEffect(() => {
    if (name !== userRef.current) {
      userRef.current = name;
      changeUsername({
        name,
        id,
      });
    }
  });

  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>
        {JSON.stringify(route.params, null, 3)}
      </Text>
    </View>
  );
};
