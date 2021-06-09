import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Text } from 'react-native'
import { NavigationStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<NavigationStackParams, 'DetailScreen'> {}

const DetailScreen = ({ route }:Props) => {
  const movie = route.params
  console.log(movie.title);
    
  
  return (
    <View>
      <Text>Detail Screen</Text>
    </View>
  )
}

export default DetailScreen
