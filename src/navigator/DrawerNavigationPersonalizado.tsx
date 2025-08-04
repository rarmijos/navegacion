import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreem } from '../screens/SettingsScreem';
import { StackNavigation } from './StackNavigation';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigationPerzonalizado = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MenuLateral {...props} />}>
      <Drawer.Screen name="StackNavigation" options={{ title: 'Home' }} component={StackNavigation} />
      <Drawer.Screen name="Settings" options={{ title: 'Configuracion' }} component={SettingsScreem} />
    </Drawer.Navigator>
  );
}

const MenuLateral = ({navigation}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView style={styles.barra}>
      <View style={styles.containerImg}>
        <Image
          source={{
            uri: 'https://www.adhesivosnatos.com/wp-content/uploads/2017/10/pegatina-assassins-creed-original-1.png'
          }}
          style={styles.avatar} />
      </View>
      <View style={styles.containerMenu}>
        <TouchableOpacity style={styles.menuButton}
        onPress={() => navigation.navigate('StackNavigation')}>
          <Text style={styles.menutext}>Navegacion</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton}
        onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.menutext}>Ajustes</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  )
}