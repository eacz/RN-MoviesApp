import { useEffect, useState } from "react"
import movieDb from "../api/movieDb";
import { FullMovie } from '../interfaces/MovieInterface';
import { CreditsResponse, Cast } from '../interfaces/CreditsInterface';

interface MovieDetails {
  cast: Cast[],
  fullMovie?: FullMovie,
  isLoading: boolean,
}

const useMovieDetails = (movieId: number) => {
  const [movieDetails, setMovieDetails] = useState<MovieDetails>({
    isLoading: true,
    fullMovie: undefined,
    cast: []
  })
  
  const getMovieDetails = async () => {
    const moviesDetailsPromise =  movieDb.get<FullMovie>(`/${movieId}`)
    const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`)
    
    const [movieDetails, credits] = await Promise.all([moviesDetailsPromise, castPromise])

    setMovieDetails({
      isLoading: false,
      fullMovie: movieDetails.data,
      cast: credits.data.cast
    })

  }

  useEffect(() => {
    getMovieDetails()
   
  }, [])


  return {
    ...movieDetails
  }
}

export default useMovieDetails
