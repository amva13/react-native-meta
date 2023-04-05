import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={styles.main}>
      <Text
        style={styles.txt}>
        Little Lemon
      </Text>
    </View>
  );
}

var styles = StyleSheet.create({
  main: {
    flex: 0.15, 
    backgroundColor: '#EE9972'
  },
  txt: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    textAlign: 'center',
  }
})