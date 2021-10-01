import AsyncStorage from '@react-native-async-storage/async-storage';

// Buscar os filmes salvos
export async function getMoviesSave(key) {
  const myMovies = await AsyncStorage.getItem(key)

  // Caso não tenha nenhum filme salvo ( || [] ) retorna array vazio
  let moviesSave = JSON.parse(myMovies) || [];

  return moviesSave;
}

// Salvar um novo filme
export async function saveMovie(key, newMovie) {
  let moviesStored = await getMoviesSave(key)

  // Se tiver algum filme salvo com o mesmo ID precisamos ignorar
  const hasMovie = moviesStored.some(item => item.id === newMovie.id) // some() = verificar se existe PELO MENOS 1 item igual ao que vou verificar

  // Se true, não faz nada
  if (hasMovie) {
    console.log("Já existe em minha lista")
    return;
  }

  moviesStored.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(moviesStored));
  console.log("Salvo com sucesso")
}


// Deletar algum filme específico


// FIltrar algum filme se já está salvo.

