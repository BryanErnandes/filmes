import { useState, useEffect } from "react";
//import {View, Text} from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";


import {ScrollView} from 'react-native'
import { Container, Header, BotaoBanner, Banner, Titulo, Title, ListaGeneros, Descricao, Body, Notas, Populidade } from "./styles";


import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import api from '../../Services/api'
import Generos from "../../Components/Generos";



export default function Detalhes() {


    const navigation = useNavigation();
    const route = useRoute();

    const [filme, setFilme] = useState({});

    useEffect(() => {

        let isActive = true


        async function loadFilmes() {
            const response = await api.get(`/movie/${route.params?.id}`, {
                params: {
                    api_key: 'd241f0e37bcc6c6e110a2bcbd4069f69',
                    language: 'pt-BR'
                }
            })
                .catch((err) => {
                    console.log(err)
                })
            if (isActive) {
                setFilme(response.data);
            }

        }

        if (isActive) {

            loadFilmes();
        }
        return () => {
            isActive = false
        }
    }, [])

    return (
        <Container>
            <Header>
                <BotaoBanner onPress={() => navigation.navigate('Principal')}>
                    <Entypo name="arrow-left" size={29} color='#fff' />
                </BotaoBanner>

                <BotaoBanner>
                    <AntDesign name="heart" size={24} color='#fff' />
                </BotaoBanner>
            </Header>
            <Banner
                resizeMode='stretch'
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
                }}
            />

            <Titulo>
                <Title numberOfLines={1}>{filme.title}</Title>
            </Titulo>

            <Body>
                <Notas>Nota: {filme.vote_average}</Notas>
                <Populidade>Populidade: {filme.popularity}</Populidade>
            </Body>

            <ListaGeneros
                data={filme?.genres}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <Generos data={item} />}
            />
            <ScrollView>
                <Descricao>{filme.overview}</Descricao>
            </ScrollView>



        </Container>
    )
}