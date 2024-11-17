import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
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
      <Text style={styles.turmaDesc}>Turno: {item.turno}</Text>
      <Text style={styles.turmaName}>{item.nome}</Text>
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
