
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Welcome = () => {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/triangulo.png')}
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

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: -35,
  },
  triangle: {
    width: 189,
    height: 201,
    position: 'absolute',
    top: -90,
    left: -40,
  },
  textContainer: {
    marginTop: 160,
    alignItems: 'center',
    justifyContent: 'center',
  },
  helloText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
    borderBottomWidth: 4,
    borderBottomColor: '#0C476F',
    paddingBottom: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#021320',
  },
  subText: {
    color: '#A8A8A8',
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18,
    marginTop: 25,
    textAlign: 'center',
  },
});

export default Welcome;
