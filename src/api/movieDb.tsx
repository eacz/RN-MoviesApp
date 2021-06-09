import axios from 'axios';

const movieDb = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '04d38f094a3a8f2e97eb8f37484011dc',
    language: 'en-US'
  }
})

export default movieDb;