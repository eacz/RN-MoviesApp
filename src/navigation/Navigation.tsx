import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/MovieInterface';

export type NavigationStackParams = {
  HomeScreen: undefined,
  DetailScreen: Movie
}

const Stack = createStackNavigator<NavigationStackParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor:'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="DetailScreen" options={{cardStyle: {backgroundColor: '#e1e1e1'}}} component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default Navigation;