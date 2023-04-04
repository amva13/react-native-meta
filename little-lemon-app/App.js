import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';
import WelcomeSreen from './WelcomeSreen';

export default function App() {
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: '#495E57',
      // paddingBottom: '10px',
    }}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#495E57',
            // paddingBottom: 100,
          }}>
          <LittleLemonHeader />
          <View style={{
          // alignItems: 'center',
          // height:500,
          // paddingTop: '30%',
          flex:1
        }}>
          < WelcomeSreen />
        </View>
        </View>
        <View style={{
            backgroundColor: '#495E57',
            // paddingBottom: '10px',
            paddingBottom:10,
          }}>
          <Footer />
        </View>
    </View>
    
  );
}
