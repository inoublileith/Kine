import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './styles'
import StyledButton from '../StyledButton'
const RecItem = (props) => {
  const { RC, MF, fondateur } = props.rec

  return (
    <TouchableOpacity>
      <View style={styles.carContainer}>
        <View style={styles.card} />

        <View style={styles.titles}>
          <Text style={styles.title}>{RC}</Text>
          <Text style={styles.subtitle}>
            {fondateur} <Text style={styles.subtitleCTA}>{MF}</Text>
          </Text>
        </View>
        <View style={styles.buttonsContainer}>
          <StyledButton
            type='primary'
            content={'Custom Order'}
            onPress={() => {
              console.warn('Custom Order was pressed')
            }}
          />

          <StyledButton
            type='secondary'
            content={'Existing Inventory'}
            onPress={() => {
              console.warn('Existing Inventory was pressed')
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RecItem
