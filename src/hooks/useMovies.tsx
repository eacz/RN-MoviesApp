import { useEffect, useState } from "react";
import movieDb from "../api/movieDb";
import { MovieDbResponse, Movie } from '../interfaces/MovieInterface';

interface MoviesState {
  nowPlaying: Movie[],
  popular: Movie[],
  topRated: Movie[],
  upcoming: Movie[],
}

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });

  const getMovies = async () => {
   const nowPlayingPromise =  movieDb.get<MovieDbResponse>('/now_playing')
   const popularPromise =  movieDb.get<MovieDbResponse>('/popular')
   const topRatedPromise =  movieDb.get<MovieDbResponse>('/top_rated')
   const upcomingPromise =  movieDb.get<MovieDbResponse>('/upcoming')

   const res = await Promise.all([
     nowPlayingPromise, 
     popularPromise, 
     topRatedPromise, 
     upcomingPromise
    ]);
    setMoviesState({
      nowPlaying: res[0].data.results,
      popular: res[1].data.results,
      topRated: res[2].data.results,
      upcoming: res[3].data.results,
    })
    setIsLoading(false);
  }

  useEffect(() => {
    //now playing movies
    getMovies();
  }, [])


  return {
    ...moviesState,
    isLoading
  }
}


export default useMovies;