import React from "react";
import { ScrollView } from "react-native";
import AntDesign from 'react-native-vector-icons/AntDesign'


import {
    Container, Form, Input, Button, Title,
    Body, Banner, ButtonCard,
    Slider
} from "./styles";


import Header from "../../Components/Haeder/index.js";
import SliderItem from "../../Components/SliderItem"

export default function Principal() {
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
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({ item }) => <SliderItem />} 
                            />


                </Body>
            </ScrollView>
        </Container>
    )
}