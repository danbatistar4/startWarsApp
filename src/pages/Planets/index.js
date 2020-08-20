import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, FlatList, ActivityIndicator, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import api from '../../services/api';

import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Planets() {

    const [planets, setPlanets] = useState([]);
    const [page, setPage] = useState(1);
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [residents, setResidents] = useState([]);
    const [chosedPlanet, setChosedPlanet] = useState({});
    const [loadingResidents, setLoadingResidents] = useState(true);

    const navigation = useNavigation();

    async function loadPlanets() {

        if (loading) {
            return;
        }

        if (total > 0 && total === planets.length) {
            return;
        }

        setLoading(true);
        const response = await api.get('planets', {
            params: { page }
        });

        setPlanets([...planets, ...response.data.results]);
        setTotal(response.data.count);
        setPage(page + 1);
        setLoading(false);
    }

    function navigateToDetail(planet,residents) {
        navigation.navigate('Detail', { planet,residents });
    }

    function renderFooter() {
        if (!loading) return null;
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="#0488CD" />
            </View>
        );
    }

    async function getResidentsInfo(planets) {
        let residentsList = [];
        setResidents([]);

        for (const info of planets.residents) {
            const id = info.replace(/\D/g, "");

            await api
                .get(`people/${id}/`)
                .then((res) => {
                    if (!res) {
                    }
                    residentsList.push(res.data);
                })
                .catch((err) => {
                    console.log(err);
                })
                .finally(() => {
                    setLoadingResidents(false);
                });
        }
        setResidents(residentsList);
        setLoadingResidents(false);
    }

    const handlePlanetDetail = useCallback((planet) => {
        setChosedPlanet(planet);
        getResidentsInfo(planet);
        setLoadingResidents(true);
        if(planet.residents.length === 0){
            setLoadingResidents(false);   
            setResidents([{name:"Nenhum residente"}])
        }
    }, []);

    useEffect(() => {
        loadPlanets();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Planetas Star Wars</Text>
            
            <FlatList
                data={planets}
                keyExtractor={planet => planet.url.toString()}
                onEndReached={loadPlanets}
                onEndReachedThreshold={0.2}
                ListFooterComponent={renderFooter}
                style={styles.planetList}
                renderItem={({ item: planet }) => (
                    <View style={styles.planet}>
                        <Text style={styles.planetProperty}>Nome:</Text>
                        <Text style={styles.planetValue}>{planet.name}</Text>

                        <Text style={styles.planetProperty}>Populalação:</Text>
                        <Text style={styles.planetValue}>{planet.population}</Text>


                        <TouchableOpacity
                            style={styles.detailsButton}
                            onPress={() => handlePlanetDetail(planet)}>

                            <Text style={styles.detailsButtonText}>Mais Detalhes</Text>
                            <Feather name="arrow-right" size={16} color="#0488CD" />
                            {loadingResidents? null : navigateToDetail(chosedPlanet,residents)}
                        </TouchableOpacity>

                    </View>
                )}
            />
        </View>
    );
}