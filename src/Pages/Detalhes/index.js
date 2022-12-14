import React from "react";
//import {View, Text} from 'react-native'
import { Container, Header, BotaoBanner, Banner, } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native";



export default function Detalhes() {

    const navigation = useNavigation()

    return (
        <Container>
            <Header>
                <BotaoBanner onPress={() => navigation.navigate('Principal')}>
                    <Ionicons name="md-arrow-undo-circle-sharp" size={37} color='#000000' />
                </BotaoBanner>

                <BotaoBanner>
                    <AntDesign name="heart" size={37} color='#F0200C' />
                </BotaoBanner>
            </Header>
            <Banner
                resizeMode='stretch'
                source={{
                    uri: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
                }}
            />
        </Container>
    )
}