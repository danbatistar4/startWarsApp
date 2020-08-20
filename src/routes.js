import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Planets from './pages/Planets';
import Detail from './pages/Detail';

if (__DEV__) {
  require('react-devtools');
}

export default function Routes() {
  return (
    <NavigationContainer>

      <AppStack.Navigator screenOptions={{ headerShown: false }}>

      <AppStack.Screen name="Planets" component={Planets} />
      <AppStack.Screen name="Detail" component={Detail} />

      </AppStack.Navigator>

    </NavigationContainer>
  );
}