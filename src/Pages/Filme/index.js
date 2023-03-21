import React, { useState, useEffect } from "react";
import { Container, Lista } from "./styles";
import Header from "../../Components/Haeder/index.js";
import FavoritosItem from '../../Components/filmesFavoritos'


import { getFavoritosSalvos, deleteFavorito } from '../../utils/estoque';
import { useNavigation, useIsFocused } from "@react-navigation/native";


export default function Favoritos() {

    const isFocused = useIsFocused()
    const navigation = useNavigation()
    const [filme, setFilme] = useState([]);

    useEffect(() => {
        let isActive = true;

        async function getFavoritos() {
            const resultado = await getFavoritosSalvos('@favorito')

            if (isActive) {
                setFilme(resultado);
                //console.log(resultado);
            }

        }

        if (isActive) {
            getFavoritos();
        }

        return () => {
            isActive = false
        }

    }, [isFocused])

    async function hanledDelete(id) {
        const resultado = await deleteFavorito(id);
        setFilme(resultado);
    }

    function navigateDetalhesPag(item) {
        navigation.navigate('Detalhes', { id: item.id })
    }

    return (
        <Container>

            <Header title="Favoritos" />

            <Lista
                showsVerticalScrollIndicator={false}
                horizontal={false}
                numColumns={3}
                data={filme}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => (
                    <FavoritosItem
                        data={item}
                        deleteFavorito={hanledDelete}
                        navigatePag={() => navigateDetalhesPag(item)}
                    />
                )} />

        </Container>
    )
}
