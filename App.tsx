import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import RootNavigator from './src/navigation/RootNavigator';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  MD3LightTheme,
  PaperProvider,
} from 'react-native-paper';

const App = () => {
  const theme = {
    ...MD3LightTheme,
    roundness: 2,
    colors: {
      ...MD3LightTheme.colors,
      primary: '#E64A19',
      secondary: '#f1c40f',
      tertiary: '#a1b2c3',
    },
  };
  enableScreens();
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <RootNavigator />
      </SafeAreaProvider>
    </PaperProvider>
  );
};

export default App;