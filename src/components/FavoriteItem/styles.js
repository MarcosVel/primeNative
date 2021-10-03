import styled from "styled-components";
import { COLORS } from "../../../styles";

export const Container = styled.TouchableOpacity`
  padding: 16px;
  background-color: #444556;
  margin: 16px;
  margin-right: 0;
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

export const InfoMovie = styled.View`
  flex-direction: column;
  flex: 1;
  padding-right: 10px;
`

export const Title = styled.Text`
  color: ${ COLORS.white };
  font-size: ${ props => props.size }px;
  font-weight: bold;
`

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Rate = styled.Text`
  color: ${ COLORS.white };
  padding-left: 4px;
`

export const DeleteButton = styled.TouchableOpacity`
  background-color: ${ COLORS.red };
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  padding-right: 4px;
`

