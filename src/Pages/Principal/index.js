import { useState, useEffect } from "react";
import { SafeAreaView, View, ScrollView, ActivityIndicator } from "react-native";
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import api from "../../Services/api"
import { getListaFilmes, randomBanner } from '../../utils/filmes'


import { Container, Form, Input, Button, Title, Body, Banner, ButtonCard, Slider, ContainerTexto, TextoBanner, } from "./styles";



import Header from "../../Components/Haeder/index.js";
import SliderItem from "../../Components/SliderItem";



export default function Principal() {

    const [nowFilmes, setNowFilmes] = useState([]);
    const [popularFilmes, setPopularFilmes] = useState([]);
    const [topFilmes, setTopFilmes] = useState([]);
    const [bannerFilme, setBannerFilme] = useState({})
    const [loading, setLoading] = useState(true)

    const navigation = useNavigation()



    useEffect(() => {
        let isActive = true

        async function loadFilmes() {

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
            const popularLista = getListaFilmes(5, popularFilmes.data.results)
            const topLista = getListaFilmes(5, topFilmes.data.results)


            setNowFilmes(nowLista);
            setPopularFilmes(popularLista);
            setTopFilmes(topLista)

            //console.log(popularFilmes)
            setInterval(() => {
                setLoading(false)
            }, 3000)

        }
        if(isActive) {

            loadFilmes();
        }
        return () => {
            isActive = false}

    }, [])

    function navigateDetalhesPagina(item) {
        navigation.navigate('Detalhes', {id: item.id})

        //console.log(item.id)
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
            <Header /*title="Meus Filmes Lista"*/ />
            <ScrollView>
                <Form>
                    <Input placeholder="Nome do filme"
                        placeholderTextColor='#fff' />
                    <Button activeOpacity={0.9}>
                        <AntDesign name="search1" size={40} color='#fff' />
                    </Button>
                </Form>
                <Body>
                    <Title>Lançamentos</Title>
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

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={nowFilmes}
                        renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyEstractor={(item) => string(item.id)}
                    />

                    <Title>Populares</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={popularFilmes}
                        renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyEstractor={(item) => string(item.id)}
                    />

                    <Title>Mais Votados</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={topFilmes}
                        renderItem={({ item }) => <SliderItem data={item} navigatePagina={() => navigateDetalhesPagina(item)} />}
                        keyEstractor={(item) => string(item.id)}
                    />


                </Body>
            </ScrollView>
        </Container>
    )
}