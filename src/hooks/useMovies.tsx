import { useEffect, useState } from "react";
import movieDb from "../api/movieDb";
import { MovieDbNowPlaying, Movie } from '../interfaces/MovieInterface';

const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  const getMovies = async () => {
    const res = await movieDb.get<MovieDbNowPlaying>('/now_playing')
    setnowPlaying(res.data.results);
    setIsLoading(false);
  }

  useEffect(() => {
    //now playing movies
    getMovies();
  }, [])


  return {
    nowPlaying,
    isLoading
  }
}


export default useMovies;