import React from 'react'
import { View, Dimensions, ScrollView, Text, FlatList } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';

import MoviePoster from '../components/MoviePoster'
import Spinner from '../components/Spinner'
import useMovies from '../hooks/useMovies'
import { Movie } from '../interfaces/MovieInterface';
import stylesGlobal from '../themes/appTheme';

const { width: windowWidth } = Dimensions.get('window')

const HomeScreen = () => {

  const {nowPlaying, isLoading} = useMovies()
  const {top} = useSafeAreaInsets()

  if(isLoading){
    return <Spinner />
  }
  
  
  return (
    <ScrollView>

      <View style={{marginTop: top+20}}>
        <View style={{
          height: 440,
        }}>
          <Carousel 
            data={nowPlaying}
            renderItem={({item} : any) => <MoviePoster movie={item} />}
            sliderWidth={windowWidth}
            itemWidth={300} 
            //autoplay={true}
            />
        </View>
        <View style={stylesGlobal.popularContainer}>
          <Text style={stylesGlobal.title1} >Popular</Text>
          <FlatList 
            data={nowPlaying}
            renderItem={({item} : any) => (
              <MoviePoster 
                movie={item} 
                width={140} 
                height={200} 
                marginHorizontal={5} 
              />
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>
      </View>
    </ScrollView>
  )
}

export default HomeScreen
