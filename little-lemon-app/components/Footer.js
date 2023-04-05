import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Footer() {
  return (
    <View style={styles.main}>
        <Text style={styles.txt}>
           All rights reserved by Little Lemon
        </Text>
    </View>
  )
}

var styles = StyleSheet.create({
  main: {
    backgroundColor: '#EE9972',
  },
  txt: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  }
})
export default Footer