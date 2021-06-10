import React from 'react'
import { View, Text, FlatList } from 'react-native'

import { Movie } from '../interfaces/MovieInterface';
import stylesGlobal from '../themes/appTheme';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string,
  movies: Movie[]
}

const HorizontalSlider = ({title,movies}:Props) => {
  return (
    <View style={{
        ...stylesGlobal.popularContainer,
        height: title ? stylesGlobal.popularContainer.height : stylesGlobal.popularContainer.height-50,
        
     }}>
          {title && <Text style={stylesGlobal.title1} >{title}</Text>}
          <FlatList 
            data={movies}
            renderItem={({item} : any) => (
              <MoviePoster 
                movie={item} 
                width={140} 
                height={200} 
                marginHorizontal={7} 
              />
              )}
              keyExtractor={(item) => item.id.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
        </View>
  )
}

export default HorizontalSlider
