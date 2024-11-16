import React, { useState, useEffect } from "react";
import { View, Text, Image, FlatList } from 'react-native';
import fetchData from "../api/comunicadosApi";
import styles from '../styles/MessageCardStyles';

const MessageCard = ({ turmaid }) => {
  const [dadosApi, setDadosApi] = useState([]);

  const getData = async () => {
    try {
      const data = await fetchData(turmaid);
      setDadosApi(data);
    } catch (error) {
      console.error("Erro ao buscar dados da API", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.messageContainer}>
      <Image 
        style={styles.usericon} 
        source={{ uri: 'https://example.com/usericon.png' }} //placeholder por enquanto
      />
      <Text>{item.mensagem}</Text>
    </View>
  );

  return (
    <FlatList
      data={dadosApi}
      keyExtractor={(item, index) => index.toString()}
      renderItem={renderItem}
    />
  );
};

export default MessageCard;