import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { Movie } from '../interfaces/MovieInterface';

interface Props {
  movie: Movie
}

const MoviePoster = ({movie} : Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  
  
  return (
    <View style={styles.container}>
      <Image source={{uri}} style={styles.poster} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: 300,
      height: 420,
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
