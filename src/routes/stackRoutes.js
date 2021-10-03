import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import Search from '../pages/Search';
import { COLORS } from '../../styles';

const Stack = createNativeStackNavigator();

export default function stackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={ Home }
        options={ {
          headerShown: false,
        } }
      />
      <Stack.Screen
        name='Detail'
        component={ Detail }
        options={ {
          headerShown: false,
        } }
      />

      <Stack.Screen
        name='Search'
        component={ Search }
        options={
          ({ route }) => ({
            title: `Sua busca: ${route?.params?.nameMovie}`,
            headerTintColor: COLORS.white, // arrow back
            headerTitleStyle: {
              color: COLORS.white
            },
            headerStyle: {
              backgroundColor: COLORS.blackBackground
            }
          })
        }
      />
    </Stack.Navigator>
  )
}