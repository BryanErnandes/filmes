import React from "react";
import { View, Text } from 'react-native';
import { Body, Banner, Title, ContainerTitle, ContainerIcon, Rate } from "./styles";
import Foundation  from 'react-native-vector-icons/Foundation';


export default function SliderItem() {
    return (
        <Body>
            <Banner
                resizeMethod="resize"
                source={{
                    uri: 'https://images.unsplash.com/photo-1533450718592-29d45635f0a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8anBnfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
                }} />

            <ContainerTitle>
                <Title>Vingadores</Title>
            </ContainerTitle>
            <ContainerIcon>
            <Foundation name="star" size={20} color='#FADF31' />
            <Rate>10/10</Rate>
            </ContainerIcon>

        </Body>
    )
}