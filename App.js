import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';

import { Header, Footer, NextScreen } from './src/imports/import';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  const [selectedSemester, setSelectedSemester] = useState(1);

  const semestres = {
    1: ['Biologia', 'Educação Física', 'Física', 'Formação P.'],
    2: ['Geografia', 'História', 'Língua Inglesa', 'Matemática'],
    3: ['Química', 'Filosofia', 'Projeto de Vida', 'Programação'],
  };

  return (
    <View style={styles.container}>
      <Header title="KSA" />

      {/* Ícone no canto superior direito */}
      <View style={styles.iconContainer}>
        <Image source={Dec} style={styles.icon} />
      </View>

      {/* Navegação entre semestres */}
      <View style={styles.semesterTabs}>
        {[1, 2, 3].map((semester) => (
          <TouchableOpacity
            key={semester}
            onPress={() => setSelectedSemester(semester)}
            style={[
              styles.semesterTab,
              selectedSemester === semester && styles.activeTab,
            ]}
          >
            <Text
              style={[
                styles.semesterTabText,
                selectedSemester === semester && styles.activeTabText,
              ]}
            >
              Semestre {semester}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.title}>Senac Mediotec Boletim {selectedSemester}º Semestre</Text>
        <Text style={styles.subText}>Aluno: Anna Carolina</Text>
        <Text style={styles.subText}>Turma: 3A</Text>

        {/* Tabela dinâmica */}
        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Disciplina</Text>
            <Text style={styles.tableHeaderText}>Av 1</Text>
            <Text style={styles.tableHeaderText}>Av 2</Text>
            <Text style={styles.tableHeaderText}>NOA</Text>
            <Text style={styles.tableHeaderText}>Menção Final</Text>
          </View>
          {semestres[selectedSemester].map((disciplina, index) => (
            <View style={styles.tableRow} key={index}>
              <Text style={styles.tableCell}>{disciplina}</Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCell}></Text>
              <Text style={styles.tableCell}></Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NextScreen" component={NextScreen} options={{ title: 'Próxima Tela' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  icon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  semesterTabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  semesterTab: {
    padding: 10,
    marginHorizontal: 5,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#6A1B9A',
  },
  semesterTabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#6A1B9A',
    fontWeight: 'bold',
  },
  scrollView: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  tableContainer: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    overflow: 'hidden',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    padding: 10,
  },
  tableHeaderText: {
    flex: 1,
    fontWeight: 'bold',
    color: '#FFF',
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tableCell: {
    flex: 1,
    padding: 10,
    textAlign: 'center',
  },
});
