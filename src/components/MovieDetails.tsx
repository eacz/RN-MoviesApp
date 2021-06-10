import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { FullMovie } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';

interface Props {
  fullMovie: FullMovie,
  cast: Cast[]
}

const MovieDetails = ({cast, fullMovie} : Props) => {
  return (
    <>
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={20} color="#fffb00" />
          <Text> {fullMovie.vote_average}</Text>
          <Text style={{marginLeft: 5}}> - {fullMovie.genres.map(g => g.name).join(', ')} </Text>
        </View>

        <Text style={styles.subtitle}> History </Text>
        <Text style={{fontSize:16}}>{fullMovie.overview}</Text>
        
        <Text style={styles.subtitle}> Budget </Text>
        <Text style={{fontSize: 18}}> {currencyFormatter.format(fullMovie.budget, {code: 'USD'}) } </Text>
      </View>

      <View>

      </View>

    </>
  )
}

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 20, 
      marginTop: 10, 
      fontWeight: 'bold'
    }
});

export default MovieDetails
