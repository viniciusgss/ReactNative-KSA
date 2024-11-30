import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Header, Footer, Dec } from './src/imports/import';

const Stack = createNativeStackNavigator();
const { width, height } = Dimensions.get('window');

function HomeScreen() {
  const [selectedSemester, setSelectedSemester] = useState(1);

  const materias = [
    'Biologia',
    'Educação Física',
    'Física',
    'Formação P.',
    'Geografia',
    'História',
    'Língua Inglesa',
    'Matemática',
    'Química',
    'Filosofia',
    'Projeto de Vida',
    'Programaê!',
  ];

  const getSemesterTitle = (semester) => {
    switch (semester) {
      case 1:
        return 'Senac mediotec boletim 1° Unidade';
      case 2:
        return 'Senac mediotec boletim 2° Unidade';
      case 3:
        return 'Senac mediotec boletim 3° Unidade';
      default:
        return 'Senac mediotec boletim';
    }
  };

  return (
    <View style={styles.container}>
      <Header title="KSA" />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.titleContainer}>
          <Icon name="play-arrow" size={width * 0.05} color="#FFA500" />
          <Text style={styles.titleText}>Boletim</Text>
          <Image source={Dec} style={styles.icon} />
        </View>

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
                Unidade {semester}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.semesterTitle}>
          {getSemesterTitle(selectedSemester)}
        </Text>

        <Text style={styles.subText}>Aluno: Anna Carolina</Text>
        <Text style={styles.subText}>Turma: 3A</Text>

        <View style={styles.tableContainer}>
          <View style={styles.tableHeader}>
            <Text style={styles.tableHeaderText}>Disciplina</Text>
            <Text style={styles.tableHeaderText}>Av 1</Text>
            <Text style={styles.tableHeaderText}>Av 2</Text>
            <Text style={styles.tableHeaderText}>NOA</Text>
            <Text style={styles.tableHeaderText}>Menção Final</Text>
          </View>
          {materias.map((disciplina, index) => (
            <View
              style={[
                styles.tableRow,
                { backgroundColor: index % 2 === 0 ? '#E0E0E0' : '#FFFFFF' },
              ]}
              key={index}
            >
              <Text style={styles.tableCell}>{disciplina}</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
              <Text style={styles.tableCell}>-</Text>
            </View>
          ))}
        </View>

        <View style={styles.legendContainer}>
          <View style={styles.legendTextContainer}>
            <Text style={styles.legendTitle}>Legendas:</Text>
            <Text style={styles.legendText}>A - Atendido</Text>
            <Text style={styles.legendText}>PA - Parcialmente Atendido</Text>
            <Text style={styles.legendText}>NA - Não Atendido</Text>
            <Text style={styles.legendText}>D - Desenvolvido</Text>
            <Text style={styles.legendText}>ND - Não Desenvolvido</Text>
            <Text style={styles.legendText}>
              NOA - Novas oportunidades de aprendizado
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.downloadButton}>
          <Text style={styles.downloadButtonText}>Baixar</Text>
        </TouchableOpacity>
      </ScrollView>

      <Footer />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollView: {
    paddingBottom: height * 0.2,
  },
  icon: {
    width: width * 0.2,
    height: width * 0.2,
    position: 'absolute',
    top: '-200%',
    right: '0%',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.02,
  },
  titleText: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginLeft: width * 0.02,
  },
  semesterTabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: height * 0.02,
  },
  activeTab: {
    borderBottomColor: '#6A1B9A',
    borderBottomWidth: 2,
  },
  tableContainer: {
    marginTop: height * 0.02,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#FFA500',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableHeaderText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FFF',
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#000',
  },
  tableCell: {
    flex: 1,
    paddingVertical: height * 0.02,
    textAlign: 'center',
    fontSize: width * 0.035,
    borderRightWidth: 1,
    borderRightColor: '#000',
  },
  legendContainer: {
    flexDirection: 'row',
    padding: width * 0.04,
    marginTop: height * 0.05,
  },
  downloadButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 5,
    alignSelf: 'center',
    marginVertical: 15,
  },
  downloadButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
