import React from 'react'
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
import { ScrollView } from 'react-native'

export default function Home() {
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

      <ScrollView>
        <Label>Em cartaz</Label>

        <BannerButton activeOpacity={ 0.8 }>
          <Banner
            source={ { uri: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1159&q=80' } }
            resizeMethod='resize'
          />
        </BannerButton>

        <SliderMovies
          horizontal
          data={ [ 1, 2, 3, 4 ] }
          renderItem={ ({ item }) => {}}
        />

      </ScrollView>

    </Container>
  )
}
