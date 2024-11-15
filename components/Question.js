
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Question = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>
        Quem é você?<Text style={styles.asterisk}>*</Text>
      </Text>

      {/* Círculos */}
      <View style={[styles.imagesContainer, { marginTop: 30 }]}>


        {/* Círculo 1 */}
        <View style={styles.circleWithText}>
          <TouchableOpacity
            style={[
              styles.circleWrapper,
              { backgroundColor: '#011022' },
              selectedOption === 'professor' && styles.selectedOption,
            ]}
            onPress={() => handleSelect('professor')}
          >
            <Image
              source={require('../assets/imagem1.png')}
              style={styles.circleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionTextWrapper,
              selectedOption === 'professor' && styles.selectedTextOption,
            ]}
            onPress={() => handleSelect('professor')}
          >
            <Text style={styles.optionText}>Professor</Text>
          </TouchableOpacity>
        </View>



        {/* Círculo 2 */}
        <View style={styles.circleWithText}>
          <TouchableOpacity
            style={[
              styles.circleWrapper,
              { backgroundColor: '#704908' },
              selectedOption === 'aluno' && styles.selectedOption,
            ]}
            onPress={() => handleSelect('aluno')}
          >
            <Image
              source={require('../assets/imagem2.png')}
              style={styles.circleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionTextWrapper,
              selectedOption === 'aluno' && styles.selectedTextOption,
            ]}
            onPress={() => handleSelect('aluno')}
          >
            <Text style={styles.optionText}>Aluno</Text>
          </TouchableOpacity>
        </View>



        {/* Círculo 3 */}
        <View style={styles.circleWithText}>
          <TouchableOpacity
            style={[
              styles.circleWrapper,
              { backgroundColor: '#036B3A' },
              selectedOption === 'coordenador' && styles.selectedOption,
            ]}
            onPress={() => handleSelect('coordenador')}
          >
            <Image
              source={require('../assets/imagem3.png')}
              style={styles.circleImage}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionTextWrapper,
              selectedOption === 'coordenador' && styles.selectedTextOption,
            ]}
            onPress={() => handleSelect('coordenador')}
          >


            <Text style={styles.optionText}>Coordenador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
  },
  questionText: {
    fontSize: 14,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '600',
    color: '#000',
    textAlign: 'left',
  },
  asterisk: {
    color: '#FF0606',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  circleWrapper: {
    width: 96,
    height: 96,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleImage: {
    width: 80,
    height: 71,
    borderRadius: 31.5,
  },
  selectedOption: {
    borderWidth: 3,
    borderColor: '#5A9BD5',
  },
  optionTextWrapper: {
    marginTop: 10,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 12,
    fontFamily: 'Open Sans Semi Bold',
    fontWeight: '700',
    color: '#000',
  },
  selectedTextOption: {
    color: '#28a745',
  },
});

export default Question;
