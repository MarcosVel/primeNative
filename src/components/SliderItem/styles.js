import styled from 'styled-components/native'
import { COLORS } from '../../../styles'

export const Container = styled.TouchableOpacity`
  padding: 16px;
  padding-left: 0;
  width: 140px;
  height: 180px;
`

export const BannerItem = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 8px;
`

export const NameMovie = styled.Text`
  color: ${ COLORS.white };
  font-size: 14px;
  padding-top: 8px;
  font-weight: bold;
`

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Rate = styled.Text`
  color: ${ COLORS.white };
  padding-left: 4px;
  font-size: 13px;
`
