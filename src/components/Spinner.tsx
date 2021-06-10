import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import colors from '../themes/colors';

interface Props {
  size?: number,
  color?: string
}


const Spinner = ({size = 100, color = colors.primary} : Props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <ActivityIndicator color={color} size={size} />
    </View>
  )
}

export default Spinner
