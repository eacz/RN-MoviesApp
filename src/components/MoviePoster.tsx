import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';
import stylesGlobal from '../themes/appTheme';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
  marginHorizontal?: number
}

const MoviePoster = ({movie, height = 420, width = 300, marginHorizontal=0} : Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const navigation = useNavigation();
  
  
  return (
    <TouchableOpacity 
      activeOpacity={0.85}
      style={{
        height,width,marginHorizontal
      }}
      onPress={() => navigation.navigate("DetailScreen", movie)}
    >
      <View style={stylesGlobal.imageContainer}>
        <Image source={{uri}} style={stylesGlobal.poster} />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster
