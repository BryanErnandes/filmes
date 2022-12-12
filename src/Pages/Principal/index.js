import {useState, useEffect} from "react";
import { ScrollView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'

import api from "../../Services/api"


import {
    Container, Form, Input, Button, Title,
    Body, Banner, ButtonCard,
    Slider
} from "./styles";


import Header from "../../Components/Haeder/index.js";
import SliderItem from "../../Components/SliderItem"

export default function Principal() {

    const [nowFilmes, setNowFilmes] = useState([]);
    const [popularFilmes, setPopularFilmes] = useState([]);
    const [topFilmes, setTopFilmes] = useState([]);
    
    useEffect(() => {

        async function loadFilmes() {

            const [nowFilmes, popularFilmes, topFilmes] = await Promise.all([
                api.get('/movie/now_playing',{
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/popular',{
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }
                }),
                api.get('/movie/top_rated',{
                    params: {
                        api_key: "d241f0e37bcc6c6e110a2bcbd4069f69",
                        language: 'pt-BR',
                        page: 1
                    }
                })
            ])
        console.log(popularFilmes)
       
        }
        loadFilmes();
    })
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
                    <ButtonCard activeOpacity={0.9} onPress={() => alert('TESTE')}>
                        <Banner
                            resizeMethod="resize"
                            source={{
                                uri: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                            }} />

                    </ButtonCard>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <SliderItem />}
                    />

                    <Title>Populares</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <SliderItem />}
                    />

                    <Title>Mais Votados</Title>

                    <Slider
                        horizontal={true}
                        showsHorizontalScrollIndicador={false}
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({ item }) => <SliderItem />}
                    />


                </Body>
            </ScrollView>
        </Container>
    )
}