import React from 'react'
import { Banner, Container, InfoMovie, Rate, RateContainer, Title } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { ToastAndroid } from 'react-native'

export default function SearchItem({ data, navigatePage }) {

  function detailMovie() {
    if (data.release_date === '') {
      ToastAndroid.show('Filme sem data de lançamento 😢', ToastAndroid.SHORT)
      return;
    } else if (data.overview === '') {
      ToastAndroid.show('Sem mais dados 😢', ToastAndroid.SHORT)
      return;
    } else {
      navigatePage(data);
    }
  }

  return (
    <Container activeOpacity={ 0.7 } onPress={ detailMovie }>
      { data?.backdrop_path ? (
        <Banner
          source={ { uri: `https://image.tmdb.org/t/p/w500/${ data?.backdrop_path }` } }
          resizeMethod='resize'
        />
      ) : (
        <Banner
          source={ require('../../assets/semfoto.png') }
          resizeMethod='resize'
        />
      ) }

      <InfoMovie>
        <Title>{ data?.title }</Title>

        <RateContainer>
          <MaterialIcons name='star' size={ 16 } color={ COLORS.orange } />
          <Rate>{ data?.vote_average }/10</Rate>
        </RateContainer>
      </InfoMovie>

    </Container>
  )
}
