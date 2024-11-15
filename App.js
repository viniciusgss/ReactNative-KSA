import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, ScrollView } from 'react-native';
import Header from './components/Header';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Form from './components/Form';
import DecoracaoInfer from './components/DecoracaoInfer';
import Footer from './components/Footer';
import NextScreen from './components/NextScreen'; 

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Header title="KSA" />
      
      <ScrollView contentContainerStyle={styles.content}>
        <Welcome />
        <Question />
        <Form navigation={navigation} />
        <DecoracaoInfer />
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
    position: 'relative',
  },
  content: {
    paddingTop: 20,
    paddingBottom: 60,
  },
});
