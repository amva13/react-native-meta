import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import Footer from './components/Footer';

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
            // paddingBottom: '10px',
          }}>
          <LittleLemonHeader />
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
