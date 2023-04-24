/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { AppNavigation } from './src/navigation/AppNavigation';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <AppState>
        <AppNavigation/>
      </AppState>
    </NavigationContainer>
  );
}

const AppState = ({children}:any)=>{
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
};

export default App;
