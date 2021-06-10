import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Cast } from '../interfaces/CreditsInterface';

interface Props {
  actor: Cast
}

const CastItem = ({actor} : Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={{height: 80,}}>
      
    <View style={styles.castItemContainer}>
      {actor.profile_path && <Image source={{uri}} style={styles.actorPhoto}/>}
      

      <View style={styles.actorInfo}>
        <Text style={styles.actorName}>{actor.name}</Text>
        <Text style={styles.actorCharacter}>{actor.character}</Text>
      </View>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
  castItemContainer: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 5,
    borderRadius: 10,
    marginLeft: 20,
    paddingRight: 10,
  },
  actorInfo: {
    marginTop: 5,
    marginLeft:10
  },
  actorName: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  actorCharacter:{
    fontSize: 16,
    opacity: 0.5
  },
  actorPhoto: {
    width: 60,
    height: 60,
    borderRadius: 10
  }
});

export default CastItem
