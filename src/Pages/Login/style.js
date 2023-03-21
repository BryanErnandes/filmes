import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
flex: 1;
background-color: #0E58AE;
justify-content: center;
`;

export const Banner = styled.Image`
height: 190px;
width: 57%;
`;

export const ContainerBanner = styled.View`
flex: 1
align-items: center;
justify-content: center;
margin-bottom: 17px;
`;


export const Form = styled.View`
flex: 1;
align-items: center;
`;

export const Input = styled.TextInput`
background-color: #fff;
height: 45px;
width: 90%;
margin-top: 2px;
margin-bottom: 8px;
padding: 10px 14px 10px;
color: "#fff";
font-size: 19px;
font-weight: bold
border-radius: 8px;
`;

export const Botao = styled.TouchableOpacity`
background-color: #fff;
height: 45px;
width: 90%;
border-radius: 8px;
margin-top: 5px;
margin-bottom: 0px;
padding: 10px 14px 10px;
color: "#fff";
`;

export const Botao2 = styled.TouchableOpacity`
background-color: #0E58AE;
height: 38px;
width: 50%;
border-radius: 8px;
margin-top: 5px;
margin-bottom: 10px;
padding-top: 1px;
color: "#fff";
`;

export const TituloBotao = styled.Text`
font-size: 20px;
font-weight: bold;
text-align: center;
`;
export const TituloBotao2 = styled.Text`
font-size: 25px;
font-weight: bold;
text-align: center;
color: #E66C40
`;
