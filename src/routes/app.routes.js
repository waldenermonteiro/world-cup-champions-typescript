import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Winners from '../screens/Winners';

const AppStack = createStackNavigator();

const AppRoutes = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="Winners" component={Winners} />
  </AppStack.Navigator>
);

export default AppRoutes;
