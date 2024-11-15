import React from 'react';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './Footerstyles.js';

const Footer = () => {
  return (
    <View style={styles.container}>
      <LinearGradient colors={['#022036', '#004779', '#03395F']} style={styles.footer}>
      </LinearGradient>
    </View>
  );
};

export default Footer;
