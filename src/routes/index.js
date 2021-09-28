import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Movies from '../pages/Movies';
import StackRoutes from './stackRoutes';
import { COLORS } from '../../styles';

const Drawer = createDrawerNavigator();

export default function routes() {
  return (
    <Drawer.Navigator
      screenOptions={ {
        headerShown: false,
        drawerStyle: {
          backgroundColor: `${ COLORS.blackDrawer }`,
          paddingTop: 3,
        },
        drawerActiveBackgroundColor: `${ COLORS.red }`,
        drawerActiveTintColor: `${ COLORS.white }`,
        drawerInactiveTintColor: `${ COLORS.gray }`
      } }
    >
      <Drawer.Screen
        name="HomeDrawer"
        component={ StackRoutes }
        options={ {
          title: 'Início',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={ focused ? 'movie-open' : 'movie-open-outline' }
              size={ size }
              color={ color }
            />
          )
        } }
      />
      <Drawer.Screen
        name="Movies"
        component={ Movies }
        options={ {
          title: 'Meus filmes',
          drawerIcon: ({ focused, size, color }) => (
            <MaterialCommunityIcons
              name={ focused ? 'video-check' : 'video-check-outline' }
              size={ size }
              color={ color }
            />
          )
        } }
      />
    </Drawer.Navigator>
  )
}