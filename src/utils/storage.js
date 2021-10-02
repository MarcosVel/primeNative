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
export async function deleteMovie(id) {
  let moviesStored = await getMoviesSave('@primenative');

  // filtra o filme selecionado e retorna todos que não tem o id dele
  let myMovies = moviesStored.filter(item => {
    return (item.id !== id)
  })

  // Atualiza a lista sem o filme com o ID que havia sido selecionado
  await AsyncStorage.setItem('@primenative', JSON.stringify(myMovies));

  // Retorna a lista atualizada
  return myMovies;
}

// Filtrar algum filme se já está salvo.
export async function hasMovie(movie) {
  let moviesStored = await getMoviesSave('@primenative');

  const hasMovie = moviesStored.find(item => item.id === movie.id)

  if (hasMovie) {
    return true;
  }

  return false;
}

