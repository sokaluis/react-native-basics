import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View} from 'react-native';
import {globalStyles} from '../theme/globalStyles';

interface Props extends NativeStackScreenProps<any, any> {}

export const Pagina3Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 3</Text>
      <Button title="Regresar" onPress={() => navigation.pop()} />
      <Button title="Ir al Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};
