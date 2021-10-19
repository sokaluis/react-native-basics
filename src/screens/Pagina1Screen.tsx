import React from 'react';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { Button, Text, View, TouchableOpacity } from 'react-native';
import { RootStackParams } from '../navigator/StackNavigator';
import { globalStyles, colors } from '../theme/globalStyles';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerScreenProps<RootStackParams, 'PersonaScreen'> {}

export const Pagina1Screen = ({ navigation }: Props) => {
  return (
    <View style={globalStyles.globalMargin}>
      <Text style={globalStyles.title}>Pagina 1</Text>
      <Button
        title="Ir a Pagina 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />
      <Button title="Menu2" onPress={() => navigation.toggleDrawer()} />
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
          <Icon name="man" size={30} color={colors.white} />
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
          <Icon name="woman" size={30} color={colors.white} />
          <Text style={globalStyles.btnText}>Maria</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
