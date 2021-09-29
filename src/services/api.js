import axios from 'axios';

// https://api.themoviedb.org/3/movie/now_playing?api_key=632b4b9beaf351ea5eb40ea1914ca96c&language=pt-BR&page=1

export const key = '632b4b9beaf351ea5eb40ea1914ca96c'

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})

export default api;