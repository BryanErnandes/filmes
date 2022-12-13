import React from "react";
//import { TouchableOpacity, Text } from 'react-native';
import { Body, Button, Banner, Title, ContainerTitle, ContainerIcon, Rate } from "./styles";
import Foundation  from 'react-native-vector-icons/Foundation';


export default function SliderItem( {data} ) {
    return (
        <Body>
            <Button activeOpacity={0.9} onPress={() => alert('TESTE')}>
            <Banner
                resizeMode="stretch"
                source={{
                    uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`
                }} />

            <ContainerTitle>
                <Title numberOfLines={1}>{data.title}</Title>
            </ContainerTitle>
            <ContainerIcon>
            <Foundation name="star" size={20} color='#FADF31' />
            <Rate>10/10</Rate>
            </ContainerIcon>

            </Button>

        </Body>
    )
}