import React from 'react'
import { View, Dimensions, ListRenderItem } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

import MoviePoster from '../components/MoviePoster'
import Spinner from '../components/Spinner'
import useMovies from '../hooks/useMovies'
import { Movie } from '../interfaces/MovieInterface';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const {nowPlaying, isLoading} = useMovies()
  const {top} = useSafeAreaInsets()

  if(isLoading){
    return <Spinner />
  }
  
  
  return (
    <View style={{marginTop: top+20}}>
      <View style={{
        height: 440,
      }}>
        <Carousel 
          data={nowPlaying}
          renderItem={({item} : any) => <MoviePoster movie={item} />}
          sliderWidth={windowWidth}
          itemWidth={300} 
        />
      </View>
    </View>
  )
}

export default HomeScreen
