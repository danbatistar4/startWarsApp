import React, { useState, useEffect } from 'react';
import { View, Text, FlatList,ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';


import styles from './styles';

export default function Detail() {
    const route = useRoute();

    const { planet } = route.params;
    const { residents } = route.params;
    function renderEmpty() {
        return (
            <View style={styles.loading}>
                <ActivityIndicator color="#0488CD" />
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Detalhes de {planet.name}</Text>
            <View style={styles.teste}>
                    <Text style={styles.property}>Clima</Text>
                    <Text style={styles.planetValue}>{planet.climate}</Text>

                    <Text style={styles.property}>Terreno</Text>
                    <Text style={styles.planetValue}>{planet.terrain}</Text>

                    <Text style={styles.property}>População</Text>
                    <Text style={styles.planetValue}>{planet.population}</Text>

            <View style={styles.propertyContainer}>
                <Text style={styles.property}>Nome</Text>
                <Text style={styles.property} >Massa</Text>
            </View>
            <FlatList 
                data={residents}
                keyExtractor={residents => residents.name.toString()}
                ListEmptyComponent={renderEmpty}
                onEndReachedThreshold={0.2}
                renderItem={({ item: resident }) => (
                    <View style={styles.planet}>
                        <Text style={styles.residentValue}>{resident.name}</Text>
                        <Text style={styles.residentValue}>{resident.mass}</Text>
                    </View>
                )}
            />
            </View>

        </View>
    );
}