import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { FullMovie } from '../interfaces/MovieInterface';
import { Cast } from '../interfaces/CreditsInterface';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

interface Props {
  fullMovie: FullMovie,
  cast: Cast[]
}

const MovieDetails = ({cast, fullMovie} : Props) => {
  return (
    <>
      {/* Movie Details */}
      <View style={{marginHorizontal: 20}}>
        <View style={{flexDirection: 'row'}}>
          <Icon name="star-outline" size={20} color="#fffb00" />
          <Text> {fullMovie.vote_average}</Text>
          <Text style={{marginLeft: 5}}> - {fullMovie.genres.map(g => g.name).join(', ')} </Text>
        </View>

        <Text style={styles.subtitle}>History </Text>
        <Text style={{fontSize:16}}>{fullMovie.overview}</Text>
        
        <Text style={styles.subtitle}>Budget </Text>
        <Text style={{fontSize: 18}}>
          {fullMovie.budget ? currencyFormatter.format(fullMovie.budget, {code: 'USD'}) : 'There is no budget information.' } 
        </Text>
      </View>

      {/* Casting */}
      <View style={{ marginTop: 10, marginBottom: 50}}>
        <Text style={{...styles.subtitle, marginHorizontal:20}}>Casting </Text>
        <FlatList 
          style={styles.list}
          data={cast} 
          keyExtractor={(item) => item.id.toString()}
          horizontal={true} 
          renderItem={({item}) => <CastItem actor={item} />}
          showsHorizontalScrollIndicator={false}
        />
        
      </View>

    </>
  )
}

const styles = StyleSheet.create({
    subtitle: {
      fontSize: 20, 
      marginTop: 10, 
      fontWeight: 'bold'
    },
    list: {
      marginTop: 10,
      width: '100%'
    }
});

export default MovieDetails
