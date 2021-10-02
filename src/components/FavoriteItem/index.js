import React from 'react'
import { Container, DeleteButton, InfoMovie, Rate, RateContainer, Title } from './styles'
import { MaterialIcons, Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import { Swipeable } from 'react-native-gesture-handler'
import { Animated } from 'react-native'

export default function FavoriteItem({ data }) {
  return (
    <Swipeable
      overshootRight={ false }
      renderRightActions={ () => (
        <Animated.View style={ { justifyContent: 'center' } }>
          <DeleteButton onPress={ () => alert('deletar') }>
            <Feather name="trash-2" size={ 24 } color={ COLORS.white } />
          </DeleteButton>
        </Animated.View>
      ) }
    >
      <Container>
        <InfoMovie>
          <Title size={ 22 } numberOfLines={ 1 }>{ data?.title }</Title>

          <RateContainer>
            <MaterialIcons name='star' size={ 18 } color={ COLORS.orange } />
            <Rate>{ data.vote_average }/10</Rate>
          </RateContainer>
        </InfoMovie>

        <MaterialIcons name="visibility" size={ 24 } color={ COLORS.white } />
      </Container>
    </Swipeable>
  )
}
