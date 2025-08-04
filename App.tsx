import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Text, View } from 'react-native';
// import { StackNavigation } from './src/navigator/StackNavigation';
// import { DrawerNavigation } from './src/navigator/DrawerNavigation';
import { DrawerNavigationPerzonalizado } from './src/navigator/DrawerNavigationPersonalizado';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigation /> */}
      {/* <DrawerNavigation /> */}
      <DrawerNavigationPerzonalizado />
    </NavigationContainer>
  )
}

export default App;
