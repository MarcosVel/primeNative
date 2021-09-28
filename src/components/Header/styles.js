import styled from 'styled-components'
import { COLORS } from '../../../styles';

export const Container = styled.View`
  height: 70px;
  flex-direction: row;
  align-items: center;
  padding-left: 16px;
`

export const MenuButton = styled.TouchableOpacity``;

export const Title = styled.Text`
  color: ${ COLORS.white };
  font-size: 30px;
  font-weight: bold;
  margin-left: 12px;
`