import React from "react";

import { Container, ContainerBanner, Banner, Form, Title, Input, Botao, Botao2, Botao3, TituloBotao, TituloBotao2, TituloBotao3, Sociais, Facebook, Twitter, Google } from "./style";
import { AuthContext } from "../../utils/auth";
import { useNavigation } from "@react-navigation/native";

import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign"
import { Keyboard, TouchableWithoutFeedback } from "react-native";

export default function Login() {

    const navigation = useNavigation()

    const [email, setEmail] = React.useState();
    const [password, setPassword] = React.useState();

    const { login } = React.useContext(AuthContext);

    const loginHandle = async () => {
        try {
            await login(email, password);
            navigation.navigate("Principal");
        }
        catch (err) {
            console.log(err)
            setEmail('')
            setPassword('')
        }
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
            <ContainerBanner>
                <Banner
                    resizeMode="stretch"
                    source={require('../../../assets/logo.png')} />
            </ContainerBanner>

            <Form>
                <Title>Nome de usuario</Title>
                <Input placeholder='Nome de Usuario'
                    placeholderTextColor="#000000"
                    value={email} onChangeText={setEmail} />
                <Title>Sua senha</Title>
                <Input placeholder='Senha'
                    placeholderTextColor="#000000"
                    value={password} onChangeText={setPassword}
                    secureTextEntry={true} />

                <Botao activeOpacity={0.5}>
                    <TituloBotao onPress={() => loginHandle()}>Entra</TituloBotao>
    </Botao>
                {/*<Botao3 activeOpacity={0.5}>
                    <TituloBotao3>Não possuir uma conta? Cadastre-se</TituloBotao3>
    </Botao3>*/}
               {/* <Sociais>
                    <Facebook>
                        <Entypo name="facebook" size={55} color="#0D2CDB" />
                    </Facebook>
                    <Twitter>
                        <Entypo name="twitter" size={55} color="#389BFA" />
                    </Twitter>
                    <Google>
                        <AntDesign name="google" size={55} color="#FA1D00" />
                    </Google>
    </Sociais>*/}
            </Form>
        </Container>
        </TouchableWithoutFeedback>
            
        
    )
}