import React from "react"
//import {View, Text} from 'react-native';

import { Container, ContainerTitle, Titulo, Banner, Botao, BotaoBanner } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons'


    export default function FavoritosItem({data, deleteFavorito, navigatePag}) {
    return (
        <Container>
        <Botao activeOpacity={0.8} onPress={ () => deleteFavorito(data.id)}>
            <Ionicons name="trash-bin" size={21} color='#fff' />
        </Botao>

        <BotaoBanner activeOpacity={0.8} onPress={ () => navigatePag(data)}>
            <Banner
                resizeMethod="auto"
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                }} />
            <ContainerTitle>
                <Titulo numberOfLines={2}>{data.title}</Titulo>

            </ContainerTitle>

        </BotaoBanner>

    </Container>
    )
}