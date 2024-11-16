import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './Welcomestyles';

const Welcome = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/triangulo.png')}
        style={styles.triangle}
        resizeMode="contain"
      />

      <View style={styles.textContainer}>
        <View style={styles.helloText}>
           <Text style={styles.welcomeText}>Olá, Seja bem-vindo!!</Text>
        </View>
        <Text style={styles.subText}>
          Preencha os dados abaixo para realizar seu login
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
