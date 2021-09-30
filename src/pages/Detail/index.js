import React, { useEffect, useState } from 'react'
import { Banner, ButtonLink, Container, ContentArea, Description, Header, HeaderButton, ListGenres, Rate, Title } from './styles'
import { Feather, MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { ScrollView, StatusBar } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import Stars from 'react-native-stars'
import Genres from '../../components/Genres'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const [ movie, setMovie ] = useState({});

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api.get(`/movie/${ route.params?.id }`, {
        params: {
          api_key: key,
          language: 'pt-BR'
        }
      })
        .catch((err) => {
          console.log(err)
        })

      if (isActive) {
        setMovie(response.data);
        // console.log(response.data);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    }

  }, [])

  return (
    <Container>
      <StatusBar hidden />

      <Header>
        <HeaderButton activeOpacity={ .6 } onPress={ () => navigation.goBack() }>
          <Feather name='arrow-left' size={ 28 } color={ COLORS.white } />
        </HeaderButton>
        <HeaderButton activeOpacity={ .6 } >
          <Feather name='bookmark' size={ 28 } color={ COLORS.white } />
        </HeaderButton>
      </Header>

      <Banner
        source={ {
          uri: `https://image.tmdb.org/t/p/original/${ movie.backdrop_path }`
        } }
        resizeMethod='resize'
      />

      <ButtonLink activeOpacity={ .7 } >
        <Feather name='link' size={ 24 } color={ COLORS.white } />
      </ButtonLink>

      <Title numberOfLines={ 1 }>{ movie.title }</Title>

      <ContentArea>
        <Stars
          default={ movie.vote_average }
          count={ 10 }
          half={ true }
          starSize={ 20 }
          fullStar={ <MaterialIcons name='star' size={ 24 } color={ COLORS.orange } /> }
          emptyStar={ <MaterialIcons name='star-outline' size={ 24 } color={ COLORS.orange } /> }
          halfStar={ <MaterialIcons name='star-half' size={ 24 } color={ COLORS.orange } /> }
          disable={ true }
        />
        <Rate>{ movie.vote_average }/10</Rate>
      </ContentArea>

      <ListGenres
        data={ movie?.genres }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({ item }) => <Genres data={ item } /> }
      />

      <ScrollView showsVerticalScrollIndicator={ false }>
        <Title>Descrição</Title>
        <Description>{ movie.overview }</Description>
      </ScrollView>

    </Container>
  )
}
