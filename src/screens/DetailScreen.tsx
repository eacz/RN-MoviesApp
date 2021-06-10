import { StackScreenProps } from '@react-navigation/stack';
import React from 'react'
import { View, Dimensions, Image, StyleSheet, ScrollView, Text } from 'react-native';
import MovieDetails from '../components/MovieDetails';
import Spinner from '../components/Spinner';
import useMovieDetails from '../hooks/useMovieDetails';

import { NavigationStackParams } from '../navigation/Navigation';
import stylesGlobal from '../themes/appTheme';

interface Props extends StackScreenProps<NavigationStackParams, 'DetailScreen'> {}

const screenHeight = Dimensions.get('window').height

const DetailScreen = ({ route }:Props) => {
  const movie = route.params
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const {isLoading,fullMovie,cast} = useMovieDetails(movie.id) 
  
  return (
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image source={{uri}} style={[stylesGlobal.poster, styles.detailsPoster]} />
        </View>
        
        <View style={styles.containerMargin}>
          {movie.original_title != movie.title && <Text style={styles.subtitle}>{movie.original_title}</Text>}
          <Text style={styles.title}>{movie.title}</Text>
        </View>
      
          {isLoading 
              ? <Spinner size={40} color="#cccccc" /> 
              : <MovieDetails cast={cast} fullMovie={fullMovie!} />
          }

      </ScrollView>
  )
}

const styles = StyleSheet.create({
    imageContainer: {
      width: '100%',
      height: screenHeight*0.7
    },
    detailsPoster: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
    },
    containerMargin: {
      marginHorizontal: 20,
      marginTop: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold'
    },
    subtitle: {
      fontSize: 16,
      opacity: 0.5
    }
});

export default DetailScreen
