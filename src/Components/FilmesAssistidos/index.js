import React from "react";
//import { SafeAreaView, Text } from "react-native";
import  Ionicons  from "@expo/vector-icons/Ionicons";
import { Container, Botao, BotaoBanner, Titulo, Banner, Containertitle } from './styles'


export default function Completo({data, deleteAssistido, navigatePag}) {
    return (
        <Container>

            <Botao activeOpacity={0.8} onPress={ () => deleteAssistido(data.id)}>
                <Ionicons name="trash-bin" size={21} color="#fff" />
            </Botao>

            <BotaoBanner activeOpacity={0.8} onPress={ () => navigatePag(data)}>
                <Banner
                    resizeMethod="resize"
                    source={{ uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}` }} />
                <Containertitle>
                    <Titulo numberOfLines={2}>{data.title}</Titulo>
                </Containertitle>

            </BotaoBanner>
        </Container>
    )
}