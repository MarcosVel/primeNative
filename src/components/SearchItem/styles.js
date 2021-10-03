import styled from 'styled-components/native'
import { COLORS } from '../../../styles'

export const Container = styled.TouchableOpacity`
  padding: 16px;
`

export const Banner = styled.Image`
  width: 100%;
  height: 180px;
  border-radius: 8px;
`

export const InfoMovie = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
`

export const Title = styled.Text`
  color: ${ COLORS.white };
  font-size: 18px;
  font-weight: bold;
`

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Rate = styled.Text`
  padding-left: 8px;
  color: ${ COLORS.white };
`