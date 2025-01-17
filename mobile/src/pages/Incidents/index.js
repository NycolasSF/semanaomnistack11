import React, {useEffect, useState} from 'react';
import {  Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Image, Text, TouchableOpacity } from "react-native";

import api from "../../services/api";

import logoImg from '../../assets/logo.png';

import styles from './styles';

export default function Incidents(){
  const [incidents, setIncidents] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loaging, setLoaging] = useState(false);
  const nav = useNavigation();

  function navigationToDetail(incident){
    nav.navigate('Detail', {incident})
  }

  async function loadIncidents(){
    if  (loaging){
      return;
    }

    if(total> 0 && incidents.length === total){
      return;
    }

    setLoaging(true);

    const res = await api.get('incidents', {
      params: {page}
    });

    setIncidents([...incidents, ...res.data]);
    setTotal(res.headers['x-total-count']);
    setPage(page + 1);
    setLoaging(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <Text>
          Total de <Text style={styles.headerTextBold}> {total} casos</Text>.
        </Text>
      </View>

      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.description}>Escolha um dos casos abaixo</Text>

      <FlatList
        data={incidents}
        style={styles.incidentList}
        keyExtractor={incident => String(incidents.id)}
        showsVerticalScrollIndicator={false}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item: incident }) => (
          <View style={styles.incident}>
            <Text style={styles.incidentProperty}>ONG:</Text>
            <Text style={styles.incidentValue}>{incident.name}</Text>

            <Text style={styles.incidentProperty}>CASO:</Text>
            <Text style={styles.incidentValue}>{incident.title}</Text>

            <Text style={styles.incidentProperty}>VALOR:</Text>
            <Text style={styles.incidentValue}>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
              }).format(incident.value)}
            </Text>

            <TouchableOpacity
              style={styles.detailButton}
              onPress={() => navigationToDetail(incident)}
            >
              <Text style={styles.detailButtonText}>Ver mais detalhes</Text>
              <Feather name="arrow-right" size={16} color="#e02041" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}