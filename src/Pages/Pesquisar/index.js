import React, { useState, useEffect } from "react";
import { SafeAreaView, View, ActivityIndicator } from "react-native";
import { Container, Buscar } from "./styles";
import { useNavigation, useRoute } from '@react-navigation/native'

import api from "../../Services/api";
import BuscarItem from "../../Components/BuscarItem";

export default function Search() {

    const navigation = useNavigation();
    const route = useRoute();

   
    const [filme, setFilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isActive = true;

        async function getPesquisarFilme() {
            const response = await api.get('/search/movie', {
                params: {
                    api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                    language: 'pt-BR',
                    query: route?.params?.name,
                    page: 1,
                }
            })

            if (isActive) {
                setFilme(response.data.results);
                //console.log(response.data.results)
                setLoading(false);
            }

        }

        if (isActive) {
            getPesquisarFilme();
        }
        return () => {
            isActive = false
        }
    }, [])

    function navigateDetalhesPagina(item){
        navigation.navigate('Detalhes', {id: item.id})
    }


    if (loading === true) {
        return (

            <SafeAreaView style={{ marginTop: 200 }}>
                <View>
                    <ActivityIndicator size={150} color="#F57500" marginTop={100} />

                </View>
            </SafeAreaView>
        )
    }

    return (
        <Container>
            <Buscar
                data={filme}
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={2}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <BuscarItem data={item} navigatePagina= {() => navigateDetalhesPagina(item)} />}
            />
        </Container>
    )
} 