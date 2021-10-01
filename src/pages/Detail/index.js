import React, { useEffect, useState } from 'react'
import { Modal, ScrollView, StatusBar, ToastAndroid } from 'react-native'
import { Banner, ButtonLink, Container, ContentArea, Description, Header, HeaderButton, ListGenres, Rate, Title } from './styles'
import { COLORS } from '../../../styles'
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import api, { key } from '../../services/api'
import Stars from 'react-native-stars'
import Genres from '../../components/Genres'
import ModalLink from '../../components/ModalLink'
import { saveMovie, hasMovie, deleteMovie } from '../../utils/storage'

export default function Detail() {
  const navigation = useNavigation();
  const route = useRoute();

  const [ movie, setMovie ] = useState({});
  const [ openLink, setOpenLink ] = useState(false);
  const [ favoritedMovie, setFavoritedMovie ] = useState(false);

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

        const isFavorite = await hasMovie(response.data)
        setFavoritedMovie(isFavorite);
      }
    }

    if (isActive) {
      getMovie();
    }

    return () => {
      isActive = false;
    }

  }, [])

  async function favoriteMovie(movie) {
    if(favoritedMovie) {
      await deleteMovie(movie.id);
      setFavoritedMovie(false);
      ToastAndroid.show('Retirado de Meus Filmes 😢', ToastAndroid.SHORT);
    } else {
      await saveMovie('@primenative', movie);
      setFavoritedMovie(true);
      ToastAndroid.show('Salvo em Meus Filmes 😉', ToastAndroid.SHORT);
    }
  }

  return (
    <Container>
      <StatusBar hidden />

      <Header>
        <HeaderButton activeOpacity={ .6 } onPress={ () => navigation.goBack() }>
          <Feather name='arrow-left' size={ 28 } color={ COLORS.white } />
        </HeaderButton>
        <HeaderButton activeOpacity={ .6 } onPress={ () => favoriteMovie(movie) }>
          { favoritedMovie ? (
            <Ionicons name='bookmark' size={ 25 } color={ COLORS.white } />
          ) : (
            <Ionicons name='bookmark-outline' size={ 25 } color={ COLORS.white } />
          ) }
        </HeaderButton>
      </Header>

      <Banner
        source={ {
          uri: `https://image.tmdb.org/t/p/original/${ movie.backdrop_path }`
        } }
        resizeMethod='resize'
      />

      <ButtonLink activeOpacity={ .7 } onPress={ () => setOpenLink(true) }>
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
        <Rate>{ movie?.vote_average }/10</Rate>
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
        <Description>{ movie?.overview }</Description>
      </ScrollView>

      <Modal
        animationType='slide'
        visible={ openLink }
        transparent
      >
        <ModalLink
          link={ movie?.homepage }
          title={ movie?.title }
          closeModal={ () => setOpenLink(false) }
        />
      </Modal>

    </Container>
  )
}
