import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RooyLayoutayout = () => {
  return (
    <View style={styles.container}>
      <Text>RooyLayout</Text>
    </View>
  )
}

export default RooyLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})