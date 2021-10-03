import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${ COLORS.blackBackground };
`

export const ListMovies = styled.FlatList`
padding-right: 16px;
`