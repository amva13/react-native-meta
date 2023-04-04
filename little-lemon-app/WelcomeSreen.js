import React from 'react'
import {View, Text, ScrollView} from 'react-native'

function WelcomeSreen() {
  return (
    <ScrollView indicatorStyle={"white"} >
        <Text style={{
          fontSize: 80,
          color: 'black',
          textAlign: 'center',
          alignItems: 'center',
        }}>
            Welcome to Little Lemon {"\n"} 
            <Text style={{
        //   padding: 40,
          fontSize: 60,
          color: 'white',
          textAlign: 'center',
        }}>
            Little Lemon is a charming neighborhood bistro that serves simple food and 
            classic cocktails in a lively but casual environment. We would love to hear 
            more about your experience with us!
            </Text>
        </Text>
    </ScrollView>
  )
}

export default WelcomeSreen