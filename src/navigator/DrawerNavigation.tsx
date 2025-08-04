import { createDrawerNavigator } from '@react-navigation/drawer';
import { SettingsScreem } from '../screens/SettingsScreem';
import { StackNavigation } from './StackNavigation';

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="StackNavigation" options={{title: 'Home'}} component={StackNavigation} />
      <Drawer.Screen name="Settings" options={{title: 'Configuracion'}} component={SettingsScreem} />
    </Drawer.Navigator>
  );
}