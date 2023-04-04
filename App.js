import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { AuthProvider } from './src/utils/auth';

import Routes from './src/routes';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
        <StatusBar backgroundColor='#000000' barStyle='light-content' translucent={false} />
      </NavigationContainer>
    </AuthProvider>

  );
}

