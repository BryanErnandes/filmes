import { useState, useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";


import { ScrollView, ActivityIndicator, SafeAreaView, StyleSheet } from 'react-native'
import { Container, Header, BotaoBanner, AssiBanner, FavBanner, Banner, Titulo, Title, ListaGeneros, Descricao, Body, Notas, Populidade } from "./styles";


import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'

import api from '../../Services/api'
import Generos from "../../Components/Generos";

import { FilmeFavoritosSalvo, hasFavorito, deleteFavorito } from "../../utils/estoque"

import { FilmeAssistosSalvo, hasAssistido, deleteAssistido } from "../../utils/estoqueAssistido"



export default function Detalhes() {


    const navigation = useNavigation();
    const route = useRoute();

    const [filme, setFilme] = useState({});
    const [favoritosFilme, setFavoritosFilme] = useState(false)
    const [assistidoFilme, setAssistidoFilme] = useState(false)
    const [loading, setLoading] = useState(true)

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
                const isAssistido = await hasAssistido(response.data)
                setAssistidoFilme(isAssistido)

                const isFavorito = await hasFavorito(response.data)
                setFavoritosFilme(isFavorito)

                // console.log(response.data)
            }

            setInterval(() => {
                setLoading(false)
            }, 3000)

        }

        if (isActive) {

            loadFilmes();
        }
        return () => {
            isActive = false
        }
    }, [])

    async function filmeAssistidos(filme) {
        if (assistidoFilme) {
            await deleteAssistido(filme.id)
            setAssistidoFilme(false);
            //alert("filme deletado")
        } else {
            await FilmeAssistosSalvo('@assistido', filme)
            setAssistidoFilme(true)
            //alert("filme salvo")
        }
    }

    async function FilmeFavoritos(filme) {

        if (favoritosFilme) {
            await deleteFavorito(filme.id);
            setFavoritosFilme(false);
            //alert('filme removido');

        }
        else {
            FilmeFavoritosSalvo('@favorito', filme)
            setFavoritosFilme(true);
            //alert('filme salvo')
        }
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
            <Header>
                <BotaoBanner onPress={() => navigation.navigate('Principal')}>
                    <Entypo name="arrow-left" size={29} color='#fff' />
                </BotaoBanner>

                <AssiBanner activeOpacity={0.8} onPress={() => filmeAssistidos(filme)}>
                    {assistidoFilme ? (
                        <Entypo name="eye" size={24} color='#000000' />
                    ) : (
                        <Entypo name="eye-with-line" size={24} color='#000000' />
                    )}
                </AssiBanner>

                <FavBanner activeOpacity={0.8} onPress={() => FilmeFavoritos(filme)}>
                    {favoritosFilme ? (
                        <AntDesign name="heart" size={24} color='#FA3800' />
                    ) : (
                        <AntDesign name="hearto" size={24} color='#FA3800' />
                    )}
                </FavBanner>
            </Header>
            <Banner
                resizeMode='stretch'
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
                }}
            />

            <Titulo>
                <Title>{filme.title}</Title>

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


const styles = StyleSheet.create({
    Carregamento: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#000000',
    },

  });
  