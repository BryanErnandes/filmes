import { useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, ScrollView, ActivityIndicator, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useNavigation, useIsFocused } from '@react-navigation/native'
import AppIntroSlider from "react-native-app-intro-slider";
import AntDesign from 'react-native-vector-icons/AntDesign'

import api from "../../Services/api"
import { getListaFilmes, randomBanner } from '../../utils/filmes'
import { getFavoritosSalvos } from "../../utils/estoque";


import { Container, Form, Input, Button, Title, Body, Banner, ButtonCard, Slider, SliderFavoritos, ContainerTexto, TextoBanner, } from "./styles";



import Header from "../../Components/Haeder/index.js";
import SliderItem from "../../Components/SliderItem";
import SliderFavorito from "../../Components/SliderFavorito"
import FilmesCarousel from "../../Components/Carousel"



export default function Principal() {


    const [nowFilmes, setNowFilmes] = useState([]);
    const [popularFilmes, setPopularFilmes] = useState([]);
    const [topFilmes, setTopFilmes] = useState([]);
    const [bannerFilme, setBannerFilme] = useState({})
    const [loading, setLoading] = useState(true)
    const [input, setInput] = useState('')
    const [favoritos, setFavoritos] = useState([])
    const isFocused = useIsFocused()

    const navigation = useNavigation()


    useEffect(() => {
        let isActive = true


        async function loadFilmes() {
            const resultados = await getFavoritosSalvos('@favorito');

            const [nowFilmes, popularFilmes, topFilmes] = await Promise.all([
                api.get('/movie/now_playing', {
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }

                }),
                api.get('/movie/popular', {
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated', {
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }
                })

            ])

            setBannerFilme(nowFilmes.data.results[randomBanner(nowFilmes.data.results)])
            const nowLista = getListaFilmes(10, nowFilmes.data.results)
            const popularLista = getListaFilmes(7, popularFilmes.data.results)
            const topLista = getListaFilmes(7, topFilmes.data.results)
            setNowFilmes(nowLista);
            setPopularFilmes(popularLista);
            setTopFilmes(topLista)

            //console.log(popularFilmes)
            setInterval(() => {
                setLoading(false)
            }, 3000)

            if (isActive) {
                setFavoritos(resultados)
                //console.log(resultados)
            }

        }
        if (isActive) {
            loadFilmes();
        }
        return () => {
            isActive = false
        }

    }, [isFocused])

    function navigateDetalhesPagina(item) {
        navigation.navigate('Detalhes', { id: item.id })


        //console.log(item.id)
    }
    function handleSearchMovie() {
        if (input === '')
            return;
        navigation.navigate('Search', { name: input })
        setInput('');
    }

    if (loading === true) {
        return (

            <SafeAreaView style={styles.Carregamento}>
                <ActivityIndicator size={150} color="#F57500" />
            </SafeAreaView>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container showsVerticalScrollIndicator={false}>
            <Header title=" Filmes DataBase" />
            <ScrollView showsVerticalScrollIndicator={false}>
                <Form>
                    <Input placeholder="Nome do Filme"
                        placeholderTextColor='#fff'
                        value={input}
                        onChangeText={(text) => setInput(text)} />
                    <Button onPress={handleSearchMovie} activeOpacity={0.9}>
                        <AntDesign name="search1" size={40} color='#fff' />
                    </Button>
                </Form>
                <Body>

                    <AppIntroSlider
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        dotStyle={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
                        activeDotStyle={{ backgroundColor: "rgba(0, 0, 231, 1)" }}
                        renderNextButton={() => { }}
                        renderDoneButton={() => { }}
                        data={nowFilmes}
                        renderItem={({ item }) => <FilmesCarousel data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyExtractor={(item) => String(item.id)}
                    />

                    <Title>Favoritos</Title>

                    <SliderFavoritos
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={favoritos}
                        renderItem={({ item }) => <SliderFavorito data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyExtractor={(item) => String(item.id)}
                    />

                    <Title>Populares Recentes</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={popularFilmes}
                        renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyExtractor={(item) => String(item.id)}
                    />
                    <Title>Lançamento</Title>

                    <ButtonCard activeOpacity={0.9} onPress={() => navigateDetalhesPagina(bannerFilme)}>
                        <Banner
                            resizeMethod="resize"
                            source={{
                                uri: `https://image.tmdb.org/t/p/original/${bannerFilme.backdrop_path}`
                            }} />
                        <ContainerTexto>
                            <TextoBanner numberOfLines={1}>{bannerFilme.title}</TextoBanner>
                        </ContainerTexto>

                    </ButtonCard>

                    <Title>Mais Votados</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={topFilmes}
                        renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyExtractor={(item) => String(item.id)}
                    />


                </Body>
            </ScrollView>
        </Container>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    Carregamento: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: '#000000',
    },

  });