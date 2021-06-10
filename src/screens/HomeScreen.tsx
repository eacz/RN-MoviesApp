import React from 'react'
import { View, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import HorizontalMovieSlider from '../components/HorizontalMovieSlider';

import MoviePoster from '../components/MoviePoster'
import Spinner from '../components/Spinner'
import useMovies from '../hooks/useMovies'

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()
  const {top} = useSafeAreaInsets()

  if(isLoading){
    return <Spinner />
  }
  
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={{marginTop: top+20}}>
        <View style={{
          height: 440,
        }}>
          <Carousel 
            data={nowPlaying}
            renderItem={({item} : any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300} 
            inactiveSlideOpacity={0.9}
            //autoplay={true}
            />
        </View>
        <HorizontalMovieSlider title="Popular" movies={popular} />
        <HorizontalMovieSlider title="Top rated" movies={topRated} />
        <HorizontalMovieSlider title="Upcoming" movies={upcoming} />
        
      </View>
    </ScrollView>
  )
}

export default HomeScreen
