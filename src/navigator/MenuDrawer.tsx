import * as React from 'react';
import {Image, useWindowDimensions, View} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import {SettinsScreen} from '../screens/SettinsScreen';
import {globalStyles} from '../theme/globalStyles';

export type RootDrawerParams = {
  StackNavigator: undefined;
  SettinsScreen: undefined;
};

const Drawer = createDrawerNavigator<RootDrawerParams>();

export function MenuDrawer() {
  const {width} = useWindowDimensions();
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: width >= 768 ? 'permanent' : 'front',
        drawerActiveTintColor: 'red',
        drawerLabelStyle: {fontSize: 18},
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="SettinsScreen" component={SettinsScreen} />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent(props: DrawerContentComponentProps) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={globalStyles.avatarContainer}>
        <Image
          style={globalStyles.avatar}
          source={{
            uri: 'https://img2.freepng.es/20190702/tl/kisspng-computer-icons-portable-network-graphics-avatar-tr-clip-directory-professional-transparent-amp-png-5d1bfa95e508d4.2980489715621147099381.jpg',
          }}
        />
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Help"
        onPress={() => {
          props.navigation.navigate('SettinsScreen');
        }}
      />
    </DrawerContentScrollView>
  );
}
