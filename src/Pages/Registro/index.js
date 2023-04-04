import React from "react";
import {Keyboard, TouchableWithoutFeedback} from "react-native"

import { Container, ContainerRegistro, Registro, Title, Form, Input, Botao, TituloBotao } from "./style";
import { useNavigation } from "@react-navigation/native";

export default function Registra() {

    const navigation = useNavigation()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

            <Container>
            <ContainerRegistro>
                <Registro>Nova conta</Registro>
            </ContainerRegistro>
            <Form>

                <Title>Nome de usuario</Title>

                <Input placeholder='Nome de Usuario'
                    placeholderTextColor="#000000" />

                <Title>Sua senha</Title>

                <Input placeholder='Senha'
                    placeholderTextColor="#000000"
                    secureTextEntry={true} />

                <Title>Confimar senha</Title>

                <Input placeholder='Confimar senha'
                    placeholderTextColor="#000000"
                    secureTextEntry={true} />


                <Botao activeOpacity={0.5}>
                    <TituloBotao onPress={() => navigation.navigate('Login')}>Registra</TituloBotao>
                </Botao>
            </Form>
        </Container>
        </TouchableWithoutFeedback>
        
    )
}

//add