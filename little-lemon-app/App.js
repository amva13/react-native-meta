import { View, StyleSheet } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeSreen from './WelcomeSreen';

export default function App() {
  return (
    <View
    style={styles.mainScreen}>
        <View
          style={styles.mainScreen}>
          <LittleLemonHeader />
          <View>
          < WelcomeSreen />
        </View>
        </View>
        <View style={styles.footer}>
          <Footer />
        </View>
    </View>
    
  );
}

 var styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
      backgroundColor: '#333333',
  },
  footer: {
    backgroundColor: '#333333',
    paddingBottom:10
  },
 });