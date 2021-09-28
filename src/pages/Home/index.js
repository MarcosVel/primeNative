import React from 'react'
import Header from '../../components/Header'
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
} from './styles'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'

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

    </Container>
  )
}
