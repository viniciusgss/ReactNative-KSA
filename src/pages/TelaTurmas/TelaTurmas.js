import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { styles } from './TelaTurmasstyles';
import { Header, Footer } from '../../imports/import';

const TelaTurmas = () => {
  const [turmas, setTurmas] = useState([]);

  useEffect(() => {
    fetch('https://back-end-mediotec.onrender.com/api/turmas')
      .then(response => response.json())
      .then(data => {
        setTurmas(data);
      })
      .catch(error => {
        console.error('Error fetching turmas:', error);
      });
  }, []);

  const renderTurma = ({ item }) => (
    <View style={styles.turmaContainer}>
      <View style={styles.turmaBanner}>
        <Text style={styles.turmaDesc}>Turno: {item.turno}</Text>
      </View>
      <View style={styles.turmaLine}>
        <Text style={styles.turmaName}>{item.nome}</Text>
      </View>
      <View style={styles.turmaMembers}>
        <Image source={require('../../assets/people.png')} style={styles.turmaImage} />
        <Text style={styles.turmaMemberText} numberOfLines={1} ellipsizeMode="tail">{item.professores}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header title="KSA" />
      <View style={styles.line}>
        <View style={styles.triangle} />
        <Text style={styles.text}>Turmas</Text>
      </View>
      <FlatList
        data={turmas}
        renderItem={renderTurma}
        keyExtractor={(item, index) => item.id ? item.id.toString() : index.toString()}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
      <Footer />
    </View>
  );
};

export default TelaTurmas;
