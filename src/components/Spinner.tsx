import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import colors from '../themes/colors'

const Spinner = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}} >
      <ActivityIndicator color={colors.primary} size={100} />
    </View>
  )
}

export default Spinner
