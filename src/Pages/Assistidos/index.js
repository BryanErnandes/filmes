import React, {useState, useEffect} from "react";

//import {View, Text} from 'react-native';
import Header from "../../Components/Haeder/index.js";
import { Container, Lista } from "./styles";
import CompletoItem from "../../Components/FilmesAssistidos"

import { getAssistidoSalvos, deleteAssistido } from "../../utils/estoqueAssistido";
import { useNavigation, useIsFocused } from "@react-navigation/native";


export default function Completo() {

    const [filme, setFilme] = useState([])
    const navigation = useNavigation()
    const isFocused = useIsFocused()

    useEffect(() => {
        let isActive = true

        async function getCompleto() {
            const resultado = await getAssistidoSalvos('@assistido')

            if (isActive) {
                setFilme(resultado);
                //console.log(resultado)
            }
        }

        if(isActive) {
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
navigation.navigate('Detalhes', {id: item.id})
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
            renderItem={ ({item}) => (
                <CompletoItem 
                data={item}
                deleteAssistido={botaoDelete}
                navigatePag={ () => navigateDetalhesPagina(item)}
                />
            )}
            
            />
        </Container>
    )
}