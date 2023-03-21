import styled from "styled-components/native"

export const Container = styled.View` 
width: 28%;
height: 189px; 
margin-top: 15px;
margin-right: 9px;
margin-bottom: 5px;
margin-left: 9px;

`;

export const Botao = styled.TouchableOpacity`
z-index: 99;
position: absolute;
top: 5px;
left: 86px;
background:  rgba(5, 10, 1, 0.60)
padding: 5px 5px;
border-radius: 10px;

`;

export const BotaoBanner = styled.TouchableOpacity`

`;

export const Banner = styled.Image`
height: 190px;
width: 110%;
margin-right: 20px;
border-radius: 5px;
`;

export const Containertitle = styled.View`
z-index: 99;
position: absolute;
top: 129px;
left: 2px;
background: rgba(5, 10, 1, 0.27);
border-radius: 5px;
padding-top: 5px;
padding-left: 1px;
padding-bottom: 2px
`;

export const Titulo = styled.Text`
 color: #fff
 font-size: 15px;
 font-weight: bold;
 padding-right: 5px;
 padding-left: 2px;
`;
