import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import { Container, ListMovies } from './styles'
import { getMoviesSave } from '../../utils/storage'
import FavoriteItem from '../../components/FavoriteItem';

export default function Movies() {
  const [ movies, setMovies ] = useState([]);

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const result = await getMoviesSave('@primenative');

      if (isActive) {
        setMovies(result);
      }
    }

    if (isActive) {
      getFavoriteMovies();
    }

    return () => {
      isActive = false;
    }

  }, []);

  return (
    <Container>
      <Header title="Meus filmes" />

      <ListMovies
        data={ movies }
        showsVerticalScrollIndicator={ false }
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) =>
          <FavoriteItem data={ item } />
        }
      />
    </Container>
  )
}
