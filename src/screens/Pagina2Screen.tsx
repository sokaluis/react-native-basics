import { CommonActions, useNavigation } from '@react-navigation/core';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { globalStyles } from '../theme/globalStyles';
import { useEffect } from 'react';

export const Pagina2Screen = () => {
  const { dispatch, setOptions } = useNavigation();

  useEffect(() => {
    setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  });
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 2</Text>
      <Button
        title="Ir a Pagina 3"
        onPress={() =>
          dispatch(CommonActions.navigate({ name: 'Pagina3Screen' }))
        }
      />
    </View>
  );
};
