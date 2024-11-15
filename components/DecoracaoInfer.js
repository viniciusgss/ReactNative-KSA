import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const DecoracaoInfer = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/DecoracaoInfer.png')} 
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start', 
    marginTop: -30,
    width: '100%',
    height: 180, 
  },

});


export default DecoracaoInfer;
