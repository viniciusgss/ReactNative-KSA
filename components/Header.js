
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#021320', '#023A60', '#022036']}
        style={styles.header}
      >
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="menu" size={28} color="white" />
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 30, 
    backgroundColor: '#F5F5F5',
    zIndex: 2, 
  },
  header: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    background: 'linear-gradient(90deg, #021320 0%, #023A60 51.5%, #022036 100%)',
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 4, 
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  icon: {
    padding: 10,
  },
});

export default Header;
