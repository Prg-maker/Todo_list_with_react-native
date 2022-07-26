import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { AppLoading } from './src/AppLoading';
import { Home } from './src/screens/Home';

import {useFonts , Poppins_400Regular , Poppins_700Bold} from '@expo-google-fonts/poppins'
import { Register } from './src/screens/Register';

export default function App() {

  const [isLoadingFonts] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  return (
    <View >

      {!isLoadingFonts ? <AppLoading/> :<Register/>}

      <StatusBar style="dark" />
    </View>
  );
}

