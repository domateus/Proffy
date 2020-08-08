import React from 'react'
import { View, ImageBackground, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import teachClassesBgImage from '../../assets/images/give-classes-background.png'

import styles from './styles'
import { useNavigation } from '@react-navigation/native'

function Teach() {
  const {goBack} = useNavigation()

  function handeNavigateBack() {
    goBack()
  }


  return (
    <View style={styles.container}> 
      <ImageBackground resizeMode='contain' source={teachClassesBgImage} style={styles.content} >
        <Text style={styles.title}>Quer ser um Proffy</Text>
        <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na plataforma web</Text>
      </ImageBackground>

      <RectButton onPress={handeNavigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo Bem</Text>
      </RectButton>
    </View>
  )
}

export default Teach