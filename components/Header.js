import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styles from '../styles/HeaderStyles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>KSA</Text>
      <FontAwesome name="bars" size={24} color="white" />
    </View>
  );
};

export default Header;
