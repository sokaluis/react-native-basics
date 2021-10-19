import React from 'react';
// import {StackScreenProps} from '@react-navigation/stack';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {Button, Text, View, TouchableOpacity} from 'react-native';
import {RootStackParams} from '../navigator/StackNavigator';
import {globalStyles} from '../theme/globalStyles';

interface Props extends DrawerScreenProps<RootStackParams, 'PersonaScreen'> {}

export const Pagina1Screen = ({navigation}: Props) => {
  // useEffect(() => {
  //   navigation.setOptions({
  //     // drawerIcon: () => ({
  //     //   color: 'red',
  //     //   size: 20,
  //     //   focused: true,
  //     // }),
  //     // drawerActiveTintColor: 'red',
  //     // drawerLabel: () => ({
  //     //   focused: true,
  //     //   color: 'red',
  //     // }),
  //     //   headerLeft: () => {
  //     //     return <Button title="Menu" onPress={() => {}} />;
  //     //   },
  //     //     drawerType: width >= 768 ? 'permanent' : 'front', // Menú modo horizontal
  //     //     headerShown: false, // Oculta la hamburguesa
  //   });
  // });
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
