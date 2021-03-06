import React from 'react';
import DrawerRoutes from './DrawerRoutes';
import navigationStrings from '../constants/navigationStrings';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../Screens';

const Stack = createStackNavigator();
export default function () {
  return (
    <>
      <Stack.Screen
        name={navigationStrings.DRAWER_ROUTES}
        options={{
          headerShown: false,
        }}
        component={DrawerRoutes}
      />
      <Stack.Screen
        name={navigationStrings.LOGIN}
        component={Login}
        options={{headerShown: false}}
      />
    </>
  );
}
