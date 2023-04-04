import React from "react";
//import { TouchableOpacity, Text } from 'react-native';
import { Body, Button, Banner, Title, ContainerTitle, ContainerIcon, Rate } from "./styles";
//import Foundation  from 'react-native-vector-icons/Foundation';


export default function SliderItem( {data, navigatePagina} ) {
    return (
        <Body>
            <Button activeOpacity={0.9} onPress={() => navigatePagina(data)}>
            <Banner
                resizeMode="cover"
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${data.backdrop_path}`
                }} />

            <ContainerTitle>
                <Title numberOfLines={4}>{data.title}</Title>
            </ContainerTitle>
            {/*<ContainerIcon>
            <Foundation name="star" size={20} color='#FADF31' />
            <Rate>{data.vote_average}</Rate>
            </ContainerIcon>*/}

            </Button>

        </Body>
    )
}