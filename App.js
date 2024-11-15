import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, StyleSheet, ScrollView } from 'react-native';

import { Header, Welcome, Question, Form, DecoracaoInfer, Footer, TelaTurmas } from './src/imports/import';

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
      <Stack.Navigator initialRouteName="TelaTurmas">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TelaTurmas" component={TelaTurmas} options={{ headerShown: false }} />
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
