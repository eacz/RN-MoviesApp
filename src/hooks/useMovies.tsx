import { useEffect, useState } from "react";
import movieDb from "../api/movieDb";
import { MovieDbResponse, Movie } from '../interfaces/MovieInterface';

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [popular, setPopular] = useState<Movie[]>([])

  const getMovies = async () => {
    const resNowPlaying = await movieDb.get<MovieDbResponse>('/now_playing')
    const resPopular = await movieDb.get<MovieDbResponse>('/popular')
    
    setnowPlaying(resNowPlaying.data.results);
    setPopular(resPopular.data.results)
    setIsLoading(false);
  }

  useEffect(() => {
    //now playing movies
    getMovies();
  }, [])


  return {
    nowPlaying,
    popular,
    isLoading
  }
}


export default useMovies;