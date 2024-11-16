import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import Header from '../components/Header';
import MessageCard from '../components/MessageCard';
import { Seta, BgEffect } from '../assets/img';
import styles from '../styles/ComunicadoScreenStyles';
import fetchData from "../api/TurmasApi";

const ComunicadoScreen = ({ turmaid = '67365397f7dd299b547cdb9d' }) => {
  const [dadosApi, setDadosApi] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await fetchData(turmaid);
      setDadosApi(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API", error);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <Header />
      <Text style={styles.title}> <Image source={Seta} /> {dadosApi.nome}</Text>
      <Image source={BgEffect} style={ styles.BgEffect } />
      <View style={styles.tabsContainer}>
        <Text style={[styles.tab, styles.activeTab]}>Mural</Text>
        <Text style={styles.tab}>Pessoas</Text>
      </View>
      <View style={styles.comunicadoContainer}>
        <Text style={styles.comunicadoTitulo}>Comunicados</Text>
      </View>
      <MessageCard 
      turmaid={turmaid}
      />
    </View>
  );
};

export default ComunicadoScreen;