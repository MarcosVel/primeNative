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

export default function SliderItem() {
  return (
    <Container activeOpacity={ 0.7 }>
      <BannerItem
        source={ { uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80' } }
      />

      {/* numberOfLines add '...' without breaking lines */ }
      <NameMovie numberOfLines={ 1 }>Vingadores</NameMovie>

      <RateContainer>
        <Ionicons name="md-star" size={ 12 } color={ COLORS.orange } />
        <Rate>9/10</Rate>
      </RateContainer>
    </Container>
  )
}
