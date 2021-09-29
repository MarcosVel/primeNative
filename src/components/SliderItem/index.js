import React from 'react'
import {
  Container,
  BannerItem,
  NameMovie,
  RateContainer,
  Rate
} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../../styles'

export default function SliderItem({ data }) {
  return (
    <Container activeOpacity={ 0.7 }>
      <BannerItem
        source={ { uri: `https://image.tmdb.org/t/p/original/${ data.poster_path }` } }
      />

      {/* numberOfLines add '...' without breaking lines */ }
      <NameMovie numberOfLines={ 1 }>{ data.title }</NameMovie>

      <RateContainer>
        <Ionicons name="md-star" size={ 12 } color={ COLORS.orange } />
        <Rate>{ data.vote_average }/10</Rate>
      </RateContainer>
    </Container>
  )
}
