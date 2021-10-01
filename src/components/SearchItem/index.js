import React from 'react'
import { Banner, Container, InfoMovie, Rate, RateContainer, Title } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import { COLORS } from '../../../styles'

export default function SearchItem({ data }) {
  return (
    <Container activeOpacity={ 0.7 }>
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
