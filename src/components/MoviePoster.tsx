import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';

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
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.poster} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      flex: 1,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,
      elevation: 10,
      borderRadius: 18
    },
    poster: {
      flex: 1,
      borderRadius: 18,
      
    }
});


export default MoviePoster
