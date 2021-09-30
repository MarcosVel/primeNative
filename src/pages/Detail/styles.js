import styled from 'styled-components'
import { COLORS } from '../../../styles'

export const Container = styled.View`
  flex: 1;
  background-color: ${ COLORS.blackBackground };
`
export const Header = styled.View`
  z-index: 99;
  position: absolute;
  top: 25px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px;
`

export const HeaderButton = styled.TouchableOpacity`
  width: 46px;
  height: 46px;
  align-items: center;
  justify-content: center;
  background-color: ${ COLORS.backButtonRounded };
  border-radius: 23px;
`

export const Banner = styled.Image`
  width: 100%;
  height: 350px;
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  top: 0;
  margin-top: 0;
`

export const ButtonLink = styled.TouchableOpacity`
  background-color: ${ COLORS.red };
  width: 63px;
  height: 63px;
  border-radius: 32px;
  top: 310px;
  right: 20px;
  position: absolute;
  align-items: center;
  justify-content: center;
  z-index: 99;
`

export const Title = styled.Text`
  color: ${ COLORS.white };
  font-size: 22px;
  font-weight: bold;
  padding: 8px 16px;
  margin-top: 24px;
`

export const ContentArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`

export const Rate = styled.Text`
  font-size: 18px;
  color: ${ COLORS.white };
  font-weight: bold;
`

export const ListGenres = styled.FlatList.attrs({
  contentContainerStyle: { paddingRight: 16 }
})`
  padding: 8px 16px;
  min-height: 45px;
  max-height: 45px;
`

export const Description = styled.Text`
  padding: 0 16px 32px;
  color: ${ COLORS.white };
  font-size: 16px;
  line-height: 22px;
`