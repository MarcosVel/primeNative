import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '../../../styles';
import { Container, ContainerLoading, ListMovies } from './styles';
import api, { key } from '../../services/api'
import SearchItem from '../../components/SearchItem';

export default function Search() {
  const [ movie, setMovie ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    let isActive = true;

    async function getSearchMovie() {
      const response = await api.get('/search/movie', {
        params: {
          query: route?.params?.nameMovie,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      })

      if (isActive) {
        setMovie(response.data.results);
        setLoading(false);
      }
    }

    if (isActive) {
      getSearchMovie();
    }

    // evitar renderizações
    return () => {
      isActive = false;
    }

  }, [])

  function navigationDetailsPage(item) {
    navigation.navigate('Detail', { id: item.id })
  }

  if (loading) {
    return (
      <ContainerLoading>
        <ActivityIndicator size="large" color={ COLORS.white } />
      </ContainerLoading>
    )
  }

  return (
    <Container>
      <ListMovies
        data={ movie }
        showsVerticalScrollIndicator={ false }
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) =>
          <SearchItem data={ item } navigatePage={ () => navigationDetailsPage(item) } />
        }
        contentContainerStyle={ {
          paddingBottom: 100
        } }
      />
    </Container>
  )
}