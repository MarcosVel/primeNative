import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  background-color: ${ COLORS.backButtonRounded };
  padding: 10px;
  align-items: center;
`

export const CloseButton = styled.TouchableOpacity`
  background-color: ${ COLORS.blackBackground };
  padding: 10px;
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  border-radius: 23px;
`

export const Name = styled.Text`
  margin-left: 8px;
  color: ${ COLORS.white };
  font-size: 18px;
  font-weight: bold;
`