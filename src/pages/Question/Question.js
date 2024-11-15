import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Questionstyles';

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

      {/* Opções em círculos */}
      <View style={styles.imagesContainer}>
        {/* Professor */}
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
              source={require('../../assets/imagem1.png')}
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

        {/* Aluno */}
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
              source={require('../../assets/imagem2.png')}
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

        {/* Coordenador */}
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
              source={require('../../assets/imagem3.png')}
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

export default Question;
