
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Footer = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#022036', '#004779', '#03395F']}
        style={styles.footer}>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute', 
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1, 
  },
  footer: {
    width: '100%',
    height: 60, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#03395F', 
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Open Sans Semi Bold',
  },
});

export default Footer;
