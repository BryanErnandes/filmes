import React from "react";

import { Container, ContainerBanner, Banner, Form, Input, Botao, Botao2, TituloBotao, TituloBotao2 } from "./style";

import { useNavigation } from "@react-navigation/native";

import { Entypo } from "@expo/vector-icons/Entypo";

export default function Login() {

    const navigation = useNavigation()
    return (
        <Container>
            <ContainerBanner>
                <Banner
                resizeMode="stretch"
                source={require('../../../assets/logo.png')} />
            </ContainerBanner>
            
            <Form>
                <Input placeholder='Email' 
                placeholderTextColor="#000000" />
                <Input placeholder='Senha'
                placeholderTextColor="#000000" />
                
                <Botao onPress={() => navigation.navigate('Principal')}>
                    <TituloBotao>Entra</TituloBotao>
                </Botao>
                <Botao2>
                    <TituloBotao2>Criar nova conta</TituloBotao2>
                </Botao2>
            </Form>
        </Container>
    )
}