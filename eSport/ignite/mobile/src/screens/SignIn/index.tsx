import { useEffect, useState } from 'react';

import { Image, TouchableOpacity, Text} from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { SafeAreaView } from "react-native-safe-area-context";
import { GameController } from 'phosphor-react-native';

import logoImg from '../../assets/logo-nlw-esports.png';

import {  Background } from '../../componentes/Background';
import { Heading } from '../../componentes/Heading';

import { THEME  } from '../../theme';
import { styles } from './styles';

export function SignIn() {


  async function handleDiscordSignIn() {
   const response = await AuthSession.startAsync({
      authUrl: "https://discord.com/api/oauth2/authorize?client_id=1041863967741575168&redirect_uri=https%3A%2F%2Fauth.expo.io%2F%40mvfernando%2Fmobile-duo&response_type=token&scope=identify"
    });
    fetch('https://discord.com/api/users/@me', {
      headers: {
        'autothorization': `Bearer ${response.params.access_token}`
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))

    console.log(response);
  }

  return (
    <Background >
    <SafeAreaView style={styles.container}>
        <Image
          source={logoImg}
          style={ styles.logo} 
        />

    <Heading
        title="Entrar"
        subtitle="Encontre o seu duo e bora jogar."
    />
    
    <TouchableOpacity
      style={styles.button}
      onPress={handleDiscordSignIn}
    >
      <GameController
        color={THEME.COLORS.TEXT}
        size={20}
      />
      
      <Text style={styles.buttonTitle}>
        Entrar com Discord
      </Text>
    </TouchableOpacity>
    
</SafeAreaView>
</Background >
  );
} 