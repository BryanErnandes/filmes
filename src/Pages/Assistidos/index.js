import React, { useState, useEffect } from "react";

//import {View, Text} from 'react-native';
import Header from "../../Components/Haeder/index.js";
import { Container, Lista } from "./styles";
import CompletoItem from "../../Components/FilmesAssistidos"

import { getAssistidoSalvos, deleteAssistido } from "../../utils/estoqueAssistido";
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { ActivityIndicator, SafeAreaView, StyleSheet } from "react-native";


export default function Completo() {

    const [filme, setFilme] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isActive = true

        async function getCompleto() {
            const resultado = await getAssistidoSalvos('@assistido')

            if (isActive) {
                setFilme(resultado);
                //console.log(resultado)
            }

            setInterval(() => {
                setLoading(false)
            }, 3000)

            
        }

        if (isActive) {
            getCompleto();
        }
        return () => {
            isActive = false
        }

        
    }, [isFocused])

    async function botaoDelete(id) {
        const resultado = await deleteAssistido(id);
        setFilme(resultado)
    }

    function navigateDetalhesPagina(item) {
        navigation.navigate('Detalhes', { id: item.id })
    }

    if (loading === true) {
        return (
            <SafeAreaView style={styles.Carregamento}>
                <ActivityIndicator size={150} color="#F57500" />
            </SafeAreaView>
        )
    }

    return (
        <Container>

            <Header title={"Completo"} />


            <Lista
                sta
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={3}
                data={filme}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <CompletoItem
                        data={item}
                        deleteAssistido={botaoDelete}
                        navigatePag={() => navigateDetalhesPagina(item)}
                    />
                )}

            />
        </Container>
    )
}

const styles = StyleSheet.create({
    Carregamento: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#000000',
    },

  });
  