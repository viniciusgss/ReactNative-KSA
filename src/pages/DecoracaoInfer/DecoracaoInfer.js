import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './DecoracaoInferstyles';

const DecoracaoInfer = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../../assets/DecoracaoInfer.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

export default DecoracaoInfer;
