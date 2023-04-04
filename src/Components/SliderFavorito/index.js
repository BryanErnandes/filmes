import React from "react";
//import { TouchableOpacity, Text } from 'react-native';
import {  Body, Button, Banner, Title, ContainerTitle, Rate } from "./styles";
//import Foundation  from 'react-native-vector-icons/Foundation';


export default function SliderFavorito({ data, navigatePagina }) {
    return (
            <Body activeOpacity={0.9} onPress={() => navigatePagina(data)}>

                <Banner
                    resizeMode="cover"
                    source={{
                        uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`
                    }} />

                <ContainerTitle>
                    <Title numberOfLines={1}>{data.title}</Title>
                </ContainerTitle>

            </Body>
    )
}
