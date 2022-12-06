import React from "react";
import { Text, SafeAreaView } from "react-native";

import { Container } from "./styles";
import Header from "../../Components/Haeder/index.js";

export default function Filme() {
    return (
        <Container>
            <Header /*title="Filme"*/ />
            <Text>Fileewee</Text>
        </Container>
    )
}