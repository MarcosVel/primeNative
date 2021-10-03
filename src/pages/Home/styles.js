import styled from 'styled-components/native';
import { COLORS } from '../../../styles';

export const ContainerLoading = styled.SafeAreaView`
  flex: 1;
  background-color: ${ COLORS.blackBackground };
  justify-content: center;
  align-items: center;
`

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${ COLORS.blackBackground };
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  align-items: center;
  padding: 0 16px 0 16px;
  margin-bottom: 8px;
`

export const Input = styled.TextInput.attrs({
  placeholderTextColor: `${ COLORS.placeholder }`
})`
  background-color: ${ COLORS.white04 };
  /* width: 85%; */
  flex: 1;
  height: 50px;
  border-radius: 50px;
  padding: 8px 16px;
  font-size: 18px;
  color: ${ COLORS.white };
  margin-right: 12px;
`

export const SearchButton = styled.TouchableOpacity`
  /* width: 15%; */
  height: 50px;
  align-items: center;
  justify-content: center;
`

export const Label = styled.Text`
  color: ${ COLORS.white };
  padding: 20px 14px 8px;
  font-size: 24px;
  font-weight: bold;
`

export const BannerButton = styled.TouchableOpacity``

export const Banner = styled.Image`
  height: 150px;
  border-radius: 8px;
  margin: 0 14px;
`

export const SliderMovies = styled.FlatList.attrs({
  contentContainerStyle: { paddingRight: 14 }
})`
  height: 250px;
  padding: 0 14px;
`