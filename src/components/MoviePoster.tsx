import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
  marginHorizontal?: number
}

const MoviePoster = ({movie, height = 420, width = 300, marginHorizontal=0} : Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  
  
  return (
    <View style={{
      height,
      width,
      marginHorizontal
    }}>
      <View style={styles.imageContainer}>
        <Image source={{uri}} style={styles.poster} />
      </View>
    </View>
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
