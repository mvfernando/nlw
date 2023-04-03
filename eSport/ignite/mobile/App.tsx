import { useRef, useEffect } from 'react'
import { StatusBar } from 'react-native';

import { 
    useFonts,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
 } from '@expo-google-fonts/inter';

import { Routes } from './src/routes';
import { Background } from './src/componentes/Background';
import { Loading } from './src/componentes/Loading';

//import './src/services/notificationConfig';
import { getPushNotificationToken } from './src/services/getPushNotificationToken';
import {Subscription} from 'expo-modules-core';

export default function App() { 

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  //const getPushNotificationListener = useRef<Subscription>();
  //const responseNotificationListener = useRef<Subscription>();

  //useEffect(() => {getPushNotificationToken();});

  return (
    <Background >
      <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}

    </Background>
  );
}