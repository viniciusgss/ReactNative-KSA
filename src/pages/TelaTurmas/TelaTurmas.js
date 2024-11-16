import React from 'react';
import { View, Text, Image} from 'react-native';
import { styles } from './TelaTurmasstyles';
import { Header, Footer,} from '../../imports/import';

const TelaTurmas = () => {
  return (
    <View style={styles.container}>
      <Header title="KSA" />
      {/*<Image
        source={require('../../assets/imagemTelaTurmas.png')}
        style={styles.triangle}
        resizeMode="contain"
      />*/}
      <View style={styles.line}>
        <View style={styles.triangle} />
        <Text style={styles.text}>Turmas</Text>
      </View>
      <Footer />
    </View>
  );
};

export default TelaTurmas;
