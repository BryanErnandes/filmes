import {useState, useEffect} from "react";
//import {View, Text} from 'react-native'
import { useNavigation, useRoute } from "@react-navigation/native";


import { Container, Header, BotaoBanner, Banner, } from "./styles";


import AntDesign from 'react-native-vector-icons/AntDesign'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

import api from '../../Services/api'



export default function Detalhes({data, }) {

    const navigation = useNavigation();
    const route = useRoute();

    const [filme, setFilme] = useState({});

    useEffect(() => {

        let isActive = true


        async function loadFilmes() {
            const response = await api.get(`/movie/${route.params?.id}`, {
                params:{
                    api_key: 'd241f0e37bcc6c6e110a2bcbd4069f69',
                    language: 'pt-BR'
                }
             })
             .catch((err) =>{
                console.log(err)
             })
             if(isActive){
                setFilme(response.data);
             }

        }

        if(isActive) {

            loadFilmes();
        }
        return () => {
            isActive = false}
    }, [])

    return (
        <Container>
            <Header>
                <BotaoBanner onPress={() => navigation.navigate('Principal')}>
                    <SimpleLineIcons name="arrow-left" size={30} color='#E66C40' />
                </BotaoBanner>

                <BotaoBanner>
                    <AntDesign name="heart" size={30} color='#F0200C' />
                </BotaoBanner>
            </Header>
            <Banner
                resizeMode='stretch'
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${filme.backdrop_path}`
                }}
            />
        </Container>
    )
}