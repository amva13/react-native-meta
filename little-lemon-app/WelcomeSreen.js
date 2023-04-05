import React from 'react'
import {View, Text, ScrollView, StyleSheet} from 'react-native'

function WelcomeSreen() {
  return (
    <ScrollView indicatorStyle={"white"} >
        <Text style={styles.headerText}>
            Welcome to Little Lemon {"\n"} 
            <Text style={styles.descText}>
            {"\n"}Little Lemon is a charming neighborhood bistro that serves simple food and 
            classic cocktails in a lively but casual environment. We would love to hear 
            more about your experience with us!
            </Text>
        </Text>
    </ScrollView>
  )
}

var styles = StyleSheet.create({
  headerText : {
    fontSize: 30,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    margin: 40,
  },
  descText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  }
});

export default WelcomeSreen