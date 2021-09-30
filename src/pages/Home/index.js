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
  SliderMovies,
  ContainerLoading
} from './styles'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { ActivityIndicator, ScrollView } from 'react-native'
import SliderItem from '../../components/SliderItem'

import api, { key } from '../../services/api'
import { getListMovies, randomBanner } from '../../utils/movie'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
  const [ nowMovies, setNowMovies ] = useState([]);
  const [ popularMovies, setPopularMovies ] = useState([]);
  const [ topMovies, setTopMovies ] = useState([]);
  const [ bannerMovie, setBannerMovie ] = useState({});

  const [ loading, setLoading ] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    // garantir que quando mudar de tela pare as requisições
    const ac = new AbortController();

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

      if (isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(7, popularData.data.results);
        const topList = getListMovies(5, topData.data.results);

        setBannerMovie(nowData.data.results[ randomBanner(nowData.data.results) ])

        setNowMovies(nowList)
        setPopularMovies(popularList)
        setTopMovies(topList)
        setLoading(false)
      }
    }

    getMovies();

    // parar as requisições ao sair da tela
    return () => {
      isActive = false;
      ac.abort();
    }
  }, [])

  function navigationDetailsPage(item) {
    // console.log(item.id)
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

        <BannerButton activeOpacity={ 0.8 } onPress={ () => navigationDetailsPage(bannerMovie) }>
          <Banner
            source={ { uri: `https://image.tmdb.org/t/p/original/${ bannerMovie.backdrop_path }` } }
            resizeMethod='resize'
          />
        </BannerButton>

        <SliderMovies
          horizontal
          data={ nowMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } navigatePage={ () => navigationDetailsPage(item) } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

        <Label>Populares</Label>
        <SliderMovies
          horizontal
          data={ popularMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } navigatePage={ () => navigationDetailsPage(item) } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

        <Label>Mais votados</Label>
        <SliderMovies
          horizontal
          data={ topMovies }
          renderItem={ ({ item }) => <SliderItem data={ item } navigatePage={ () => navigationDetailsPage(item) } /> }
          keyExtractor={ (item) => String(item.id) }
          showsHorizontalScrollIndicator={ false }
        />

      </ScrollView>

    </Container>
  )
}
