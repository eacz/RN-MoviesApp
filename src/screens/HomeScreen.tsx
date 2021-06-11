import React from 'react'
import { View, Dimensions, ScrollView } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel'

import GradientBackground from '../components/GradientBackground';
import HorizontalMovieSlider from '../components/HorizontalMovieSlider';


import MoviePoster from '../components/MoviePoster'
import Spinner from '../components/Spinner'
import useMovies from '../hooks/useMovies'
import getImageColors from '../helpers/getPosterColors';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const {nowPlaying, popular, topRated, upcoming, isLoading} = useMovies()
  const {top} = useSafeAreaInsets()

  if(isLoading){
    return <Spinner />
  }

  const getPosterColors = async (index: number) => {
    const movie = nowPlaying[index]
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

    const [primary, secondary] = await getImageColors(uri);
    
  }
  
  
  return (
    <GradientBackground>
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
              onSnapToItem={(index => getPosterColors(index))}
              />
          </View>
          <HorizontalMovieSlider title="Popular" movies={popular} />
          <HorizontalMovieSlider title="Top rated" movies={topRated} />
          <HorizontalMovieSlider title="Upcoming" movies={upcoming} />
          
        </View>
      </ScrollView>
    </GradientBackground>
  )
}

export default HomeScreen
