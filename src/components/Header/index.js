import React from 'react'
import { Container, MenuButton, Title } from './styles'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { useNavigation } from '@react-navigation/native'

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <Container>
      <MenuButton onPress={ () => navigation.openDrawer() }>
        <Feather name="menu" size={ 36 } color={ COLORS.white } />
      </MenuButton>

      <Title>{ title }</Title>
    </Container>
  )
}
