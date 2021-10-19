import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {globalStyles} from '../theme/globalStyles';

interface Props
  extends NativeStackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const Pagina1Screen = ({navigation}: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 1</Text>
      <Button
        title="Ir a Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Text>Navegar con argumentos</Text>
      <View style={globalStyles.btnPersonas}>
        <TouchableOpacity
          style={globalStyles.btnGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              name: 'Pedro',
            })
          }>
          <Text style={globalStyles.btnText}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={globalStyles.btnGrande}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              name: 'Maria',
            })
          }>
          <Text style={globalStyles.btnText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
