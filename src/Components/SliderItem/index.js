import React from "react";
import { View, Text } from 'react-native';
import { Container, TitleBanner, Title } from "./styles";

export default function SliderItem() {
    return (
        <Container>
            <Banner
                resizeMethod="resize"
                source={{
                    uri: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                }} />

                <Title>Item</Title>
        </Container>
    )
}