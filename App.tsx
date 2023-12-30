import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import LottieSplashScreen from 'react-native-lottie-splash-screen';

import AppNavigator from './src/navigation/AppNavigator';
import { SafeAreaView } from 'react-native';

const App: React.FC = () => {
  useEffect(() => {
    LottieSplashScreen.hide(); // here
  }, []);

  return (
   
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>

  );
};

export default App;
