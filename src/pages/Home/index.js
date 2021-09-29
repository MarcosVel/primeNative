import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Label,
  BannerButton,
  Banner,
  SliderMovies
} from './styles'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { ActivityIndicator, ScrollView } from 'react-native'
import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api'
import { getListMovies } from '../../utils/movie'

export default function Home() {
  const [ nowMovies, setNowMovies ] = useState([]);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    let isActive = true;

    async function getMovies() {
      const [ nowData, popularData, topData ] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
      ])

      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(7, popularData.data.results);
      const topList = getListMovies(5, topData.data.results);

      setNowMovies(nowList)
      setPopularMovies(popularList)
      setTopMovies(topList)
    }
    
    setLoading(false)
    getMovies()
  }, [])

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    )
  }
  
  return (
    <Container>
      <Header title="Prime Native" />

      <SearchContainer>
        <Input
          placeholder="Ex Vingadores"
        />
        <SearchButton>
          <Feather name="search" size={ 30 } color={ COLORS.white } />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={ false }>
        <Label>Em cartaz</Label>

        <BannerButton activeOpacity={ 0.8 }>
          <Banner
            source={ { uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80' } }
            resizeMethod='resize'
          />
        </BannerButton>

        <SliderMovies
          horizontal
          data={ nowMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

        <Label>Populares</Label>
        <SliderMovies
          horizontal
          data={ popularMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

        <Label>Mais votados</Label>
        <SliderMovies
          horizontal
          data={ topMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

      </ScrollView>

    </Container>
  )
}
