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
        <Text style={styles.helloText}>
          Olá, <Text style={styles.welcomeText}>Seja bem-vindo!!</Text>
        </Text>
        <Text style={styles.subText}>
          Preencha os dados abaixo para realizar seu login
        </Text>
      </View>
    </View>
  );
};

export default Welcome;
