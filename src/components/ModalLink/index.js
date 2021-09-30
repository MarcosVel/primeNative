import React from 'react'
import { Container, CloseButton, Name } from './styles'
import { Feather } from '@expo/vector-icons'
import { COLORS } from '../../../styles'
import WebView from 'react-native-webview'

export default function ModalLink({ link, title, closeModal }) {
  return (
    <>
      <Container onPress={ closeModal }>
        <CloseButton onPress={ closeModal }>
          <Feather name='x' size={ 24 } color={ COLORS.white } />
        </CloseButton>
        <Name numberOfLines={ 1 }>{ title }</Name>
      </Container>

      <WebView
        source={ { uri: link } }
      />
    </>
  )
}
