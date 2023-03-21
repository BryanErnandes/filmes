import React from "react";
//import {View, Text} from 'react-native'
import { Container, Button , Title } from "./styles";
import AntDesign from 'react-native-vector-icons/AntDesign'
import {useNavigation} from '@react-navigation/native'

export default function Header({title}) {
    const navigation = useNavigation()
    return(
    <Container>
        <Button onPress={() => navigation.openDrawer()}>
            <AntDesign name="menu-unfold" size={30} color='#E66C40' />
        </Button>
       <Title>{title}</Title>
    </Container>
    )
}